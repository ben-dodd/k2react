//
// COC EDIT
//

import moment from 'moment'
import { writeDescription } from './helpers'
import { addLog } from '../../actions/local'
import { andList, dateOf } from '../../actions/helpers'
import { firestore, asbestosSamplesRef, cocsRef } from '../../config/firebase'
import { DELETE_COC } from '../../constants/action-types'
import { getAirSampleData } from './air'

export const handleCocSubmit = async ({ doc, me, originalSamples, sampleType }) => {
  let sampleList = [],
    sampleCount = 0,
    batch = firestore.batch()
  if (doc.samples) {
    // //console.log(doc.samples);
    Object.keys(doc.samples).forEach((sampleNumber) => {
      let sample = doc.samples[sampleNumber]
      if (sample.cocUid === doc.uid) sampleCount++
      if (sampleType === 'bulk' && (sample.genericLocation || sample.specificLocation || sample.description || sample.material)) {
        // //console.log(sample);
        if (!sample.uid) {
          let uid = `${doc.jobNumber}-SAMPLE-${sampleNumber}-CREATED-${moment().format('x')}-${Math.round(Math.random() * 1000)}`
          // //console.log(`UID for new sample is ${uid}`);
          let log = {
            type: 'Create',
            log: doc.historicalCoc
              ? `Historical sample ${sampleNumber} (${writeDescription(sample)}) created.`
              : `Sample ${sampleNumber} (${writeDescription(sample)}) created.`,
            chainOfCustody: doc.uid,
            sample: uid
          }
          addLog('asbestosLab', log, me, batch)
          sample.uid = uid
          sample.deleted = false
          sample.createdDate = new Date()
          sample.createdBy = { uid: me.uid, name: me.name }
          sample.sampleType = doc.sampleType || 'bulk'
          if (doc.historicalCoc) {
            sample.inhouseSampling = doc.inhouseSampling || 'true'
            sample.sampledBy = doc.sampledBy || null
            sample.otherSampledBy = doc.otherSampledBy || null
            sample.sampleDate = doc.sampleDate || null
            sample.samplingCompany = doc.samplingCompany || null
            sample.samplingCompanyRef = doc.samplingCompanyRef || null
            sample.samplingCompanyPersonnel = doc.samplingCompanyPersonnel || null
            sample.samplingCompanyRef = doc.samplingCompanyRef || null

            sample.inhouseTesting = doc.inhouseTesting || 'true'
            sample.testingLaboratory = doc.testingLaboratory || null
            sample.testingLaboratoryRef = doc.testingLaboratoryRef || null
            sample.testingLaboratoryAnalysts = doc.testingLaboratoryAnalysts || null

            sample.receivedDate = doc.receivedDate || null
            sample.analysisDate = doc.analysisDate || null
            sample.analyst = doc.analysisBy ? andList(doc.analysisBy.map((e) => e.name)) : null
            sample.issueDate = doc.issueDate || null
            sample.verified = true
            sample.verifyDate = doc.issueDate || null
          } else {
            if (sample.sampleDate === undefined && doc.defaultSampleDate !== null) sample.sampleDate = doc.defaultSampleDate
            sample.sampleDate = dateOf(sample.sampleDate)
            if (!sample.sampledBy && doc.defaultSampledBy.length > 0)
              sample.sampledBy = doc.defaultSampledBy.map((e) => ({
                uid: e.value,
                name: e.label
              }))
          }
          sampleList.push(uid)
        } else {
          if (sample.verified && sample !== originalSamples[sampleNumber]) {
            let log = {
              type: 'Edit',
              log: `Sample ${sampleNumber} (${writeDescription(sample)}) modified.`,
              chainOfCustody: doc.uid,
              sample: sample.uid
            }
            addLog('asbestosLab', log, me, batch)
            if (!doc.historicalCoc) sample.verified = false
          }
          sampleList.push(sample.uid)
        }
        // //console.log(`Submitting sample ${sample} to ${docid}`);
        let sample2 = sample
        if (sample2.description) sample2.description = sample2.description.charAt(0).toUpperCase() + sample2.description.slice(1)
        sample2.jobNumber = doc.jobNumber
        if (sample2.cocUid === undefined) sample2.cocUid = doc.uid
        sample2.sampleNumber = parseInt(sampleNumber, 10)
        sample2.sampleDate = dateOf(sample2.sampleDate)
        if ('disabled' in sample2) delete sample2.disabled
        batch.set(asbestosSamplesRef.doc(sample.uid), sample2)
      }
      if (
        sampleType === 'air' &&
        sample.initialFlowRate &&
        sample.finalFlowRate &&
        sample.startTime &&
        (sample.endTime || sample.totalRunTime)
      ) {
        // //console.log(sample);
        let calc = getAirSampleData(sample)
        if (!sample.uid) {
          let uid = `${doc.jobNumber}-SAMPLE-${sampleNumber}-CREATED-${moment().format('x')}-${Math.round(Math.random() * 1000)}`
          // //console.log(`UID for new sample is ${uid}`);
          let log = {
            type: 'Create',
            log: doc.historicalCoc
              ? `Historical sample ${sampleNumber} (${sample.specificLocation || 'Untitled'}) created.`
              : `Sample ${sampleNumber} (${sample.specificLocation || 'Untitled'}) created.`,
            chainOfCustody: doc.uid,
            sample: uid
          }
          addLog('asbestosLab', log, me, batch)
          sample.uid = uid
          sample.deleted = false
          sample.createdDate = new Date()
          sample.createdBy = { uid: me.uid, name: me.name }
          sample.sampleType = doc.sampleType || 'air'

          if (doc.historicalCoc) {
            sample.inhouseSampling = doc.inhouseSampling || 'true'
            sample.sampledBy = doc.sampledBy || null
            sample.otherSampledBy = doc.otherSampledBy || null
            sample.sampleDate = doc.sampleDate || null
            sample.samplingCompany = doc.samplingCompany || null
            sample.samplingCompanyRef = doc.samplingCompanyRef || null
            sample.samplingCompanyPersonnel = doc.samplingCompanyPersonnel || null
            sample.samplingCompanyRef = doc.samplingCompanyRef || null

            sample.inhouseTesting = doc.inhouseTesting || 'true'
            sample.testingLaboratory = doc.testingLaboratory || null
            sample.testingLaboratoryRef = doc.testingLaboratoryRef || null
            sample.testingLaboratoryAnalysts = doc.testingLaboratoryAnalysts || null

            sample.receivedDate = doc.receivedDate || null
            sample.analysisDate = doc.analysisDate || null
            sample.analyst = doc.analysisBy ? andList(doc.analysisBy.map((e) => e.name)) : null
            sample.issueDate = doc.issueDate || null
            sample.verified = true
            sample.verifyDate = doc.issueDate || null
          } else {
            if (doc.defaultSampleDate) sample.sampleDate = dateOf(doc.defaultSampleDate)
            if (doc.defaultSampledBy && doc.defaultSampledBy.length > 0)
              sample.sampledBy = doc.defaultSampledBy.map((e) => ({
                uid: e.value,
                name: e.label
              }))
          }
          sample = {
            ...sample,
            ...calc
          }
          sampleList.push(uid)
        } else {
          if (sample.verified && sample !== originalSamples[sampleNumber]) {
            let log = {
              type: 'Edit',
              log: `Sample ${sampleNumber} (${sample.specificLocation ? sample.specificLocation : 'Untitled'}) modified.`,
              chainOfCustody: doc.uid,
              sample: sample.uid
            }
            addLog('asbestosLab', log, me, batch)
            sample.verified = false
          }
          sampleList.push(sample.uid)
        }
        // //console.log(`Submitting sample ${sample} to ${docid}`);
        let sample2 = sample
        sample2.jobNumber = doc.jobNumber
        if (sample2.cocUid === undefined) sample2.cocUid = doc.uid
        sample2.sampleNumber = parseInt(sampleNumber, 10)
        sample2.sampleDate = dateOf(sample2.sampleDate)
        if ('disabled' in sample2) delete sample2.disabled
        batch.set(asbestosSamplesRef.doc(sample.uid), sample2)
      }
    })
  }
  let doc2 = doc
  if ('samples' in doc2) delete doc2.samples
  doc2.uid = doc.uid
  doc2.sampleCount = sampleCount
  doc2.sampleType = sampleType
  doc2.sampleList = sampleList
  doc2.createdDate = doc2.sampleDate || new Date()
  doc2.lastModified = doc2.issueDate || new Date()
  batch.set(cocsRef.doc(doc.uid), doc2)
  batch.commit()
}

