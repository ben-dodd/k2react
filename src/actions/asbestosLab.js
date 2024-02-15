import {
  EDIT_MODAL_DOC,
  EDIT_MODAL_SAMPLE,
  DELETE_COC,
  GET_ASBESTOS_SAMPLE_ISSUE_LOGS,
  GET_ASBESTOS_ANALYSIS_LOGS,
  GET_ASBESTOS_CHECK_LOGS,
  GET_ASBESTOS_MICROSCOPE_CALIBRATIONS,
  GET_COCS,
  GET_SAMPLES,
  RESET_ASBESTOS_LAB,
  SET_ANALYSIS_MODE,
  SET_ANALYST,
  SET_ANALYSIS_SESSION_ID,
  SET_VIEW_SAMPLE_DETAIL
} from '../constants/action-types'
import { DOWNLOAD_LAB_CERTIFICATE } from '../constants/modal-types'
import { styles } from '../config/styles'
import { addLog } from './local'
import { sendSlackMessage, writeDates, andList, dateOf, milliToDHM, writeMeasurement } from './helpers'
import { getDefaultLetterAddress } from './jobs'
import moment from 'moment'
import {
  asbestosSamplesRef,
  asbestosAnalysisLogRef,
  asbestosSampleIssueLogRef,
  asbestosCheckLogRef,
  asbestosMicroscopeCalibrationsRef,
  cocsRef,
  stateRef,
  firebase,
  firestore,
  auth
} from '../config/firebase'
import React from 'react'
const defaultLimit = 19

export const resetAsbestosLab = () => (dispatch) => {
  dispatch({ type: RESET_ASBESTOS_LAB })
}

//
// GET DATA
//

export const fetchCocs = (update) => async (dispatch) => {
  //console.log('Fetching COCs');
  // Make all calls update for now
  update = true
  if (update) {
    cocsRef
      .where('deleted', '==', false)
      .where('versionUpToDate', '==', false)
      // .orderBy("lastModified")
      .onSnapshot((querySnapshot) => {
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocs (${querySnapshot.size} documents)`)
        var cocs = {}
        querySnapshot.forEach((doc) => {
          cocs[doc.id] = doc.data()
        })
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        })
      })
    cocsRef
      .where('deleted', '==', false)
      .where('versionUpToDate', '==', true)
      .where('lastModified', '>', moment().subtract(1, 'days').toDate())
      // .orderBy("lastModified")
      // .orderBy("dueDate", "desc")
      .onSnapshot((querySnapshot) => {
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocs (${querySnapshot.size} documents)`)
        var cocs = {}
        querySnapshot.forEach((doc) => {
          cocs[doc.id] = doc.data()
        })
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        })
      })
  } else {
    stateRef.doc('cocs').onSnapshot((doc) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocs from state (1 document)`)
      if (doc.exists) {
        dispatch({ type: GET_COCS, payload: doc.data() })
      } else {
        //console.log("Coc doesn't exist");
      }
    })
  }
}

export const fetchCocsByJobNumber = (jobNumber) => async (dispatch) => {
  cocsRef
    .where('deleted', '==', false)
    .where('jobNumber', '==', jobNumber.toUpperCase())
    .orderBy('lastModified')
    .get()
    .then((querySnapshot) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocsByJobNumber (${querySnapshot.size} documents)`)
      var cocs = {}
      querySnapshot.forEach((doc) => {
        cocs[doc.id] = doc.data()
      })
      dispatch({
        type: GET_COCS,
        payload: cocs,
        update: true
      })
    })
}

