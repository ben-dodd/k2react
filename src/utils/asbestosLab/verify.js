import moment from 'moment'
import { addLog } from '../../actions/local'
import { asbestosSamplesRef, cocsRef } from '../../config/firebase'
import { collateArrayResults, collateLayeredResults, compareAsbestosResult, getBasicResult, writeDescription } from './helpers'
import { startAnalysis } from './sampleChanges'
import firebase from 'firebase/compat/app'
import { dateOf } from '../../actions/helpers'

export const verifySample = (batch, sample, job, samples, sessionID, me, startDate, properties, noLog) => {
  //console.log('Verifying');
  if (me.auth && (me.auth['Analysis Checker'] || me.auth['Asbestos Admin'])) {
    if (!sample.analysisStarted && !sample.verified) startAnalysis(batch, sample, job, samples, sessionID, me, true)
    if (!noLog) {
      let log = {
        type: 'Verified',
        log: !sample.verified
          ? `Sample ${sample.sampleNumber} (${writeDescription(sample)}) result verified.`
          : `Sample ${sample.sampleNumber} (${writeDescription(sample)}) verification removed.`,
        sample: sample.uid,
        chainOfCustody: job.uid
      }
      addLog('asbestosLab', log, me, batch)
    }

    batch.update(cocsRef.doc(sample.cocUid), {
      versionUpToDate: false,
      mostRecentIssueSent: false
    })
    if (!sample.verified) {
      sample.verifyDate = new Date()
      batch.update(asbestosSamplesRef.doc(sample.uid), {
        ...properties,
        verified: true,
        verifiedBy: { uid: me.uid, name: me.name },
        verifyDate: startDate ? startDate : new Date(),
        turnaroundTime: sample.receivedDate ? moment.duration(moment().diff(dateOf(sample.receivedDate))).asMilliseconds() : null
      })
    } else {
      batch.update(asbestosSamplesRef.doc(sample.uid), {
        ...properties,
        verified: false,
        verifiedBy: firebase.firestore.FieldValue.delete(),
        verifyDate: firebase.firestore.FieldValue.delete(),
        turnaroundTime: firebase.firestore.FieldValue.delete()
      })
    }
  } else {
    window.alert("You don't have sufficient permissions to verify asbestos results.")
  }
}

export const verifySubsample = (batch, sub, job, samples, sessionID, me, noLog) => {
  console.log('Verifying subsample')
  console.log(sub)
  // return false;
  if (me.auth && (me.auth['Analysis Checker'] || me.auth['Asbestos Admin'])) {
    let sample = samples[sub.sampleNumber] ? samples[sub.sampleNumber] : null
    if (sample && sample.waSoilAnalysis && sample.waSoilAnalysis[sub.uid]) {
      if (!sub.verified) {
        sub.verified = true
        sub.verifyDate = new Date()
        sub.verifiedBy = { uid: me.uid, name: me.name }
        batch.update(asbestosSamplesRef.doc(sample.uid), {
          waSoilAnalysis: {
            ...sample.waSoilAnalysis,
            [sub.uid]: sub
          }
        })
      } else {
        console.log('Removing verification...')
        sub.verified = false
        sub.verifyDate = null
        sub.verifiedBy = null
        batch.update(asbestosSamplesRef.doc(sample.uid), {
          waSoilAnalysis: {
            ...sample.waSoilAnalysis,
            [sub.uid]: sub
          }
        })
      }
    }
  } else {
    window.alert("You don't have sufficient permissions to verify asbestos results.")
  }
}

