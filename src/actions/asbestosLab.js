import {
  EDIT_MODAL_DOC,
  EDIT_MODAL_SAMPLE,
  GET_ASBESTOS_ANALYSIS,
  GET_AIR_ANALYSTS,
  GET_BULK_ANALYSTS,
  GET_COCS,
  GET_SAMPLES,
  GET_SAMPLE_LOG,
  RESET_ASBESTOS_LAB,
  RESET_MODAL,
  SET_ANALYSIS_MODE,
  SET_ANALYST,
  SET_ANALYSIS_SESSION_ID,
} from "../constants/action-types";
import moment from "moment";
import momentbusinessdays from "moment-business-days";
import momenttimezone from "moment-timezone";
import momentbusinesstime from "moment-business-time";
import { addLog } from "./local";
import {
  asbestosSamplesRef,
  asbestosAnalysisRef,
  asbestosSampleLogRef,
  cocsRef,
  stateRef,
  firebase,
  auth,
} from "../config/firebase";
import { xmlToJson } from "../config/XmlToJson";

export const resetAsbestosLab = () => dispatch => {
  dispatch({ type: RESET_ASBESTOS_LAB });
};

//
// GET DATA
//

export const fetchCocs = update => async dispatch => {
  // Make all calls update for now
  update = true;
  if (update) {
    cocsRef
      .where("deleted", "==", false)
      .where("versionUpToDate", "==", false)
      // .orderBy("lastModified")
      .onSnapshot(querySnapshot => {
        var cocs = {};
        querySnapshot.forEach(doc => {
          cocs[doc.id] = doc.data();
        });
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        });
      });
    cocsRef
      .where("deleted", "==", false)
      .where("versionUpToDate", "==", true)
      .where("lastModified", ">", moment().subtract(1, 'days').toDate())
      // .orderBy("lastModified")
      // .orderBy("dueDate", "desc")
      .onSnapshot(querySnapshot => {
        var cocs = {};
        querySnapshot.forEach(doc => {
          cocs[doc.id] = doc.data();
        });
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        });
      });
  } else {
    stateRef.doc("cocs").onSnapshot(doc => {
      if (doc.exists) {
        dispatch({ type: GET_COCS, payload: doc.data() });
      } else {
        console.log("Coc doesn't exist");
      }
    });
  }
};

export const fetchCocsByJobNumber = (jobNumber) => async dispatch => {
  cocsRef
    .where("deleted", "==", false)
    .where("jobNumber", "==", jobNumber.toUpperCase())
    .orderBy("lastModified")
    .onSnapshot(querySnapshot => {
      var cocs = {};
      querySnapshot.forEach(doc => {
        cocs[doc.id] = doc.data();
      });
      dispatch({
        type: GET_COCS,
        payload: cocs,
        update: true
      });
    });
};

export const fetchCocsBySearch = (client, startDate, endDate) => async dispatch => {
  console.log(client);
  console.log(startDate);
  console.log(endDate);
  if (startDate === "") startDate = moment().subtract(6, 'months').toDate(); else startDate = new Date(startDate);
  if (endDate === "") endDate = new Date(); else endDate = new Date(endDate);
  console.log(startDate);
  console.log(endDate);
  if (client !== "") {
    cocsRef
      .where("deleted", "==", false)
      .where("client", "==", client)
      .where("lastModified", ">=", startDate)
      .where("lastModified", "<=", endDate)
      .orderBy("lastModified")
      .onSnapshot(querySnapshot => {
        var cocs = {};
        querySnapshot.forEach(doc => {
          cocs[doc.id] = doc.data();
        });
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        });
      });
  } else {
    console.log('blank client');
    cocsRef
      .where("deleted", "==", false)
      .where("lastModified", ">=", startDate)
      .where("lastModified", "<=", endDate)
      .orderBy("lastModified")
      .onSnapshot(querySnapshot => {
        var cocs = {};
        querySnapshot.forEach(doc => {
          cocs[doc.id] = doc.data();
        });
        dispatch({
          type: GET_COCS,
          payload: cocs,
          update: true
        });
      });
  }
};

export const deleteCoc = (coc, cocs) => async dispatch => {
  let newCocs = {...cocs};
  delete newCocs[coc];
  dispatch({
    type: GET_COCS,
    payload: newCocs,
    update: true
  });
}

export const fetchAsbestosAnalysis = update => async dispatch => {
  if (update) {
    asbestosAnalysisRef
      .onSnapshot(querySnapshot => {
        var analysis = [];
        querySnapshot.forEach(doc => {
          analysis.push(doc.data());
        });
        dispatch({
          type: GET_ASBESTOS_ANALYSIS,
          payload: { analysis },
          update: true,
        });
      });
  } else {
    stateRef.doc("asbestosanalysis").onSnapshot(doc => {
      if (doc.exists) {
        dispatch({ type: GET_ASBESTOS_ANALYSIS, payload: doc.data() });
      } else {
        console.log("Asbestos Analysis doesn't exist");
      }
    });
  }
}

export const fetchSamples = (cocUid, jobNumber, modal) => async dispatch => {
  asbestosSamplesRef
    .where("jobNumber", "==", jobNumber)
    .where("deleted","==",false)
    .onSnapshot(sampleSnapshot => {
      let samples = {};
      sampleSnapshot.forEach(sampleDoc => {
        let sample = sampleDoc.data();
        sample.uid = sampleDoc.id;
        samples[sample.sampleNumber] = sample;
        // console.log('fetch samples method');
        dispatch({
          type: GET_SAMPLES,
          cocUid: cocUid,
          payload: samples
        });
        if (modal) {
          dispatch({
            type: EDIT_MODAL_DOC,
            payload: {samples: samples},
          });
        }
      });
    });
};