export const fetchCocsBySearch = (client, startDate, endDate) => async (dispatch) => {
  //console.log(client);
  //console.log(startDate);
  //console.log(endDate);
  if (startDate === '') startDate = moment().subtract(6, 'months').toDate()
  else startDate = new Date(startDate)
  if (endDate === '') endDate = new Date()
  else endDate = new Date(endDate)
  //console.log(startDate);
  //console.log(endDate);
  if (client !== '') {
    cocsRef
      .where('deleted', '==', false)
      .where('client', '==', client)
      .where('lastModified', '>=', startDate)
      .where('lastModified', '<=', endDate)
      .orderBy('lastModified')
      .get()
      .then((querySnapshot) => {
        var cocs = {}
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocsBySearch with Client (${querySnapshot.size} documents)`)
        querySnapshot.forEach((doc) => {
          cocs[doc.id] = doc.data()
        })
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        })
      })
  } else {
    //console.log('blank client');
    cocsRef
      .where('deleted', '==', false)
      .where('lastModified', '>=', startDate)
      .where('lastModified', '<=', endDate)
      .orderBy('lastModified')
      .get()
      .then((querySnapshot) => {
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchCocsBySearch (${querySnapshot.size} documents)`)
        var cocs = {}
        querySnapshot.forEach((doc) => {
          cocs[doc.id] = doc.data()
        })
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        })
      })
  }
}