export const togglePriority = (job, me) => {
  let log = {
    type: 'Admin',
    log: job.priority === 1 ? `Chain of Custody changed to normal priority.` : `Chain of Custody marked as high priority.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me)
  cocsRef.doc(job.uid).update({ priority: job.priority === 0 ? 1 : 0 })
}

export const toggleWAAnalysis = (job, me) => {
  let log = {
    type: 'Admin',
    log: job.waAnalysis ? `WA analysis request removed.` : `Chain of Custody flagged for WA analysis.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me)
  cocsRef.doc(job.uid).update({ waAnalysis: job.waAnalysis ? false : true })
}

export const deleteCoc = (job, samples, me) => (dispatch) => {
  if (window.confirm('Are you sure you wish to delete this Chain of Custody?')) {
    let log = {}
    samples &&
      Object.values(samples).forEach((sample) => {
        // console.log(sample);
        log = {
          type: 'Delete',
          log: `Sample ${sample.sampleNumber} (${writeDescription(sample)}) deleted.`,
          sample: sample.uid,
          chainOfCustody: job.uid
        }
        // console.log(log);
        addLog('asbestosLab', log, me)
        asbestosSamplesRef.doc(sample.uid).update({ deleted: true })
      })
    log = {
      type: 'Delete',
      log: 'Chain of Custody deleted.',
      chainOfCustody: job.uid
    }
    addLog('asbestosLab', log, me)
    cocsRef.doc(job.uid).update({ deleted: true })

    dispatch({ type: DELETE_COC, payload: job.uid })
    // fetchCocs();
  } else return
}