export const fetchSampleLog = (update) => async dispatch => {
  if (update) {
    let startDate = moment().subtract(20, 'days').toDate();
    asbestosSampleLogRef
      .where("reportDate", ">", startDate)
      .orderBy("reportDate")
      .onSnapshot(logSnapshot => {
        let logs = {};
        logSnapshot.forEach(logDoc => {
          let log = logDoc.data();
          log.uid = logDoc.id;
          logs[log.uid] = log;
        });
        dispatch({
          type: GET_SAMPLE_LOG,
          payload: logs,
          update: true,
        });
      });
  } else {
    stateRef.doc("asbestosSampleLog").onSnapshot(doc => {
      if (doc.exists) {
        dispatch({ type: GET_SAMPLE_LOG, payload: doc.data() });
      } else {
        console.log("Sample log doesn't exist");
      }
    });

  }
};


//
// SETTINGS
//

export const setAnalyst = analyst => dispatch => {
  dispatch({
    type: SET_ANALYST,
    payload: analyst
  });
};

export const setAnalysisMode = mode => dispatch => {
  dispatch({
    type: SET_ANALYSIS_MODE,
    payload: mode
  });
};

export const setSessionID = session => dispatch => {
  dispatch({
    type: SET_ANALYSIS_SESSION_ID,
    payload: session,
  });
}

//
// COC EDIT
//