export const fetchSamples = (cocUid, jobNumber, modal) => async (dispatch) => {
  //console.log('fetching samples');
  asbestosSamplesRef
    .where('jobNumber', '==', jobNumber)
    .where('deleted', '==', false)
    .onSnapshot((sampleSnapshot) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran fetchSamples (${sampleSnapshot.size} documents)`)
      let samples = {}
      sampleSnapshot.forEach((sampleDoc) => {
        let sample = sampleDoc.data()
        sample.uid = sampleDoc.id
        samples[sample.sampleNumber] = sample
        // console.log(sample);
        // if (sample.sampleType === "air") {
        //   asbestosAnalysisLogRef
        //     .where("sampleUid", "==", sample.uid)
        //     .get()
        //     .then(d => {
        //       if (d.exists) {
        //         let fibreCounts = {};
        //         d.data().forEach(f => {
        //           fibreCounts[f.id] = f;
        //         });
        //         samples[sample.sampleNumber].fibreCounts = fibreCounts;
        //       }
        //       dispatch({
        //         type: GET_SAMPLES,
        //         cocUid: cocUid,
        //         payload: samples
        //       });
        //       if (modal) {
        //         dispatch({
        //           type: EDIT_MODAL_DOC,
        //           payload: {samples: samples},
        //         });
        //       }
        //     })
        // } else {
        // console.log(samples);
        dispatch({
          type: GET_SAMPLES,
          cocUid: cocUid,
          payload: samples
        })
        if (modal) {
          dispatch({
            type: EDIT_MODAL_DOC,
            payload: { samples: samples }
          })
        }
        // }
      })
    })
}

export const resetSampleView = () => async (dispatch) => {
  dispatch({
    type: SET_VIEW_SAMPLE_DETAIL,
    payload: null
  })
}

export const fetchSampleView = (cocUid, sampleUid) => async (dispatch) => {
  asbestosSamplesRef
    .doc(sampleUid)
    .get()
    .then((sample) => {
      if (sample.exists) {
        cocsRef
          .doc(cocUid)
          .get()
          .then((coc) => {
            if (coc.exists) {
              dispatch({
                type: SET_VIEW_SAMPLE_DETAIL,
                payload: {
                  coc: coc.data(),
                  sample: sample.data()
                }
              })
            }
          })
      }
    })
}

export const fetchAsbestosSampleIssueLogs = (limit) => async (dispatch) => {
  let lim = limit ? limit : defaultLimit
  if (true) {
    asbestosSampleIssueLogRef
      .orderBy('issueDate', 'desc')
      .limit(lim)
      .get()
      .then((logSnapshot) => {
        let logs = {}
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchAsbestosSampleIssueLogs (${logSnapshot.size} documents)`)
        logSnapshot.forEach((logDoc) => {
          let log = logDoc.data()
          log.uid = logDoc.id
          logs[log.uid] = log
        })
        dispatch({
          type: GET_ASBESTOS_SAMPLE_ISSUE_LOGS,
          payload: logs,
          update: true
        })
      })
  } else {
    stateRef.doc('asbestosSampleIssueLogs').onSnapshot((doc) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran fetchAsbestosSampleIssueLogs (1 document)`)
      if (doc.exists) {
        dispatch({ type: GET_ASBESTOS_SAMPLE_ISSUE_LOGS, payload: doc.data() })
      } else {
        //console.log("Sample log doesn't exist");
      }
    })
  }
}

export const fetchAsbestosAnalysisLogs = (limit) => async (dispatch) => {
  let lim = limit ? limit : defaultLimit
  if (true) {
    // let startDate = moment().subtract(limit, 'days').toDate();
    asbestosAnalysisLogRef
      // .where("analysisDate", ">", startDate)
      .orderBy('analysisDate', 'desc')
      .limit(lim)
      .get()
      .then((logSnapshot) => {
        let logs = {}
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchAsbestosAnalysisLogs (${logSnapshot.size} documents)`)
        logSnapshot.forEach((logDoc) => {
          let log = logDoc.data()
          log.uid = logDoc.id
          logs[log.uid] = log
        })
        dispatch({
          type: GET_ASBESTOS_ANALYSIS_LOGS,
          payload: logs,
          update: true
        })
      })
  } else {
    stateRef.doc('asbestosAnalysisLogs').onSnapshot((doc) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran fetchAsbestosAnalysisLogs (1 document)`)
      if (doc.exists) {
        dispatch({ type: GET_ASBESTOS_ANALYSIS_LOGS, payload: doc.data() })
      } else {
        //console.log("Sample log doesn't exist");
      }
    })
  }
}

export const fetchAsbestosCheckLogs = (limit) => async (dispatch) => {
  let lim = limit ? limit : defaultLimit
  if (true) {
    // let startDate = moment().subtract(limit, 'days').toDate();
    asbestosCheckLogRef
      // .where("checkDate", ">", startDate)
      .orderBy('checkDate', 'desc')
      .limit(lim)
      .get()
      .then((logSnapshot) => {
        let logs = {}
        sendSlackMessage(`${auth.currentUser.displayName} ran fetchAsbestosCheckLogs (${logSnapshot.size} documents)`)
        logSnapshot.forEach((logDoc) => {
          let log = logDoc.data()
          log.uid = logDoc.id
          logs[log.uid] = log
        })
        dispatch({
          type: GET_ASBESTOS_CHECK_LOGS,
          payload: logs,
          update: true
        })
      })
  } else {
    stateRef.doc('asbestosCheckLogs').onSnapshot((doc) => {
      sendSlackMessage(`${auth.currentUser.displayName} ran asbestosCheckLogs (1 document)`)
      if (doc.exists) {
        dispatch({ type: GET_ASBESTOS_CHECK_LOGS, payload: doc.data() })
      } else {
        //console.log("Sample log doesn't exist");
      }
    })
  }
}

export const fetchMicroscopeCalibrations = () => async (dispatch) => {
  asbestosMicroscopeCalibrationsRef.get().then((querySnapshot) => {
    dispatch({
      type: GET_ASBESTOS_MICROSCOPE_CALIBRATIONS,
      payload: querySnapshot.map((doc) => doc.data())
    })
  })
}

//
// SETTINGS
//

export const setAnalyst = (analyst) => (dispatch) => {
  dispatch({
    type: SET_ANALYST,
    payload: analyst
  })
}

export const setAnalysisMode = (mode) => (dispatch) => {
  dispatch({
    type: SET_ANALYSIS_MODE,
    payload: mode
  })
}

export const setSessionID = (session) => (dispatch) => {
  dispatch({
    type: SET_ANALYSIS_SESSION_ID,
    payload: session
  })
}
