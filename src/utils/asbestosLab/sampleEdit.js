//
// SAMPLE EDIT
//

import moment from 'moment'
import { EDIT_MODAL_SAMPLE } from '../../constants/action-types'
import { dateOf } from '../../actions/helpers'
import { asbestosSampleIssueLogRef, asbestosSamplesRef } from '../../config/firebase'

export const handleSampleChange = (number, changes) => (dispatch) => {
  console.log(changes)
  dispatch({
    type: EDIT_MODAL_SAMPLE,
    payload: {
      number: number + 1,
      changes: changes
    }
  })
}

export const logSample = (coc, sample, cocStats, version) => {
  // let dateString = moment(new Date()).format('YYYY-MM-DD');
  let transitTime =
    sample.createdDate && sample.receivedDate
      ? moment.duration(moment(dateOf(sample.receivedDate)).diff(dateOf(sample.createdDate))).asMilliseconds()
      : null
  let labTime =
    sample.receivedDate && sample.analysisDate
      ? moment.duration(moment(dateOf(sample.analysisDate)).diff(dateOf(sample.receivedDate))).asMilliseconds()
      : null
  let analysisTime =
    sample.receivedDate && sample.analysisStartDate
      ? moment.duration(moment(dateOf(sample.analysisDate)).diff(dateOf(sample.analysisStartDate))).asMilliseconds()
      : null
  let turnaroundTime = sample.receivedDate ? moment.duration(moment().diff(dateOf(sample.receivedDate))).asMilliseconds() : null

  let log = {
    client: coc.client ? coc.client : null,
    address: coc.address ? coc.address : null,
    jobNumber: coc.jobNumber ? coc.jobNumber : null,
    cocUid: coc.uid ? coc.uid : null,
    cocType: coc.type ? coc.type : null,
    priority: coc.priority ? coc.priority : 0,
    version: version,

    totalSamples: cocStats.totalSamples ? cocStats.totalSamples : 0,
    maxTurnaroundTime: cocStats.maxTurnaroundTime ? cocStats.maxTurnaroundTime : 0,
    averageTurnaroundTime: cocStats.averageTurnaroundTime ? cocStats.averageTurnaroundTime : 0,

    sampleNumber: sample.sampleNumber ? sample.sampleNumber : null,
    sampleUid: sample.uid ? sample.uid : null,

    genericLocation: sample.genericLocation ? sample.genericLocation : null,
    specificLocation: sample.specificLocation ? sample.specificLocation : null,
    description: sample.description ? sample.description : null,
    material: sample.material ? sample.material : null,
    category: sample.category ? sample.category : 'Other',

    weightReceived: sample.weightReceived ? sample.weightReceived : null,
    weightSubsample: sample.weightSubsample ? sample.weightSubsample : null,
    weightDry: sample.weightDry ? sample.weightDry : null,
    weightAshed: sample.weightAshed ? sample.weightAshed : null,

    sampledBy: sample.sampledBy ? sample.sampledBy : null,
    sampleDate: sample.sampleDate ? sample.sampleDate : null,
    receivedBy: sample.receivedBy ? sample.receivedBy : null,
    receivedDate: sample.receivedDate ? sample.receivedDate : null,
    analysisStartedBy: sample.analysisStartedBy ? sample.analysisStartedBy : null,
    analysisStartDate: sample.analysisStartDate ? sample.analysisStartDate : null,
    analysisBy: sample.analyst ? sample.analyst : null,
    analysisRecordedBy: sample.analysisRecordedBy ? sample.analysisRecordedBy : null,
    analysisDate: sample.analysisDate ? sample.analysisDate : null,
    sessionID: sample.sessionID ? sample.sessionID : null,
    result: sample.result ? sample.result : {},
    verifiedBy: sample.verifiedBy ? sample.verifiedBy : null,
    verifyDate: sample.verifyDate ? sample.verifyDate : null,
    issuedBy: sample.issuedBy ? sample.issuedBy : null,
    issueDate: new Date(),

    turnaroundTime: turnaroundTime,
    analysisTime: analysisTime,
    transitTime: transitTime,
    labTime: labTime,
    analysisType: sample.analysisType ? sample.analysisType : 'normal'
  }

  if (sample.waTotals) {
    log = {
      ...log,
      waTotals: sample.waTotals
    }
  }

  let uid = `${log.sampleUid}-${moment(dateOf(log.issueDate)).format('x')}`
  asbestosSampleIssueLogRef.doc(uid).set(log)
}

export const setCheckAnalysis = (analysis, sample, overrideBy) => {
  overrideResult(sample, overrideBy)
  console.log(analysis)
  console.log(sample)
}

export const overrideResult = (sample, overrideBy) => {
  let update = {}
  if (sample.previousResults) update = sample.previousResults
  update = {
    ...update,
    [moment().format('x')]: {
      analyst: sample.analyst ? sample.analyst : null,
      analysisRecordedBy: sample.analysisRecordedBy ? sample.analysisRecordedBy : null,
      analysisDate: sample.analysisDate ? sample.analysisDate : null,
      analysisTime: sample.analysisTime ? sample.analysisTime : null,
      result: sample.result ? sample.result : null,
      overrideDate: new Date(),
      overrideBy: overrideBy
    }
  }
  asbestosSamplesRef.doc(sample.uid).update({ previousResults: update })
}
