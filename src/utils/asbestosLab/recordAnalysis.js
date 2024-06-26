import firebase from 'firebase/compat/app'
import { asbestosAnalysisLogRef, asbestosSamplesRef, cocsRef } from '../../config/firebase'
import { writeDescription, writeResult, writeShorthandResult } from './helpers'
import { addLog } from '../../actions/local'
import moment from 'moment'
import { dateOf } from '../../actions/helpers'
import { startAnalysis } from './sampleChanges'

export const updateResultMap = (result, map) => {
  let updatedMap = {}

  if (map === undefined) {
    updatedMap = { [result]: true }
  } else {
    let res = true
    if (map[result] !== undefined) res = !map[result]
    updatedMap = {
      ...map,
      [result]: res
    }
    if ((result === 'ch' || result === 'am' || result === 'cr' || result === 'umf') && map['no'] === true) updatedMap['no'] = false
    if (result === 'no') {
      ;['ch', 'am', 'cr', 'umf'].forEach((type) => {
        if (map[type] === true) updatedMap[type] = false
      })
    }
  }

  return updatedMap
}

export const recordAnalysis = (
  batch,
  analyst,
  sample,
  job,
  samples,
  sessionID,
  me,
  resultChanged,
  weightChanged,
  resultOverridden,
  weightOverridden
) => {
  console.log('Record Analysis')
  console.log(resultChanged)
  console.log(weightChanged)
  if (resultChanged) {
    let log = {}
    if (resultOverridden) {
      if (writeShorthandResult(sample) === 'NO RESULT') {
        log = {
          type: 'Analysis',
          log: `Result removed for sample ${sample.sampleNumber} (${writeDescription(sample)})`,
          sample: sample.uid,
          chainOfCustody: job.uid
        }
      } else {
        log = {
          type: 'Analysis',
          log: `Previous analysis of sample ${sample.sampleNumber} (${writeDescription(sample)}) overridden.`,
          sample: sample.uid,
          chainOfCustody: job.uid
        }
      }
    } else {
      log = {
        type: 'Analysis',
        log: `New analysis for sample ${sample.sampleNumber} (${writeDescription(sample)}): ${writeResult(
          sample.result,
          sample.noAsbestosResultReason
        ).replace('@~', ' ')}`,
        sample: sample.uid,
        chainOfCustody: job.uid
      }
    }
    console.log(log)
    addLog('asbestosLab', log, me, batch)
  }
  if (weightChanged) {
    let log = {}
    if (sample.weightReceived === '') {
      log = {
        type: 'Analysis',
        log: `Received weight removed for sample ${sample.sampleNumber} (${writeDescription(sample)})`,
        sample: sample.uid,
        chainOfCustody: job.uid
      }
    } else if (weightOverridden) {
      log = {
        type: 'Analysis',
        log: `Previous received weight for sample ${sample.sampleNumber} (${writeDescription(sample)}) overridden`,
        sample: sample.uid,
        chainOfCustody: job.uid
      }
    } else {
      log = {
        type: 'Analysis',
        log: `New received weight for sample ${sample.sampleNumber} (${writeDescription(sample)}): ${sample.weightReceived}g`,
        sample: sample.uid,
        chainOfCustody: job.uid
      }
    }
    addLog('asbestosLab', log, me, batch)
  }

  batch.update(cocsRef.doc(job.uid), {
    versionUpToDate: false,
    mostRecentIssueSent: false
  })

  // Check for situation where all results are unselected
  let notBlankAnalysis = false
  sample.result &&
    Object.values(sample.result).forEach((value) => {
      if (value) notBlankAnalysis = true
    })
  if (sample.weightReceived) notBlankAnalysis = true
  if (notBlankAnalysis) {
    if (!sample.analysisStarted) startAnalysis(batch, sample, job, samples, sessionID, me, new Date(), true)
    if (resultChanged) {
      console.log('Result changed')
      batch.set(asbestosAnalysisLogRef.doc(`${sessionID}-${sample.uid}`), {
        analysisDate: new Date(),
        analyst: analyst,
        sessionID: sessionID,
        cocUid: job.uid,
        weightReceived: sample.weightReceived ? sample.weightReceived : null,
        result: sample.result,
        analysisRecordedBy: {
          name: me.name,
          uid: me.uid
        },
        analysisStartDate: sample.analysisStartDate ? sample.analysisStartDate : new Date(),
        analysisStartedBy: sample.analysisStartedBy ? sample.analysisStartedBy : { name: me.name, uid: me.uid },
        analysisTime: sample.analysisTime ? sample.analysisTime : 0,
        category: sample.category ? sample.category : 'Other',
        issueVersion: job.currentVersion ? job.currentVersion : 1,
        jobNumber: sample.jobNumber ? sample.jobNumber : null,
        material: sample.material ? sample.material : null,
        receivedDate: sample.receivedDate ? sample.receivedDate : new Date(),
        sampleNumber: sample.sampleNumber ? sample.sampleNumber : null,
        genericLocation: sample.genericLocation ? sample.genericLocation : null,
        specificLocation: sample.specificLocation ? sample.specificLocation : null,
        description: sample.description ? sample.description : null,
        sampleUid: sample.uid ? sample.uid : null,
        waAnalysisComplete: sample.waAnalysisComplete ? sample.waAnalysisComplete : null,
        waTotals: sample.waTotals ? sample.waTotals : null,
        weightAshed: sample.weightAshed ? sample.weightAshed : null,
        weightDry: sample.weightDry ? sample.weightDry : null,
        uid: `${sessionID}-${sample.uid}`
      })
      console.log(`Updating result with new analyst ${analyst}`)
      batch.update(asbestosSamplesRef.doc(sample.uid), {
        analysisRecordedBy: { uid: me.uid, name: me.name },
        sessionID: sessionID,
        analyst: analyst ? analyst : null,
        result: sample.result ? sample.result : null,
        weightReceived: sample.weightReceived ? sample.weightReceived : null,
        analysisDate: new Date(),
        analysisTime: sample.receivedDate ? moment.duration(moment(new Date()).diff(dateOf(sample.receivedDate))).asMilliseconds() : null
      })
    } else if (weightChanged) {
      batch.update(asbestosSamplesRef.doc(sample.uid), {
        weightReceived: sample.weightReceived ? sample.weightReceived : null
      })
    }
  } else {
    batch.delete(asbestosAnalysisLogRef.doc(`${sessionID}-${sample.uid}`))
    batch.update(asbestosSamplesRef.doc(sample.uid), {
      result: firebase.firestore.FieldValue.delete(),
      analysisDate: firebase.firestore.FieldValue.delete(),
      analysisRecordedBy: firebase.firestore.FieldValue.delete(),
      sessionID: firebase.firestore.FieldValue.delete(),
      analysisTime: firebase.firestore.FieldValue.delete(),
      analyst: firebase.firestore.FieldValue.delete(),
      weightReceived: sample.weightReceived ? sample.weightReceived : null
    })
  }
}

export const removeResult = (batch, sample, sessionID, me) => {
  let log = {
    type: 'Analysis',
    log: `Sample ${sample.sampleNumber} (${writeDescription(sample)}) result removed.`,
    sample: sample.uid,
    chainOfCustody: sample.cocUid
  }
  addLog('asbestosLab', log, me, batch)

  batch.update(cocsRef.doc(sample.cocUid), {
    versionUpToDate: false,
    mostRecentIssueSent: false
  })
  batch.delete(asbestosAnalysisLogRef.doc(`${sessionID}-${sample.uid}`))
  batch.update(asbestosSamplesRef.doc(sample.uid), {
    result: firebase.firestore.FieldValue.delete(),
    analysisDate: firebase.firestore.FieldValue.delete(),
    analysisRecordedBy: firebase.firestore.FieldValue.delete(),
    sessionID: firebase.firestore.FieldValue.delete()
  })
}