export const handleCocSubmit = ({ doc, me }) => dispatch => {
  // console.log(doc.samples);
  let sampleList = [];
  if (doc.samples) {
    // console.log(doc.samples);
    Object.keys(doc.samples).forEach(sample => {
      // console.log(sample);
      if (!doc.samples[sample].uid) {
        let datestring = new Intl.DateTimeFormat("en-GB", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
          .format(new Date())
          .replace(/[.:/,\s]/g, "_");
        let uid = `${
          doc.jobNumber
        }-SAMPLE-${sample}-CREATED-${datestring}-${Math.round(
          Math.random() * 1000
        )}`;
        // console.log(`UID for new sample is ${uid}`);
        let log = {
          type: 'Create',
          log: `Sample ${sample} (${doc.samples[sample].description} ${doc.samples[sample].material}) created.`,
          chainOfCustody: doc.uid,
          sample: uid,
        };
        addLog("asbestosLab", log, me);
        doc.samples[sample].uid = uid;
        doc.samples[sample].deleted = false;
        doc.samples[sample].createdDate = new Date();
        doc.samples[sample].createdBy = {id: me.uid, name: me.name};
        sampleList.push(uid);
      } else {
        // console.log(`UID for old sample is ${doc.samples[sample].uid}`);
        sampleList.push(doc.samples[sample].uid);
      }
      if (doc.samples[sample].description || doc.samples[sample].material) {
        // console.log(`Submitting sample ${sample} to ${docid}`);
        let sample2 = doc.samples[sample];
        if (sample2.description)
          sample2.description =
            sample2.description.charAt(0).toUpperCase() +
            sample2.description.slice(1);
        if (doc.type === "air") {
          sample2.isAirSample = true;
          sample2.material = "Air Sample";
        }
        sample2.jobNumber = doc.jobNumber;
        if (sample2.cocUid === undefined) sample2.cocUid = doc.uid;
        sample2.sampleNumber = parseInt(sample, 10);
        if ("disabled" in sample2) delete sample2.disabled;
        // console.log("Sample 2");
        // console.log(sample2);
        asbestosSamplesRef.doc(doc.samples[sample].uid).set(sample2);
      }
    });
  }
  let doc2 = doc;
  if ("samples" in doc2) delete doc2.samples;
  doc2.uid = doc.uid;
  doc2.sampleList = sampleList;
  cocsRef.doc(doc.uid).set(doc2);
  dispatch({ type: RESET_MODAL });
};

export const togglePriority = (job, me) => {
  let log = {
    type: "Admin",
    log: job.priority === 1 ? `Chain of Custody changed to normal priority.` : `Chain of Custody marked as high priority.`,
    chainOfCustody: job.uid,
  };
  addLog("asbestosLab", log, me);
  cocsRef.doc(job.uid).update({ priority: job.priority === 0 ? 1 : 0 });
};

export const toggleWAAnalysis = (job, me) => {
  let log = {
    type: "Admin",
    log: job.waAnalysis ? `WA analysis request removed.` : `Chain of Custody flagged for WA analysis.`,
    chainOfCustody: job.uid,
  };
  addLog("asbestosLab", log, me);
  cocsRef.doc(job.uid).update({ waAnalysis: job.waAnalysis ? false : true });
};


//
// SAMPLE EDIT
//


export const handleSampleChange = (number, type, value) => dispatch => {
  dispatch({
    type: EDIT_MODAL_SAMPLE,
    payload: {
      number: number + 1,
      type: type,
      value: value
    }
  });
};

export const logSample = (coc, sample, cocStats) => dispatch => {
  // let dateString = moment(new Date()).format('YYYY-MM-DD');
  let transitTime = sample.createdDate && sample.receivedDate ? moment.duration(moment(sample.receivedDate.toDate()).diff(sample.createdDate.toDate())).asMilliseconds() : null;
  let labTime = sample.receivedDate && sample.analysisDate ? moment.duration(moment(sample.analysisDate.toDate()).diff(sample.receivedDate.toDate())).asMilliseconds() : null;
  let analysisTime = sample.receivedDate && sample.analysisStartDate ? moment.duration(moment(sample.analysisDate.toDate()).diff(sample.analysisStartDate.toDate())).asMilliseconds() : null;
  let turnaroundTime = sample.receivedDate ? moment.duration(moment().diff(sample.receivedDate.toDate())).asMilliseconds() : null;

  let log = {
    client: coc.client ? coc.client : '',
    address: coc.address ? coc.address: '',
    sampleDates: coc.dates ? coc.dates: [],
    jobNumber: coc.jobNumber ? coc.jobNumber : '',
    samplePersonnel: coc.personnel ? coc.personnel: [],
    priority: coc.priority ? coc.priority: 0,
    cocUid: coc.uid ? coc.uid : '',
    cocType: coc.type ? coc.type : '',
    totalSamples: cocStats.totalSamples ? cocStats.totalSamples : 0,
    maxTurnaroundTime: cocStats.maxTurnaroundTime ? cocStats.maxTurnaroundTime : 0,
    averageTurnaroundTime: cocStats.averageTurnaroundTime ? cocStats.averageTurnaroundTime : 0,
    genericLocation: sample.genericLocation ? sample.genericLocation : '',
    specificLocation: sample.specificLocation ? sample.specificLocation : '',
    sampleUid: sample.uid ? sample.uid : '',
    sampleNumber: sample.sampleNumber ? sample.sampleNumber : '',
    description: sample.description ? sample.description : '',
    material: sample.material ? sample.material : '',
    result: sample.result ? sample.result : {},
    receivedBy: sample.receivedUser ? sample.receivedUser : '',
    receivedDate: sample.receivedDate ? sample.receivedDate : null,
    analysisBy: sample.analyst ? sample.analyst : '',
    analysisDate: sample.analysisDate ? sample.analysisDate : null,
    resultBy: sample.analysisUser ? sample.analysisUser : '',
    reportedBy: sample.reportUser ? sample.reportUser : '',
    reportDate: new Date(),
    turnaroundTime: turnaroundTime,
    analysisTime: analysisTime,
    transitTime: transitTime,
    labTime: labTime,
    analysisTime: analysisTime,
    analysisType: sample.analysisType ? sample.analysisType : 'normal',
  };
  asbestosSampleLogRef.doc().set(log);
}


//
// SAMPLE PROGRESS CHANGES
//

export const receiveAll = (samples, job, sessionID, me) => {
  if (samples && samples[job.uid] && Object.values(samples[job.uid]).length > 0) {
    Object.values(samples[job.uid]).forEach(sample => {
      if (sample.cocUid === job.uid) {
        if (!sample.receivedByLab) receiveSample(sample, job, sessionID, me);
      }
    });
  }
};

export const receiveSample = (sample, job, sessionID, me) => {
  let receivedDate = null;
  if (!sample.receivedByLab) receivedDate = new Date();
  if (sample.receivedByLab && sample.analysisStart) startAnalysis(sample, job, sessionID, me);
  if (sample.receivedByLab && sample.verified) {
    if (window.confirm('The sample result has already been verified. Removing from the lab will remove the analysis result and verification. Continue?')) {
      removeResult(sample, sessionID, me);
      verifySample(sample, job, me);
    } else return;
  } else if (sample.receivedByLab && sample.result) {
    if (window.confirm('The sample result has already been logged. Removing from the lab will remove the analysis result. Continue?'))
      removeResult(sample, sessionID, me);
  }
  let log = {
    type: "Received",
    log: receivedDate
      ? `Sample ${sample.sampleNumber} (${sample.description} ${
          sample.material
        }) received by lab.`
      : `Sample ${sample.sampleNumber} (${sample.description} ${
          sample.material
        }) unchecked as being received.`,
    sample: sample.uid,
    chainOfCustody: job.uid,
  };
  addLog("asbestosLab", log, me);
  // let cocLog = this.props.job.cocLog;
  // cocLog ? cocLog.push(log) : (cocLog = [log]);
  cocsRef
    .doc(sample.cocUid)
    .update({ versionUpToDate: false });
  if (!sample.receivedByLab) {
    asbestosSamplesRef.doc(sample.uid).update(
    {
      receivedByLab: true,
      receivedUser: {id: me.uid, name: me.name},
      receivedDate: receivedDate
    });
  } else {
    asbestosSamplesRef.doc(sample.uid).update({
      receivedByLab: false,
      receivedUser: firebase.firestore.FieldValue.delete(),
      receivedDate: firebase.firestore.FieldValue.delete(),
    });
  }
};

export const startAnalysisAll = (samples, job, sessionID, me) => {
  if (samples && samples[job.uid] && Object.values(samples[job.uid]).length > 0) {
    Object.values(samples[job.uid]).forEach(sample => {
      if (sample.cocUid === job.uid) {
        if (!sample.analysisStart) {
          if (!sample.receivedByLab) receiveSample(sample, job, sessionID, me);
          startAnalysis(sample, job, sessionID, me);
        }
      }
    });
  }
};

export const startAnalysis = (sample, job, sessionID, me) => {
  let analysisStart = null;
  if (!sample.receivedByLab && !sample.analysisStart) receiveSample(sample, job, sessionID, me);
  if (sample.verified) verifySample(sample, job, me);
  if (!sample.analysisStart) analysisStart = new Date();
  let log = {
    type: "Analysis",
    log: analysisStart
      ? `Analysis begun on Sample ${sample.sampleNumber} (${sample.description} ${
          sample.material
        }).`
      : `Analysis stopped for Sample ${sample.sampleNumber} (${sample.description} ${
          sample.material
        }).`,
    sample: sample.uid,
    chainOfCustody: job.uid,
  };
  addLog("asbestosLab", log, me);
  cocsRef
    .doc(sample.cocUid)
    .update({ versionUpToDate: false, });
  if (!sample.analysisStart) {
    asbestosSamplesRef.doc(sample.uid).update(
    {
      analysisStart: true,
      analysisStartedby: {id: me.uid, name: me.name},
      analysisStartDate: analysisStart
    });
  } else {
    asbestosSamplesRef.doc(sample.uid).update(
    {
      analysisStart: false,
      analysisStartedby: firebase.firestore.FieldValue.delete(),
      analysisStartDate: firebase.firestore.FieldValue.delete(),
    });
  }
};

export const updateResultMap = (result, map) => {
  let updatedMap = {};

  if (map === undefined) {
    updatedMap = { [result]: true };
  } else {
    let res = true;
    if (map[result] !== undefined) res = !map[result];
    updatedMap = {
      ...map,
      [result]: res,
    };
    if ((result === "ch" || result === "am" || result === "cr" || result === "umf") && map["no"] === true) updatedMap["no"] = false;
    if (result === "no") {
      ["ch","am","cr","umf"].forEach(type => {
        if (map[type] === true) updatedMap[type] = false;
      });
    }
  }

  return updatedMap;
}

export const toggleResult = (result, analyst, sample, job, sessionID, me) => {
  if (
    me.auth &&
    (me.auth["Asbestos Bulk Analysis"] ||
      me.auth["Asbestos Admin"])
  ) {
    // Check analyst has been selected
    if (analyst === "") {
      window.alert(
        "Select analyst from the dropdown at the top of the page."
      );
    }
    // let cocLog = this.props.job.cocLog;
    // if (!cocLog) cocLog = [];
    // Check if this sample has already been analysed
    if (sample.sessionID !== sessionID && sample.result) {
      if (
        window.confirm(
          "This sample has already been analysed. Do you wish to override the result?"
        )
      ) {
        let log = {
          type: "Analysis",
          log: `Previous analysis of sample ${sample.sampleNumber} (${
            sample.description
          } ${sample.material}) overridden.`,
          sample: sample.uid,
          chainOfCustody: job.uid,
        };
        addLog("asbestosLab", log, me);
      } else {
        return;
      }
    }

    if (sample.verified) {
      asbestosSamplesRef
        .doc(sample.uid)
        .update({ verified: false, verifyDate: null });
    }

    let newMap = updateResultMap(result, sample.result);

    let log = {
      type: "Analysis",
      log: `New analysis for sample ${sample.sampleNumber} (${
        sample.description
      } ${sample.material}): ${writeResult(newMap)}`,
      sample: sample.uid,
      chainOfCustody: job.uid,
    };
    addLog("asbestosLab", log, me);

    cocsRef
      .doc(job.uid)
      .update({ versionUpToDate: false });

    // Check for situation where all results are unselected
    let notBlankAnalysis = false;
    Object.values(newMap).forEach(value => {
      if (value) notBlankAnalysis = true;
    });

    if (notBlankAnalysis) {
      if (!sample.analysisStart) startAnalysis(sample, job, sessionID, me);
      asbestosAnalysisRef.doc(`${sessionID}-${sample.uid}`).set({
        analyst: analyst,
        analystUID: me.uid,
        // mode: this.props.analysisMode,
        sessionID: sessionID,
        cocUID: job.uid,
        sampleUID: sample.uid,
        result: newMap,
        description: sample.description,
        material: sample.material,
        samplers: job.personnel,
        analysisDate: new Date()
      });
      asbestosSamplesRef.doc(sample.uid).update({
        analysisUser: {id: me.uid, name: me.name},
        sessionID: sessionID,
        analyst: analyst,
        result: newMap,
        analysisDate: new Date(),
        analysisTime: sample.receivedDate ? moment.duration(moment(new Date()).diff(sample.receivedDate.toDate())).asMilliseconds() : null,
      });
    } else {
      asbestosAnalysisRef
        .doc(`${sessionID}-${sample.uid}`)
        .delete();
      asbestosSamplesRef
        .doc(sample.uid)
        .update({
          result: firebase.firestore.FieldValue.delete(),
          analysisDate: firebase.firestore.FieldValue.delete(),
          analysisUser: firebase.firestore.FieldValue.delete(),
          sessionID: firebase.firestore.FieldValue.delete(),
          analysisTime: firebase.firestore.FieldValue.delete(),
          analyst: firebase.firestore.FieldValue.delete(),
        });
    }
  } else {
    window.alert(
      "You don't have sufficient permissions to set asbestos results."
    );
  }
};

export const removeResult = (sample, sessionID, me) => {
  let log = {
    type: "Analysis",
    log: `Sample ${sample.sampleNumber} (${sample.description} ${
          sample.material
        }) result removed.`,
    sample: sample.uid,
    chainOfCustody: sample.cocUid,
  };
  addLog("asbestosLab", log, me);

  cocsRef
    .doc(sample.cocUid)
    .update({ versionUpToDate: false });
  asbestosAnalysisRef
    .doc(`${sessionID}-${sample.uid}`)
    .delete();
  asbestosSamplesRef
    .doc(sample.uid)
    .update({
      result: firebase.firestore.FieldValue.delete(),
      analysisDate: firebase.firestore.FieldValue.delete(),
      analysisUser: firebase.firestore.FieldValue.delete(),
      sessionID: firebase.firestore.FieldValue.delete(),
    });
}

export const verifySample = (sample, job, me) => {
  if (
    (me.auth &&
    (me.auth["Analysis Checker"] ||
      me.auth["Asbestos Admin"]))
  ) {
    if (!sample.verified || window.confirm("Are you sure you wish to remove the verification of this sample result?")) {
      // if (me.uid === sample.analysisUser.id && !sample.verified) {
      //   window.alert("Samples must be checked off by a different user.");
      // } else {
        if (!sample.analysisStart && !sample.verified) startAnalysis(sample);
        let verifyDate = null;
        let log = {
          type: "Verified",
          log: !sample.verified
            ? `Sample ${sample.sampleNumber} (${sample.description} ${
                sample.material
              }) result verified.`
            : `Sample ${sample.sampleNumber} (${sample.description} ${
                sample.material
              }) verification removed.`,
          sample: sample.uid,
          chainOfCustody: job.uid,
        };
        addLog("asbestosLab", log, me);

        cocsRef
          .doc(sample.cocUid)
          .update({ versionUpToDate: false });
        if (!sample.verified) {
          sample.verifyDate = new Date();
          let cocStats = getStats(sample);
          logSample(job, sample, cocStats);
          asbestosSamplesRef.doc(sample.uid).update(
          {
            verified: true,
            verifyUser: {id: me.uid, name: me.name},
            verifyDate: new Date(),
            turnaroundTime: sample.receivedDate ? moment.duration(moment().diff(sample.receivedDate.toDate())).asMilliseconds() : null,
          });
        } else {
          asbestosSamplesRef.doc(sample.uid).update(
          {
            verified: false,
            verifyUser: firebase.firestore.FieldValue.delete(),
            verifyDate: firebase.firestore.FieldValue.delete(),
            turnaroundTime: firebase.firestore.FieldValue.delete(),
          });
        }
      // }
    }
  } else {
    window.alert(
      "You don't have sufficient permissions to verify asbestos results."
    );
  }
};

//
// HELPER FUNCTIONS
//

export const sortSamples = samples => {
  let samplemap = {};
  samples.forEach(sample => {
    if (samplemap[sample.jobnumber]) {
      samplemap[sample.jobnumber].push(sample);
    } else {
      samplemap[sample.jobnumber] = [sample];
    }
  });
  return samplemap;
};

export const writeDescription = (sample) => {
  var str = '';
  if (sample.locationgeneric) str = sample.locationgeneric;
  if (sample.locationdetailed) {
    if (str === '') {
      str = sample.locationdetailed;
    } else {
      str = str + ' - ' + sample.locationdetailed;
    }
  }
  if (str !== '') str = str + ': ';
  if (sample.description && sample.material) {
    str = str + sample.description + ", " + sample.material;
  } else if (sample.description) {
    str = str + sample.description;
  } else if (sample.material) {
    str = str + sample.material;
  } else {
    str = str + "No description";
  }
  return str;
};

export const getResultColor = (state, type, noColor, yesColor) => {
  if(state && state[type] === true) return yesColor;
  return noColor;
}

export const getSampleColours = sample => {
  let res = sample.result;
  return {
    cameraColor: sample.imagePathRemote ? 'green' : '#ddd',
    receivedColor: sample.receivedByLab ? 'green' : '#ddd',
    analysisColor: sample.analysisStart ? 'green' : '#ddd',
    verifiedColor: sample.verified ? 'green' : '#ddd',
    waColor: sample.waAnalysisComplete ? 'green' : 'inherit',

    chColor: getResultColor(res, 'ch', '#ddd', 'white'),
    chDivColor: getResultColor(res, 'ch', 'white', 'red'),

    amColor: getResultColor(res, 'am', '#ddd', 'white'),
    amDivColor: getResultColor(res, 'am', 'white', 'red'),

    crColor: getResultColor(res, 'cr', '#ddd', 'white'),
    crDivColor: getResultColor(res, 'cr', 'white', 'red'),

    umfColor: getResultColor(res, 'umf', '#ddd', 'white'),
    umfDivColor: getResultColor(res, 'umf', 'white', 'red'),

    noColor: getResultColor(res, 'no', '#ddd', 'green'),
    noDivColor: getResultColor(res, 'no', 'white', 'lightgreen'),

    orgColor: getResultColor(res, 'org', '#ddd', 'mediumblue'),
    orgDivColor: getResultColor(res, 'org', 'white', 'lightblue'),

    smfColor: getResultColor(res, 'smf', '#ddd', 'mediumblue'),
    smfDivColor: getResultColor(res, 'smf', 'white', 'lightblue'),
  };
}

export const getBasicResult = (sample) => {
  let result = "none";
  if (
    sample.result &&
    (sample.result["ch"] ||
      sample.result["am"] ||
      sample.result["cr"] ||
      sample.result["umf"])
  )
    result = "positive";
  if (sample.result && sample.result["no"])
    result = "negative";
  return result;
}

export const writeResult = result => {
  let detected = [];
  if (result === undefined) return "Not analysed";
  Object.keys(result).forEach(type => {
    if (result[type]) detected.push(type);
  });
  if (detected.length < 1) return "Not analysed";
  if (detected[0] === "no") return "No asbestos detected";
  let asbestos = [];
  if (result["ch"]) asbestos.push("chrysotile");
  if (result["am"]) asbestos.push("amosite");
  if (result["cr"]) asbestos.push("crocidolite");
  if (asbestos.length > 0) {
    asbestos[asbestos.length - 1] =
      asbestos[asbestos.length - 1] + " asbestos";
  }
  let str = "";
  if (asbestos.length === 1) {
    str = asbestos[0];
  } else if (asbestos.length > 1) {
    var last_element = asbestos.pop();
    str = asbestos.join(", ") + " and " + last_element;
  }
  detected.forEach(detect => {
    if (detect === "umf") {
      if (asbestos.length > 0) {
        str = str + " and unknown mineral fibres (UMF)";
      } else {
        str = "unknown mineral fibres (UMF)";
      }
    }
  });
  return str.charAt(0).toUpperCase() + str.slice(1) + " detected";
};

export const writeShorthandResult = result => {
  let detected = [];
  if (result === undefined) return "N/A";
  Object.keys(result).forEach(type => {
    if (result[type]) detected.push(type);
  });
  if (detected.length < 1) return "N/A";
  if (detected[0] === "no") return "NO";
  let str = '';
  if (result["ch"]) str = "CH ";
  if (result["am"]) str = str + "AM ";
  if (result["cr"]) str = str + "CR ";
  if (result["umf"]) str = str + "UMF ";
  return str.slice(0, -1);
};

export const writeSoilDetails = details => {
  let dictionary = {
    subFractionType: {
      cobbles: 'cobbly ',
      gravel: 'gravelly ',
      sand: 'sandy ',
      clay: 'clayey ',
      silt: 'silty ',
      topsoil: 'organic soily ',
      organicclay: 'organic clayey ',
      organicsilt: 'organic silty ',
      organicsand: 'organic sandy ',
      peat: 'peaty ',
    },
    fractionQualifier: {
      fine: 'fine',
      medium: 'medium',
      coarse: 'coarse',
      finetocoarse: 'fine to coarse',
      finetomedium: 'fine to medium',
      mediumtocoarse: 'medium to coarse',
      firm: 'firm',
      spongy: 'spongy',
      plastic: 'plastic',
      fibrous: 'fibrous',
      amorphous: 'amorphous',
    },
    plasticity: {
      'low plasticity': 'slightly plastic',
      'medium plasticity': 'moderately plastic',
      'high plasticity': 'highly plastic'
    }
  }
  let finalStr = '';
  let sections = [];
  if (details && details.majorFractionType) {

    // SOIL NAME
    let str = '';
    let minorFractions = [];
    if (details.subFractionType && details.subFractionType !== '') {
      str = dictionary.subFractionType[details.subFractionType];
    }
    if ((details.majorFractionType === 'sand' || details.majorFractionType === 'gravel' || details.majorFractionType === 'organicsand' || details.majorFractionType === 'peat') && details.majorFractionQualifier) {
      str = str + dictionary.fractionQualifier[details.majorFractionQualifier] + ' ';
    }
    str = str + details.majorFractionType.toUpperCase() + ' ';
    if (details.someFractionTypes) {
      let fractionArray = [];
      Object.keys(details.someFractionTypes).forEach(key => {
        if (details.someFractionTypes[key] === true) fractionArray.push(key);
      });
      if (fractionArray.length > 0) {
        if (fractionArray.length > 1) {
          minorFractions.push('some ' + fractionArray.slice(0, -1).join(', ') + ' and ' + fractionArray.slice(-1));
        } else {
          minorFractions.push('some ' + fractionArray[0]);
        }
      }
    }
    if (details.minorFractionTypes) {
      let fractionArray = [];
      Object.keys(details.minorFractionTypes).forEach(key => {
        if (details.minorFractionTypes[key] === true) fractionArray.push(key);
      });
      if (fractionArray.length > 0) {
        if (fractionArray.length > 1) {
          minorFractions.push('minor ' + fractionArray.slice(0, -1).join(', ') + ' and ' + fractionArray.slice(-1));
        } else {
          minorFractions.push('minor ' + fractionArray[0]);
        }
      }
    }
    if (details.traceFractionTypes) {
      let fractionArray = [];
      Object.keys(details.traceFractionTypes).forEach(key => {
        if (details.traceFractionTypes[key] === true) fractionArray.push(key);
      });
      if (fractionArray.length > 0) {
        if (fractionArray.length > 1) {
          minorFractions.push('trace of ' + fractionArray.slice(0, -1).join(', ') + ' and ' + fractionArray.slice(-1));
        } else {
          minorFractions.push('trace of ' + fractionArray[0]);
        }
      }
    }
    if (minorFractions.length > 0) {
      if (minorFractions.length === 1) str += 'with ' + minorFractions[0];
      else str += 'with ' + minorFractions.slice(0, -1).join(', ') + ' and ' + minorFractions.slice(-1);
    }
    sections.push(str);
    str = '';

    // VISUAL CHARACTERISTICS
    let section = [];
    if (details.colour && details.colour !== '') {
      let colour = '';
      if (details.colourShade && details.colourShade !== '') colour += details.colourShade + ' ';
      if (details.colourQualifier && details.colourQualifier !== '') colour += details.colourQualifier + ' ';
      colour += details.colour;
      if (details.type !== 'coarse' && details.colourPattern && details.colourPattern !== '' && details.colourSecondary && details.colourSecondary !== '') {
        colour += ', ' + details.colourPattern + ' ' + details.colourSecondary;
      }
      section.push(colour);
    }
    if (details.structure && details.structure !== '') {
      section.push(details.structure);
    }
    if (section.length > 0) {
      sections.push(section.join(', '));
    }

    finalStr = sections.map(x => x.trim()).join('; ') + '. ';

    // SOIL MASS QUALIFICATIONS
    section = [];
    sections = [];
    if (details.type !== 'coarse' && details.strength && details.strength !== '') sections.push(details.strength);
    if (details.type === 'coarse' && details.density && details.density !== '') sections.push(details.density);
    if (details.moisture && details.moisture !== '') sections.push(details.moisture);
    if (details.grading && details.grading !== '') sections.push(details.grading);
    if (details.bedding && details.bedding !== '') sections.push(details.bedding);
    if (details.majorFractionType === 'clay' && details.plasticity && details.plasticity !== '') sections.push(details.plasticity);
    if (details.type === 'fine' && details.strength && details.sensitivityStrength && details.strength !== '' && details.sensitivityStrength !== '') {
       sections.push(getSoilSensitivity(details).toLowerCase());
    }

    // SOIL FRACTION QUALIFICATIONS
    // Add major fraction
    if (details.majorFractionType && details.majorFractionType !== '') {
      let temp = details.majorFractionType;
      if ((details.majorFractionType === 'sand' || details.majorFractionType === 'gravel' || details.majorFractionType === 'organicsand' || details.majorFractionType === 'peat') && details.majorFractionQualifier && details.majorFractionQualifier !== '') temp += ', ' + dictionary.fractionQualifier[details.majorFractionQualifier];
      if (details.type !== 'fine' && details.particleShape && details.particleShape !== '') temp += ', ' + details.particleShape;
      if (details.type !== 'fine' && details.particleShapeSecondary && details.particleShapeSecondary !== '') temp += ', ' + details.particleShapeSecondary;
      if (details.majorFractionType === 'clay' && details.plasticity && details.plasticity !== '') temp += ', ' + dictionary.plasticity[details.plasticity];
      sections.push(temp);
    }
    // Add subordinate fraction
    if (details.subFractionType && details.subFractionType !== '') {
      let temp = details.subFractionType;
      if ((details.subFractionType === 'sand' || details.subFractionType === 'gravel' || details.subFractionType === 'organicsand' || details.subFractionType === 'peat') && details.subFractionQualifier && details.subFractionQualifier !== '') temp += ', ' + dictionary.fractionQualifier[details.subFractionQualifier];
      if (details.subFractionType === 'clay' && details.plasticity && details.plasticity !== '') temp += ', ' + dictionary.plasticity[details.plasticity];
      sections.push(temp);
    }
    // Add minor fraction
    let fractionArray = [];
    Object.keys(details.someFractionTypes).forEach(key => {
      if (details.someFractionTypes[key] === true) fractionArray.push(key);
    });
    Object.keys(details.minorFractionTypes).forEach(key => {
      if (details.minorFractionTypes[key] === true) fractionArray.push(key);
    });
    Object.keys(details.traceFractionTypes).forEach(key => {
      if (details.traceFractionTypes[key] === true) fractionArray.push(key);
    });
    if (fractionArray.length > 1) sections.push(fractionArray.slice(0, -1).join(', ') + ' and ' + fractionArray.slice(-1));
    else if (fractionArray.length === 1) sections.push(fractionArray[0]);

    if (details.additionalStructures && details.additionalStructures !== '') sections.push(details.additionalStructures.toLowerCase());
    if (sections.length > 0) {
      let temp = sections.join('; ');
      finalStr += temp.charAt(0).toUpperCase() + temp.slice(1);
    }

    if (details.geological && details.geological !== '') finalStr += ' (' + details.geological.toUpperCase() + ')';
    finalStr += '.';

  } else {
    finalStr = 'No details.';
  }
  return finalStr;
};

export const getStats = job => {
  let samples = job.samples;
  let jobID = job.uid;
  let versionUpToDate = job.versionUpToDate;
  let nz = moment.tz.setDefault("Pacific/Auckland");
  moment.tz.setDefault("Pacific/Auckland");
  moment.updateLocale('en', {
    // workingWeekdays: [1,2,3,4,5],
    workinghours: {
      0: null,
      1: ['08:30:00', '17:00:00'],
      2: ['08:30:00', '17:00:00'],
      3: ['08:30:00', '17:00:00'],
      4: ['08:30:00', '17:00:00'],
      5: ['08:30:00', '17:00:00'],
      6: null,
    },
    holidays: [],
  });

  let status = '';
  let totalSamples = 0;
  let positiveSamples = 0;
  let negativeSamples = 0;

  let numberReceived = 0;
  let numberAnalysisStarted = 0;
  let numberResult = 0;
  let numberVerified = 0;

  let maxTurnaroundTime = 0;
  let averageTurnaroundTime = 0;
  let totalTurnaroundTime = 0;
  let numTurnaroundTime = 0;

  let maxAnalysisTime = 0;
  let averageAnalysisTime = 0;
  let totalAnalysisTime = 0;
  let numAnalysisTime = 0;

  let maxReportTime = 0;
  let averageReportTime = 0;
  let totalReportTime = 0;
  let numReportTime = 0;

  let maxTurnaroundBusinessTime = 0;
  let averageTurnaroundBusinessTime = 0;
  let totalTurnaroundBusinessTime = 0;
  let numTurnaroundBusinessTime = 0;

  let maxAnalysisBusinessTime = 0;
  let averageAnalysisBusinessTime = 0;
  let totalAnalysisBusinessTime = 0;
  let numAnalysisBusinessTime = 0;

  let maxReportBusinessTime = 0;
  let averageReportBusinessTime = 0;
  let totalReportBusinessTime = 0;
  let numReportBusinessTime = 0;

  if (samples && samples[jobID] && Object.values(samples[jobID]).length > 0) {
    Object.values(samples[jobID]).forEach(sample => {
      if (sample.cocUid === jobID) {
        totalSamples = totalSamples + 1;
        if (sample.receivedByLab) numberReceived = numberReceived + 1;
        if (sample.analysisStart) numberAnalysisStarted = numberAnalysisStarted + 1;
        if (sample.result) {
          numberResult = numberResult + 1;
          if (sample.result['no']) {
            negativeSamples = negativeSamples + 1;
          } else positiveSamples = positiveSamples + 1;
          if (sample.analysisTime) {
            if (sample.analysisTime > maxAnalysisTime) maxAnalysisTime = sample.analysisTime;
            totalAnalysisTime = totalAnalysisTime + sample.analysisTime;
            numAnalysisTime = numAnalysisTime + 1;
            averageAnalysisTime = totalAnalysisTime / numAnalysisTime;
          }
          let analysisBusinessTime = moment(sample.analysisDate.toDate()).workingDiff(moment(sample.receivedDate.toDate()));
          if (analysisBusinessTime > maxAnalysisBusinessTime) maxAnalysisBusinessTime = analysisBusinessTime;
          totalAnalysisBusinessTime = totalAnalysisBusinessTime + analysisBusinessTime;
          numAnalysisBusinessTime = numAnalysisBusinessTime + 1;
          averageAnalysisBusinessTime = totalAnalysisBusinessTime / numAnalysisBusinessTime;
        }
        if (sample.verified) {
          numberVerified = numberVerified + 1;
          if (sample.turnaroundTime) {
            if (sample.turnaroundTime > maxTurnaroundTime) maxTurnaroundTime = sample.turnaroundTime;
            totalTurnaroundTime = totalTurnaroundTime + sample.turnaroundTime;
            numTurnaroundTime = numTurnaroundTime + 1;
            averageTurnaroundTime = totalTurnaroundTime / numTurnaroundTime;
            // Check for time between analysis logging and verification
            let turnaroundBusinessTime = moment(sample.verifyDate.toDate()).workingDiff(moment(sample.receivedDate.toDate()));
            if (turnaroundBusinessTime > maxTurnaroundBusinessTime) maxTurnaroundBusinessTime = turnaroundBusinessTime;
            totalTurnaroundBusinessTime = totalTurnaroundBusinessTime + turnaroundBusinessTime;
            numTurnaroundBusinessTime = numTurnaroundBusinessTime + 1;
            averageTurnaroundBusinessTime = totalTurnaroundBusinessTime / numTurnaroundBusinessTime;

            if (sample.analysisTime) {
              let verifyTime = sample.turnaroundTime - sample.analysisTime;
              if (verifyTime > maxReportTime) maxReportTime = verifyTime;
              totalReportTime = totalReportTime + verifyTime;
              numReportTime = numReportTime + 1;
              averageReportTime = totalReportTime / numReportTime;
            }

            let reportBusinessTime = moment(sample.verifyDate.toDate()).workingDiff(moment(sample.analysisDate.toDate()));
            if (reportBusinessTime > maxReportBusinessTime) maxReportBusinessTime = reportBusinessTime;
            totalReportBusinessTime = totalReportBusinessTime + reportBusinessTime;
            numReportBusinessTime = numReportBusinessTime + 1;
            averageReportBusinessTime = totalReportBusinessTime / numReportBusinessTime;
          }
        }
      }
    });
  }

  if (versionUpToDate) {
    status = 'Issued';
  } else if (totalSamples === 0) {
    status = 'No Samples';
  } else if (numberReceived === 0) {
    status = 'In Transit';
  } else if (numberAnalysisStarted === 0) {
    status = 'Received By Lab';
  } else if (numberResult === 0) {
    status = 'Analysis Begun';
  } else if (numberResult === totalSamples && numberVerified === 0) {
    status = 'Analysis Complete';
  } else if (numberVerified === totalSamples) {
    status = 'Ready For Issue';
  } else if (numberVerified > 0) {
    status = 'Analysis Partially Verified';
  } else if (numberResult > 0) {
    status = 'Analysis Partially Complete';
  } else if (numberAnalysisStarted > 0) {
    status = 'Analysis Begun on Some Samples';
  } else if (numberReceived > 0) {
    status = 'Partially Received By Lab';
  }

  let stats = {
    status,
    totalSamples,
    positiveSamples,
    negativeSamples,
    numberReceived,
    numberAnalysisStarted,
    numberResult,
    numberVerified,
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
  };

  // if (totalSamples !== 0 && this.props.job.stats !== stats) cocsRef.doc(this.props.job.uid).update({ stats });
  return stats;
};

export const getSoilSensitivity = details => {
  // see page 16 of NZ Geotechnical Society guide
  let dictionary = {
    'very soft': 6,
    soft: 19,
    firm: 38,
    stiff: 75,
    'very stiff': 150,
    hard: 350,
  };
  let ratio = dictionary[details.strength]/dictionary[details.sensitivityStrength];
  let sensitivity = 'Insensitive, normal';
  if (ratio >= 2 && ratio < 4) sensitivity = 'Moderately sensitive';
  else if (ratio >=4 && ratio < 8) sensitivity = 'Sensitive';
  else if (ratio >=8 && ratio < 16) sensitivity = 'Extra sensitive';
  else if (ratio >=16) sensitivity = 'Quick';
  return sensitivity;
}