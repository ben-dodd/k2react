import moment from 'moment'
import momentbusinessdays from 'moment-business-days'
import momenttimezone from 'moment-timezone'
import momentbusinesstime from 'moment-business-time'
import { getAllConfirmResult, getBasicResult, writeShorthandResult, writeSoilDetails } from './helpers'
import { dateOf, milliToDHM } from '../../actions/helpers'
import { cocsRef } from '../../config/firebase'

export const getSampleData = (samples, job) => {
  let dataArray = []
  let subSampleMap = getWASubsampleList(samples)
  if (job.waAnalysis) {
    let firstArray = [
      'Job Number',
      'Sample Number',
      'Generic Location',
      'Specific Location',
      'Description',
      'Material',
      'Material Category',
      'Result',
      'Sample Date',
      'Sampled By',
      'Created Date',
      'Created By',
      'Received Date',
      'Received By',
      'Analysis Start Date',
      'Analysis Started By',
      'Analysis Date',
      'Analysis By',
      'Analysis Recorded By',
      'Verified Date',
      'Verified By',
      'Received Weight',
      'Subsample Weight',
      'Dry Weight',
      'Ashed Weight',
      'Moisture',
      '>7mm Fraction Weight',
      '2-7mm Fraction Weight',
      '<2mm Fraction Weight',
      '<2mm Subfraction Weight',
      '<2mm Fraction/Subfraction Ratio',
      'Asbestos Form Description',
      'Geotechnical Soil Description',
      'ACM Concentration',
      'FA Concentration',
      'AF Concentration',
      'FAAF Concentration',
      'Cumulative Result',
      'Concentration Over Limit',
      'Number of Subsamples'
    ]
    let midArray = []
    if (subSampleMap.subsampleCount > 0) {
      ;[...Array(subSampleMap.subsampleCount).keys()].forEach((s) => {
        midArray = midArray.concat([
          'Subsample ID',
          'Fraction',
          'Gross Weight',
          'Tare Weight',
          'Concentration',
          'Asbestos Form',
          'Asbestos Type',
          'Asbestos Weight'
        ])
      })
    }
    let lastArray = ['WA Analysis Complete', 'Analysis Time', 'Session ID']
    dataArray.push(firstArray.concat(midArray.concat(lastArray)))
    if (samples) {
      Object.values(samples).forEach((sample) => {
        let multiplier = 1
        if (
          sample.waSoilAnalysis &&
          sample.waSoilAnalysis.fractionlt2WeightAshed &&
          sample.waSoilAnalysis.fractionlt2WeightAshedSubsample
        ) {
          multiplier =
            parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed) / parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshedSubsample)
        }
        let midArray = []
        let sampleSubs = subSampleMap.subsamples.filter((sub) => sub.sampleNumber === sample.sampleNumber)
        let firstArray = [
          sample.jobNumber ? sample.jobNumber : '',
          sample.sampleNumber ? sample.sampleNumber : '',
          sample.genericLocation ? sample.genericLocation : '',
          sample.specificLocation ? sample.specificLocation : '',
          sample.description ? sample.description : '',
          sample.material ? sample.material : '',
          sample.category ? sample.category : '',
          sample.result ? writeShorthandResult(sample.result) : '',
          sample.sampleDate ? moment(dateOf(sample.sampleDate)).format('YYYY-MMM-DD') : '',
          sample.sampledBy ? sample.sampledBy.map((p) => p.name).join(', ') : '',
          sample.createdDate ? moment(dateOf(sample.createdDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.createdBy ? sample.createdBy.name : '',
          sample.receivedDate ? moment(dateOf(sample.receivedDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.receivedBy ? sample.receivedBy.name : '',
          sample.analysisStartDate ? moment(dateOf(sample.analysisStartDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.analysisStartedBy ? sample.analysisStartedBy.name : '',
          sample.analysisDate ? moment(dateOf(sample.analysisDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.analyst ? sample.analyst : '',
          sample.analysisRecordedBy ? sample.analysisRecordedBy.name : '',
          sample.verifyDate ? moment(dateOf(sample.verifyDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.verifiedBy ? sample.verifiedBy.name : '',
          sample.weightReceived ? sample.weightReceived : '',
          sample.weightSubsample ? sample.weightSubsample : '',
          sample.weightDry ? sample.weightDry : '',
          sample.weightAshed ? sample.weightAshed : '',
          sample.weightDry && (sample.weightReceived || sample.weightSubsample) ? writeSampleMoisture(sample) : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.fractiongt7WeightAshed ? sample.waSoilAnalysis.fractiongt7WeightAshed : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.fractionto7WeightAshed ? sample.waSoilAnalysis.fractionto7WeightAshed : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.fractionlt2WeightAshed ? sample.waSoilAnalysis.fractionlt2WeightAshed : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.fractionlt2WeightAshedSubsample
            ? sample.waSoilAnalysis.fractionlt2WeightAshedSubsample
            : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.fractionlt2WeightAshed && sample.waSoilAnalysis.fractionlt2WeightAshedSubsample
            ? multiplier.toFixed(2)
            : '',
          sample.waSoilAnalysis && sample.waSoilAnalysis.formDescription ? sample.waSoilAnalysis.formDescription : '',
          sample.soilDetails ? writeSoilDetails(sample.soilDetails) : '',
          sample.waTotals ? sample.waTotals.concentration.acm : '',
          sample.waTotals ? sample.waTotals.concentration.fa : '',
          sample.waTotals ? sample.waTotals.concentration.af : '',
          sample.waTotals ? sample.waTotals.concentration.faaf : '',
          sample.waTotals ? writeShorthandResult(sample.waTotals.result.total) : '',
          sample.waTotals && sample.waTotals.waOverLimit ? 'TRUE' : 'FALSE',
          sampleSubs.length
        ]
        if (subSampleMap.subsampleCount > 0) {
          ;[...Array(subSampleMap.subsampleCount).keys()].forEach((i) => {
            let sub = sampleSubs[i]
            if (sub === undefined) sub = {}
            midArray = midArray.concat([
              sub.containerID,
              // sub.fraction ? fractionMap[sub.fraction] : '',
              sub.fraction,
              sub.weight,
              sub.tareWeight,
              sub.concentration,
              sub.form ? sub.form.toUpperCase() : '',
              sub.result ? writeShorthandResult(sub.result) : '',
              sub.containerID ? getAsbestosWeight(sub) : ''
            ])
          })
        }
        let lastArray = [
          sample.waAnalysisComplete ? 'TRUE' : 'FALSE',
          sample.analysisTime ? sample.analysisTime : '',
          sample.sessionID ? sample.sessionID : ''
        ]
        dataArray.push(firstArray.concat(midArray.concat(lastArray)))
      })
    }
  } else {
    dataArray.push([
      'Job Number',
      'Sample Number',
      'Generic Location',
      'Specific Location',
      'Description',
      'Material',
      'Material Category',
      'Result',
      'Sample Date',
      'Sampled By',
      'Created Date',
      'Created By',
      'Received Date',
      'Received By',
      'Analysis Start Date',
      'Analysis Started By',
      'Analysis Date',
      'Analysis By',
      'Analysis Recorded By',
      'Verified Date',
      'Verified By',
      'Received Weight',
      'Subsample Weight',
      'Dry Weight',
      'Ashed Weight',
      'Moisture'
    ])
    if (samples) {
      Object.values(samples).forEach((sample) => {
        dataArray.push([
          sample.jobNumber ? sample.jobNumber : '',
          sample.sampleNumber ? sample.sampleNumber : '',
          sample.genericLocation ? sample.genericLocation : '',
          sample.specificLocation ? sample.specificLocation : '',
          sample.description ? sample.description : '',
          sample.material ? sample.material : '',
          sample.category ? sample.category : '',
          sample.result ? writeShorthandResult(sample.result) : '',
          sample.sampleDate ? moment(dateOf(sample.sampleDate)).format('YYYY-MMM-DD') : '',
          sample.sampledBy ? sample.sampledBy.map((p) => p.name).join(', ') : '',
          sample.createdDate ? moment(dateOf(sample.createdDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.createdBy ? sample.createdBy.name : '',
          sample.receivedDate ? moment(dateOf(sample.receivedDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.receivedBy ? sample.receivedBy.name : '',
          sample.analysisStartDate ? moment(dateOf(sample.analysisStartDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.analysisStartedBy ? sample.analysisStartedBy.name : '',
          sample.analysisDate ? moment(dateOf(sample.analysisDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.analyst ? sample.analyst : '',
          sample.analysisRecordedBy ? sample.analysisRecordedBy.name : '',
          sample.verifyDate ? moment(dateOf(sample.verifyDate)).format('YYYY-MMM-DD HH:mm:ss') : '',
          sample.verifiedBy ? sample.verifiedBy.name : '',
          sample.weightReceived ? sample.weightReceived : '',
          sample.weightSubsample ? sample.weightSubsample : '',
          sample.weightDry ? sample.weightDry : '',
          sample.weightAshed ? sample.weightAshed : '',
          sample.weightDry && (sample.weightReceived || sample.weightSubsample) ? writeSampleMoisture(sample) : ''
          // then layer data, dimensions etc.
        ])
      })
    }
  }
  return dataArray
}

export const getSubsampleData = (samples, job) => {
  let dataArray = []
  let subSampleMap = getWASubsampleList(samples)
  dataArray.push([
    'Subsample ID',
    'Sample Number',
    'Tare Weight',
    'Fraction',
    'Concentration',
    'Asbestos Form',
    'Asbestos Types',
    'Gross Weight',
    'Multiplier',
    'Asbestos Weight'
  ])
  // let fractionMap = getWATotalDetails(samples, this.props.acmInSoilLimit)

  if (subSampleMap.subsamples.length > 0) {
    subSampleMap.subsamples.forEach((sub) => {
      dataArray.push([
        sub.containerID,
        sub.sampleNumber,
        sub.tareWeight,
        // sub.fraction ? fractionMap[sub.fraction] : '',
        sub.fraction || '',
        sub.concentration,
        sub.form ? sub.form.toUpperCase() : '',
        sub.result ? writeShorthandResult(sub.result) : '',
        sub.weight,
        sub.multiplier,
        sub.containerID ? getAsbestosWeight(sub) : ''
      ])
    })
  }
  return dataArray
}

export const getAsbestosWeight = (sub) => {
  let weight = sub.weight ? parseFloat(sub.weight) : 0
  if (sub.tareWeight) weight = weight - parseFloat(sub.tareWeight)
  if (weight < 0) weight = 0
  if (sub.concentration) weight = weight * (parseFloat(sub.concentration) / 100)
  if (sub.fraction === 'lt2' && sub.multiplier) weight = weight * sub.multiplier
  if (weight < 0.00001) return '<0.00001'
  else return weight.toFixed(5)
}

export const getWASubsampleList = (samples) => {
  let subsamples = []
  let containerIDs = []
  let duplicateIDs = false
  let subsampleCount = 1
  if (samples)
    Object.values(samples).forEach((sample) => {
      if (sample.waSoilAnalysis && sample.waLayerNum) {
        let subCount = 0
        Object.keys(sample.waLayerNum).forEach((fraction) => {
          ;[...Array(sample.waLayerNum[fraction] ? sample.waLayerNum[fraction] : 2).keys()].forEach((num) => {
            if (sample.waSoilAnalysis[`subfraction${fraction}-${num + 1}`] !== undefined) {
              let sub = sample.waSoilAnalysis[`subfraction${fraction}-${num + 1}`]
              if (sub.containerID) {
                let multiplier = 1
                if (
                  fraction === 'lt2' &&
                  sample.waSoilAnalysis &&
                  sample.waSoilAnalysis.fractionlt2WeightAshed &&
                  sample.waSoilAnalysis.fractionlt2WeightAshedSubsample
                ) {
                  multiplier =
                    parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed) /
                    parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshedSubsample)
                }
                subCount++
                sub.fraction = fraction
                sub.uid = `subfraction${fraction}-${num + 1}`
                sub.sampleNumber = sample.sampleNumber
                sub.original = sub.verified ? sub.verified : null
                sub.now = sub.verified ? sub.verified : null
                sub.multiplier = multiplier
                // if (sub.containerID === '001') console.log(sub);
                subsamples.push(sub)
                if (containerIDs.includes(sub.containerID)) duplicateIDs = sub.containerID
                containerIDs.push(sub.containerID)
              }
            }
          })
        })
        if (subCount > subsampleCount) subsampleCount = subCount
      }
    })
  subsamples.sort((a, b) => a.containerID - b.containerID)
  return { subsamples, duplicateIDs, subsampleCount }
}

export const getSampleStatus = (sample) => {
  console.log(sample)
  let status = 'In Transit'
  if (sample) {
    if (sample.verified) status = 'Complete'
    else if (sample.analysisDate && sample.weightReceived) status = 'Waiting on Verification'
    else if (sample.analysisStarted) status = `Analysis Started`
    else if (sample.receivedByLab) status = `Received by Lab`
    if (sample.deleted) status = status + ' (DELETED)'
    if (sample.onHold) status = status + ' (ON HOLD)'
  }
  return status
}

export const getJobStatus = (samples, job) => {
  let jobID = job.uid
  let versionUpToDate = job.versionUpToDate
  let status = ''
  let totalSamples = 0

  let numberReceived = 0
  let numberAnalysisStarted = 0
  let numberResult = 0
  let numberWeight = 0
  let numberVerified = 0
  let numberWAAnalysisIncomplete = 0
  let analysisStartedBy = 'Lab'
  let timeInLab = -1
  let timeInAdmin = -1
  let readyForIssue = 0

  if (samples && Object.values(samples).length > 0) {
    Object.values(samples).forEach((sample) => {
      if (sample.cocUid === jobID) {
        totalSamples++
        if (sample.receivedByLab) {
          let sampleTimeInLab = new Date() - dateOf(sample.receivedDate)
          if (timeInLab === -1 || sampleTimeInLab < timeInLab) timeInLab = sampleTimeInLab
          numberReceived++
        }
        if (sample.analysisStarted) {
          numberAnalysisStarted++
          if (analysisStartedBy === 'Lab') analysisStartedBy = sample.analysisStartedBy.name
        }
        if (sample.verified) numberVerified++
        if (job.waAnalysis && !sample.waAnalysisComplete) numberWAAnalysisIncomplete++
        // eslint-disable-next-line no-undef
        if (getBasicResult(sample) !== 'none') {
          if (sample.weightReceived) {
            let sampleTimeInAdmin = new Date() - dateOf(sample.analysisDate)
            if (timeInAdmin === -1 || sampleTimeInAdmin < timeInAdmin) timeInAdmin = sampleTimeInAdmin
            readyForIssue++
          }
          numberResult++
        }
        if (sample.weightReceived) numberWeight++
      }
    })
  }

  if (versionUpToDate) {
    if (job.mostRecentIssueSent) status = `Issued and Sent`
    else status = `Issued`
  } else if (totalSamples === 0) {
    status = 'No Samples'
  } else if (numberReceived === 0) {
    status = `In Transit (${totalSamples})`
  } else if (numberAnalysisStarted === 0) {
    status = `Received By Lab (${numberReceived} ${numberReceived == 1 ? 'sample' : 'samples'}${
      timeInLab > 600000 ? `; ${milliToDHM(timeInLab, true, false)} ago` : ''
    })`
  } else if (numberVerified === totalSamples) {
    if (job.waAnalysis && numberWAAnalysisIncomplete > 0)
      status = `All Samples Verified, WA Analysis Incomplete (${totalSamples - numberWAAnalysisIncomplete}/${totalSamples})`
    else {
      if (numberResult === totalSamples) status = 'Ready for Issue'
      else status = `All Samples Verified, Bulk ID Incomplete (${numberResult}/${totalSamples})`
    }
  } else if (numberResult === 0) {
    status = `Analysis Started by ${analysisStartedBy} (${numberAnalysisStarted})`
  } else if (numberResult === totalSamples && numberVerified === 0) {
    if (job.waAnalysis && numberWAAnalysisIncomplete > 0)
      status = `Bulk ID Complete, WA Analysis Incomplete (${totalSamples - numberWAAnalysisIncomplete}/${totalSamples})`
    else if (numberWeight !== totalSamples) status = `Asbestos Result Complete, Weights Required (${numberWeight}/${totalSamples})`
    else
      status = `Analysis Complete (${readyForIssue} ${readyForIssue == 1 ? 'sample' : 'samples'}${
        timeInAdmin > 600000 ? `; ${milliToDHM(timeInAdmin, true, false)} ago` : ''
      })`
  } else if (numberVerified > 0) {
    status = `Analysis Partially Verified (${numberVerified}/${totalSamples})`
  } else if (numberResult > 0) {
    status = `Analysis Partially Complete (${numberResult}/${totalSamples})`
  } else if (numberAnalysisStarted > 0) {
    status = `Analysis Partially Started by ${analysisStartedBy} (${numberAnalysisStarted}/${totalSamples})`
  } else if (numberReceived > 0) {
    status = `Partially Received by Lab (${numberReceived}/${totalSamples})`
  }

  if (totalSamples !== 0 && job.status !== status) cocsRef.doc(jobID).update({ status })
  return status
}

export const getStats = (samples, job) => {
  let jobID = job.uid
  let versionUpToDate = job.versionUpToDate
  // //console.log('Getting stats');
  // //console.log(job);
  let nz = moment.tz.setDefault('Pacific/Auckland')
  moment.tz.setDefault('Pacific/Auckland')
  moment.updateLocale('en', {
    // workingWeekdays: [1,2,3,4,5],
    workinghours: {
      0: null,
      1: ['08:30:00', '17:00:00'],
      2: ['08:30:00', '17:00:00'],
      3: ['08:30:00', '17:00:00'],
      4: ['08:30:00', '17:00:00'],
      5: ['08:30:00', '17:00:00'],
      6: null
    },
    holidays: [
      '2019-11-15',
      '2019-12-25',
      '2019-12-26',
      '2020-01-01',
      '2020-01-02',
      '2020-02-06',
      '2020-04-10',
      '2020-04-13',
      '2020-04-27',
      '2020-06-01',
      '2020-10-26',
      '2020-11-13',
      '2020-12-25',
      '2020-12-26'
    ]
  })

  let totalSamples = 0
  let positiveSamples = 0
  let negativeSamples = 0

  // let numberReceived = 0;
  // let numberAnalysisStarted = 0;
  // let numberResult = 0;
  // let numberVerified = 0;

  let maxTurnaroundTime = 0
  let averageTurnaroundTime = 0
  let totalTurnaroundTime = 0
  let numTurnaroundTime = 0

  let maxAnalysisTime = 0
  let averageAnalysisTime = 0
  let totalAnalysisTime = 0
  let numAnalysisTime = 0

  let maxReportTime = 0
  let averageReportTime = 0
  let totalReportTime = 0
  let numReportTime = 0

  let maxTurnaroundBusinessTime = 0
  let averageTurnaroundBusinessTime = 0
  let totalTurnaroundBusinessTime = 0
  let numTurnaroundBusinessTime = 0

  let maxAnalysisBusinessTime = 0
  let averageAnalysisBusinessTime = 0
  let totalAnalysisBusinessTime = 0
  let numAnalysisBusinessTime = 0

  let maxReportBusinessTime = 0
  let averageReportBusinessTime = 0
  let totalReportBusinessTime = 0
  let numReportBusinessTime = 0

  let confirmedResults = 0
  let confirmedResultsOK = 0
  let confirmedResultsConflict = 0
  let confirmedResultsWrong = 0

  if (samples && Object.values(samples).length > 0) {
    Object.values(samples).forEach((sample) => {
      if (sample.cocUid === jobID) {
        totalSamples = totalSamples + 1
        // if (sample.receivedByLab) numberReceived = numberReceived + 1;
        // if (sample.analysisStarted) numberAnalysisStarted = numberAnalysisStarted + 1;
        if (sample.result && sample.analysisDate && sample.receivedDate) {
          // numberResult = numberResult + 1;
          if (sample.result['no']) {
            negativeSamples = negativeSamples + 1
          } else positiveSamples = positiveSamples + 1
          if (sample.analysisTime) {
            if (sample.analysisTime > maxAnalysisTime) maxAnalysisTime = sample.analysisTime
            totalAnalysisTime = totalAnalysisTime + sample.analysisTime
            numAnalysisTime = numAnalysisTime + 1
            averageAnalysisTime = totalAnalysisTime / numAnalysisTime
          }
          let analysisBusinessTime = moment(dateOf(sample.analysisDate)).workingDiff(moment(dateOf(sample.receivedDate)))
          if (analysisBusinessTime > maxAnalysisBusinessTime) maxAnalysisBusinessTime = analysisBusinessTime
          totalAnalysisBusinessTime = totalAnalysisBusinessTime + analysisBusinessTime
          numAnalysisBusinessTime = numAnalysisBusinessTime + 1
          averageAnalysisBusinessTime = totalAnalysisBusinessTime / numAnalysisBusinessTime
        }
        if (sample.verified && sample.receivedDate && sample.verifyDate && sample.analysisDate) {
          // numberVerified = numberVerified + 1;
          if (sample.turnaroundTime) {
            if (sample.turnaroundTime > maxTurnaroundTime) maxTurnaroundTime = sample.turnaroundTime
            totalTurnaroundTime = totalTurnaroundTime + sample.turnaroundTime
            numTurnaroundTime = numTurnaroundTime + 1
            averageTurnaroundTime = totalTurnaroundTime / numTurnaroundTime
            // Check for time between analysis logging and verification
            let turnaroundBusinessTime = moment(dateOf(sample.verifyDate)).workingDiff(moment(dateOf(sample.receivedDate)))
            if (turnaroundBusinessTime > maxTurnaroundBusinessTime) maxTurnaroundBusinessTime = turnaroundBusinessTime
            totalTurnaroundBusinessTime = totalTurnaroundBusinessTime + turnaroundBusinessTime
            numTurnaroundBusinessTime = numTurnaroundBusinessTime + 1
            averageTurnaroundBusinessTime = totalTurnaroundBusinessTime / numTurnaroundBusinessTime

            if (sample.analysisTime) {
              let verifyTime = sample.turnaroundTime - sample.analysisTime
              if (verifyTime > maxReportTime) maxReportTime = verifyTime
              totalReportTime = totalReportTime + verifyTime
              numReportTime = numReportTime + 1
              averageReportTime = totalReportTime / numReportTime
            }

            let reportBusinessTime = moment(dateOf(sample.verifyDate)).workingDiff(moment(dateOf(sample.analysisDate)))
            totalReportBusinessTime = totalReportBusinessTime + reportBusinessTime
            numReportBusinessTime = numReportBusinessTime + 1
            averageReportBusinessTime = totalReportBusinessTime / numReportBusinessTime
          }
        }
        let confirm = getAllConfirmResult(sample)
        if (confirm !== 'none') {
          confirmedResults += 1
          if (confirm === 'no') confirmedResultsWrong += 1
          if (confirm === 'asbestosTypesWrong') confirmedResultsConflict += 1
          if (confirm === 'yes' || confirm === 'nonAsbestosTypesWrong') confirmedResultsOK += 1
        }
      }
    })
  }

  let stats = {
    totalSamples,
    positiveSamples,
    negativeSamples,
    // numberReceived,
    // numberAnalysisStarted,
    // numberResult,
    // numberVerified,
    maxTurnaroundTime,
    averageTurnaroundTime,
    maxAnalysisTime,
    averageAnalysisTime,
    maxReportTime,
    averageReportTime,
    maxTurnaroundBusinessTime,
    averageTurnaroundBusinessTime,
    maxAnalysisBusinessTime,
    averageAnalysisBusinessTime,
    maxReportBusinessTime,
    averageReportBusinessTime,
    confirmedResults,
    confirmedResultsOK,
    confirmedResultsConflict,
    confirmedResultsWrong
  }

  if (totalSamples !== 0 && job.stats !== stats) cocsRef.doc(jobID).update({ stats })
  return stats
}

export const getSoilSensitivity = (details) => {
  // see page 16 of NZ Geotechnical Society guide
  let dictionary = {
    'very soft': 6,
    soft: 19,
    firm: 38,
    stiff: 75,
    'very stiff': 150,
    hard: 350
  }
  let ratio = dictionary[details.strength] / dictionary[details.sensitivityStrength]
  let sensitivity = 'Insensitive, normal'
  if (ratio >= 2 && ratio < 4) sensitivity = 'Moderately sensitive'
  else if (ratio >= 4 && ratio < 8) sensitivity = 'Sensitive'
  else if (ratio >= 8 && ratio < 16) sensitivity = 'Extra sensitive'
  else if (ratio >= 16) sensitivity = 'Quick'
  return sensitivity
}

export const writeSampleConditioningList = (conditioning) => {
  let conMap = {
    furnace: 'Furnace',
    flame: 'Flame',
    lowHeat: 'Low Heat/Drying',
    dcm: 'Dichloromethane',
    mortarAndPestle: 'Mortar and Pestle',
    sieved: 'Sieved'
  }
  let cons = []

  Object.keys(conMap).forEach((key) => {
    if (conditioning[key]) cons.push(conMap[key])
  })

  if (cons.length > 0) return cons.join(', ')
  else return 'No conditioning'
}

export const writeSampleMoisture = (sample, total) => {
  let preWeight = null
  let postWeight = null

  if (sample.weightSubsample) {
    if (sample.weightSubsample.includes('<')) preWeight = '0'
    else preWeight = sample.weightSubsample
  } else if (sample.weightReceived) {
    if (sample.weightReceived.includes('<')) preWeight = '0'
    else preWeight = sample.weightReceived
  }
  if (sample.weightDry) {
    //console.log(sample.weightDry.includes('<'));
    if (sample.weightDry.includes('<')) postWeight = '0'
    else postWeight = sample.weightDry
  }

  preWeight = parseFloat(preWeight)
  postWeight = parseFloat(postWeight)

  if (!preWeight || !postWeight || preWeight == 0 || preWeight < postWeight) return null
  else return Math.round(((preWeight - postWeight) / preWeight) * 100)
}