export const verifySamples = (samples, job, meUid, checkIssues, allowSameUserVerification) => {
  let issues = {}
  // Check for issues
  samples.forEach((sample) => {
    // console.log(sample);
    let uid = ''
    if (!sample.now && !checkIssues) {
      // if (sample.original === sample.now) {
      //   uid = sample.uid + 'ResultNotVerified';
      //   issues[uid] = {
      //     type: 'check',
      //     description: `Result has not been verified. This sample will not appear on lab reports.`,
      //     yes: 'This is correct',
      //     no: 'This needs fixing',
      //     sample,
      //     uid,
      //   };
      // }
      if (sample.original !== sample.now) {
        uid = sample.uid + 'ResultNotVerified'
        issues[uid] = {
          type: 'check',
          description: `Result has been unverified. Double check this is correct and leave a comment on why verification has been removed. This sample will not appear on lab reports.`,
          yes: 'Remove Verification',
          no: 'Do not remove',
          sample,
          uid
        }
      }
    } else if (sample.now !== sample.original) {
      if (!allowSameUserVerification && sample.analysisRecordedBy && sample.analysisRecordedBy.uid === meUid && !checkIssues) {
        uid = sample.uid + 'SameUser'
        issues[uid] = {
          type: 'block',
          description: `You cannot verify this sample as you recorded the result. You will need to get someone else to verify it.`,
          no: 'OK',
          sample,
          uid
        }
      }
      // Check sample if is on hold
      if (sample.onHold) {
        uid = sample.uid + 'OnHold'
        issues[uid] = {
          type: 'check',
          description: `Sample is on hold. This will not appear on lab reports until it is taken off hold.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sample,
          uid
        }
      }

      // Check result has been added
      if (getBasicResult(sample) === 'none') {
        uid = sample.uid + 'NoAsbestosResult'
        issues[uid] = {
          type: 'noresult',
          description: `No asbestos result has been recorded. Double check this is correct and select a reason for why this is.`,
          sample,
          uid
        }
      }

      // Check received weight is there
      if (!sample.weightReceived) {
        uid = sample.uid + 'NoReceivedWeightRecorded'
        issues[uid] = {
          type: 'confirm',
          description: `No received weight has been recorded. Check with the analyst why this has not been done.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sample,
          uid
        }
      }

      // Check sampling personnel
      if (!sample.sampledBy) {
        uid = sample.uid + 'NoSampledBy'
        issues[uid] = {
          type: 'confirm',
          description: `No sampling personnel recorded for this sample. Check if this is correct.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sample,
          uid
        }
      }

      // Check sampling date

      if (!sample.sampleDate && !(sample.sampledBy && sample.sampledBy[0] && sample.sampledBy[0].value !== 'Client')) {
        uid = sample.uid + 'NoSampleDate'
        issues[uid] = {
          type: 'confirm',
          description: `No sampling date has been recorded. Check if this is correct.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sample,
          uid
        }
      }

      // Check layer results
      if (sample.layers) {
        let layersResult = { result: collateLayeredResults(sample.layers) }
        let layersMatch = compareAsbestosResult(layersResult, sample)
        if (layersMatch !== 'yes') {
          if (layersMatch === 'no') {
            uid = sample.uid + 'LayerResultOpposing'
            issues[uid] = {
              type: 'confirm',
              priority: 'high',
              description: `Cumulative results for layer detail have opposing results to the sample result. Check with analyst why this is before clicking Proceed.`,
              sample,
              uid
            }
          } else if (layersMatch === 'differentAsbestos') {
            uid = sample.uid + 'LayerResultDifferentAsbestos'
            issues[uid] = {
              type: 'confirm',
              priority: 'high',
              description: `Cumulative results for layer detail record different asbestos types to the sample result. Check with analyst why this is before clicking Proceed.`,
              sample,
              uid
            }
          } else if (layersMatch === 'differentNonAsbestos') {
            uid = sample.uid + 'LayerResultDifferentNonAsbestos'
            issues[uid] = {
              type: 'confirm',
              priority: 'low',
              description: `Cumulative results for layer detail record different non-asbestos types to the sample result. Check with analyst why this is before clicking Proceed.`,
              sample,
              uid
            }
          }
        }
      }

      // Check confirm results
      if (sample.confirm !== undefined) {
        let confirmTotal = 0
        let confirmYes = 0
        let confirmDifferentAsbestos = 0
        let confirmDifferentNonAsbestos = 0
        let confirmNo = 0
        Object.keys(sample.confirm).forEach((key) => {
          confirmTotal++
          let confirmMatch = compareAsbestosResult(sample.confirm[key], sample)
          if (confirmMatch === 'yes') {
            confirmYes++
          } else if (confirmMatch === 'no') {
            confirmNo++
          } else if (confirmMatch === 'differentAsbestos') {
            confirmDifferentAsbestos++
          } else if (confirmMatch === 'differentNonAsbestos') {
            confirmDifferentNonAsbestos++
          }
        })
        if (confirmNo + confirmDifferentAsbestos + confirmDifferentNonAsbestos > 0) {
          if (confirmNo > 0) {
            uid = sample.uid + 'ConfirmResultOpposing'
            issues[uid] = {
              type: 'confirm',
              priority: 'high',
              description: `${confirmNo} checked ${confirmNo > 1 ? 'analyses have' : 'analysis has an'} opposing ${
                confirmNo > 1 ? 'results' : 'result'
              } to the reported result. Check with analyst and analysis ${confirmNo > 1 ? 'checkers' : 'checker'} before clicking Proceed.`,
              sample,
              uid
            }
          } else if (confirmDifferentAsbestos > 0) {
            uid = sample.uid + 'ConfirmResultDifferentAsbestos'
            issues[uid] = {
              type: 'confirm',
              priority: 'high',
              description: `${confirmDifferentAsbestos} checked ${
                confirmDifferentAsbestos > 1 ? 'analyses have' : 'analysis has a'
              } different asbestos result to the reported result. Check with analyst and analysis ${
                confirmDifferentAsbestos > 1 ? 'checkers' : 'checker'
              } before clicking Proceed.`,
              sample,
              uid
            }
          } else if (confirmDifferentNonAsbestos > 0) {
            uid = sample.uid + 'ConfirmResultDifferentNonAsbestos'
            issues[uid] = {
              type: 'confirm',
              priority: 'low',
              description: `${confirmDifferentNonAsbestos} checked ${
                confirmDifferentNonAsbestos > 1 ? 'analyses report' : 'analysis reports'
              } different non-asbestos fibres to the reported result. Check with analyst and analysis ${
                confirmDifferentNonAsbestos > 1 ? 'checkers' : 'checker'
              } before clicking Proceed.`,
              sample,
              uid
            }
          }
        }
      }

      // Check WA Analysis if applicable
      if (job.waAnalysis) {
        // Get subfractions of sample
        let subsamples = []
        let allSubsVerified = true
        if (sample.waLayerNum) {
          Object.keys(sample.waLayerNum).forEach((fraction) => {
            ;[...Array(sample.waLayerNum[fraction] ? sample.waLayerNum[fraction] : 2).keys()].forEach((num) => {
              if (sample.waSoilAnalysis[`subfraction${fraction}-${num + 1}`] !== undefined) {
                let sub = sample.waSoilAnalysis[`subfraction${fraction}-${num + 1}`]
                if (sub.containerID) {
                  if (!sub.verified) allSubsVerified = false
                  subsamples.push(sub)
                }
              }
            })
          })
        }

        if (!sample.weightDry) {
          uid = sample.uid + 'WAAnalysisNoDryWeight'
          issues[uid] = {
            type: 'confirm',
            description: `No dry weight has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (!sample.weightAshed) {
          uid = sample.uid + 'WAAnalysisNoAshedWeight'
          issues[uid] = {
            type: 'confirm',
            description: `No ashed weight has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (!sample.waSoilAnalysis || (!sample.waSoilAnalysis.formDescription && getBasicResult(sample) === 'positive')) {
          uid = sample.uid + 'WAAnalysisNoFormDescription'
          issues[uid] = {
            type: 'confirm',
            description: `No asbestos form description has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (!sample.waSoilAnalysis || !sample.waSoilAnalysis.fractiongt7WeightAshed) {
          uid = sample.uid + 'WAAnalysisNoGt7WeightAshed'
          issues[uid] = {
            type: 'confirm',
            description: `No ashed weight for the >7mm fraction has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (!sample.waSoilAnalysis || !sample.waSoilAnalysis.fractionto7WeightAshed) {
          uid = sample.uid + 'WAAnalysisNoTo7WeightAshed'
          issues[uid] = {
            type: 'confirm',
            description: `No ashed weight for the 2-7mm fraction has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (!sample.waSoilAnalysis || !sample.waSoilAnalysis.fractionlt2WeightAshed) {
          uid = sample.uid + 'WAAnalysisNoLt2WeightAshed'
          issues[uid] = {
            type: 'confirm',
            description: `No ashed weight for the <2mm fraction has been recorded. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (
          sample.waSoilAnalysis &&
          sample.waSoilAnalysis.fractiongt7WeightAshed &&
          sample.waSoilAnalysis.fractionto7WeightAshed &&
          sample.waSoilAnalysis.fractionlt2WeightAshed &&
          (
            parseFloat(sample.waSoilAnalysis.fractiongt7WeightAshed) +
            parseFloat(sample.waSoilAnalysis.fractionto7WeightAshed) +
            parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed)
          ).toFixed(1) !== parseFloat(sample.weightAshed).toFixed(1)
        ) {
          uid = sample.uid + 'WAAnalysisFractionWeightsNotEqual'
          issues[uid] = {
            type: 'confirm',
            description: `Cumulative ashed weight of fractions does not equal the total ashed weight of sample. Check with the analyst why this is.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (sample.weightReceived && sample.weightDry && parseFloat(sample.weightDry) > parseFloat(sample.weightReceived)) {
          uid = sample.uid + 'WAAnalysisDryWeightLarger'
          issues[uid] = {
            type: 'confirm',
            description: `Dry weight is heavier than the received weight. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (sample.weightAshed && sample.weightDry && parseFloat(sample.weightAshed) > parseFloat(sample.weightDry)) {
          uid = sample.uid + 'WAAnalysisAshedWeightLarger'
          issues[uid] = {
            type: 'confirm',
            description: `Ashed weight is heavier than the dry weight. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (
          sample.waSoilAnalysis &&
          sample.waSoilAnalysis.fractionlt2WeightAshed &&
          sample.waSoilAnalysis.fractionlt2WeightAshedSubsample &&
          parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshedSubsample) > parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed)
        ) {
          uid = sample.uid + 'WAAnalysisLt2SubsampleWeightLarger'
          issues[uid] = {
            type: 'confirm',
            description: `Subsample weight of the <2mm fraction is larger than the total weight of the <2mm fraction. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (sample.weightSubsample && sample.weightReceived && parseFloat(sample.weightSubsample) > parseFloat(sample.weightReceived)) {
          uid = sample.uid + 'WAAnalysisSubsampleWeightLarger'
          issues[uid] = {
            type: 'confirm',
            description: `Subsample weight is larger than the total weight received. Check with the analyst why this has not been done.`,
            yes: 'This is correct',
            no: 'This needs fixing',
            sample,
            uid
          }
        }

        if (subsamples.length === 0 && getBasicResult(sample) === 'positive') {
          uid = sample.uid + 'WAAnalysisNoSubsamples'
          issues[uid] = {
            type: 'confirm',
            description: `No subsamples recorded for sample, but sample result is positive. Check with analyst that analysis is complete before clicking Proceed.`,
            sample,
            uid
          }
        }

        if (!allSubsVerified) {
          uid = sample.uid + 'WAAnalysisNotAllSubsVerified'
          issues[uid] = {
            type: 'block',
            description: `Not all subsample weights have been verified. Go into the subsample verification screen and check these off first.`,
            sample,
            uid
          }
        }

        if (!sample.waAnalysisComplete) {
          uid = sample.uid + 'WAAnalysisNotComplete'
          issues[uid] = {
            type: 'confirm',
            description: `WA Analysis has not been checked by analyst as complete. Check with analyst that analysis is complete before clicking Proceed.`,
            sample,
            uid
          }
        }

        if (subsamples.length > 0) {
          let soilResult = { result: collateArrayResults(subsamples) }
          let soilMatch = compareAsbestosResult(soilResult, sample)
          if (soilMatch !== 'yes') {
            if (soilMatch === 'no') {
              uid = sample.uid + 'SoilResultOpposing'
              issues[uid] = {
                type: 'confirm',
                priority: 'high',
                description: `Cumulative results for soil fractions have opposing results to the sample result. Check with analyst why this is before clicking Proceed.`,
                sample,
                uid
              }
            } else if (soilMatch === 'differentAsbestos') {
              uid = sample.uid + 'SoilResultDifferentAsbestos'
              issues[uid] = {
                type: 'confirm',
                priority: 'high',
                description: `Cumulative results for soil fractions record different asbestos types to the sample result. Check with analyst why this is before clicking Proceed.`,
                sample,
                uid
              }
            } else if (soilMatch === 'differentNonAsbestos') {
              uid = sample.uid + 'SoilResultDifferentNonAsbestos'
              issues[uid] = {
                type: 'confirm',
                priority: 'low',
                description: `Cumulative results for soil fractions record different non-asbestos types to the sample result. Check with analyst why this is before clicking Proceed.`,
                sample,
                uid
              }
            }
          }
        }
      }
    }
  })
  if (checkIssues) {
    let issueArray = [['Sample Number', 'Issue']]
    Object.values(issues).forEach((issue) => {
      let sample = issue.sample ? `${issue.sample.jobNumber}-${issue.sample.sampleNumber}` : ''

      issueArray.push([sample, issue.description])
    })
    return issueArray
  } else return issues
}

export const verifySubsamples = (subs, job, meUid, duplicateIDs) => {
  let issues = {}
  let uid = ''
  // Check for duplicate IDs
  if (duplicateIDs) {
    uid = job.jobNumber + 'DuplicateSubsampleIDs'
    issues[uid] = {
      type: 'check',
      description: `More than one subsample is using ID ${duplicateIDs}.`,
      yes: 'This is correct',
      no: 'This needs fixing',
      uid
    }
  }

  // Check for issues
  subs.forEach((sub) => {
    let uid = ''
    if (!sub.now && sub.original) {
      // if (sub.original === sub.now) {
      //   uid = sub.containerID + 'ResultNotVerified';
      //   issues[uid] = {
      //     type: 'check',
      //     description: `Subsample has not been verified.`,
      //     yes: 'This is correct',
      //     no: 'This needs fixing',
      //     sub,
      //     uid,
      //   };
      // } else {
      uid = sub.containerID + 'ResultNotVerified'
      issues[uid] = {
        type: 'check',
        description: `Subsample has been unverified. Double check this is correct and leave a comment on why verification has been removed.`,
        yes: 'Remove Verification',
        no: 'Do not remove',
        sub,
        uid
      }
      // }
    } else if (sub.now) {
      // Check result has been added
      if (getBasicResult(sub) === 'none') {
        uid = sub.containerID + 'NoAsbestosResult'
        issues[uid] = {
          type: 'noresult',
          description: `No asbestos result has been recorded.`,
          sub,
          uid
        }
      }

      // Check weight is there
      if (!sub.weight) {
        console.log(sub)
        uid = sub.containerID + 'NoWeightRecorded'
        issues[uid] = {
          type: 'confirm',
          description: `No weight has been recorded. Check with the analyst why this has not been done.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sub,
          uid
        }
      }

      // Check weight is there
      if (!sub.concentration) {
        uid = sub.containerID + 'NoConcentrationRecorded'
        issues[uid] = {
          type: 'confirm',
          description: `No concentration has been recorded. Check with the analyst why this has not been done.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sub,
          uid
        }
      }

      // Check weight is there
      if (!sub.form) {
        uid = sub.containerID + 'NoFormRecorded'
        issues[uid] = {
          type: 'confirm',
          description: `No asbestos form has been recorded. Check with the analyst why this has not been done.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sub,
          uid
        }
      }
    }
  })
  return issues
}
