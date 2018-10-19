import { GET_STAFF,
        AUTH_USER,
        GET_DOCUMENTS,
        GET_USER,
        GET_WFM,
        GET_MODULES,
        SEARCH_CHANGE,
        CAT_CHANGE,
        GET_TOOLS,
        GET_NOTICES,
        GET_READINGLOG,
      } from "../constants/action-types";
import { auth } from '../config/firebase';
import { wfmRoot, wfmApi, wfmAcc } from '../config/keys';
import { usersRef, docsRef, modulesRef, toolsRef, noticesRef } from "../config/firebase";
import { xmlToJson } from "../config/XmlToJson";
// import { convert } from 'xml-js';

export const fetchUserAuth = () => async dispatch => {
  auth.currentUser &&
  usersRef.doc(auth.currentUser.uid).get().then((doc) => {
    dispatch({ type: AUTH_USER, payload: doc.data().auth });
  });
};

export const fetchStaff = () => async dispatch => {
  usersRef.orderBy('name')
    .onSnapshot((querySnapshot) => {
      var users = [];
      querySnapshot.forEach((doc) => {
        let attrs = [];
        let jobs = [];
        let user = doc.data();
        usersRef.doc(doc.id).collection("attr")
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              attrs.push(doc.data());
            });
          });
        usersRef.doc(doc.id).collection("myjobs")
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              jobs.push(doc.data());
            });
          });
        user.uid = doc.id;
        user.attrs = attrs;
        user.jobs = jobs;
        users.push(user);
      });
      dispatch(
        { type: GET_STAFF, payload: users});
    });
}

export const fetchDocuments = () => async dispatch => {
  docsRef.orderBy('title')
    .onSnapshot((querySnapshot) => {
      var docs = [];
      querySnapshot.forEach((doc) => {
        let ref = doc.data();
        ref.uid = doc.id;
        docs.push(ref);
      });
      dispatch({
        type: GET_DOCUMENTS,
        payload: docs
      });
    });
};

export const fetchTools = () => async dispatch => {
  toolsRef.orderBy('title')
    .onSnapshot((querySnapshot) => {
      var tools = [];
      querySnapshot.forEach((doc) => {
        let tool = doc.data();
        tool.uid = doc.id;
        tools.push(tool);
      });
      dispatch({
        type: GET_TOOLS,
        payload: tools
      });
    });
};

export const fetchModules = () => async dispatch => {
  modulesRef.orderBy('title')
    .onSnapshot((querySnapshot) => {
      var modules = [];
      querySnapshot.forEach((doc) => {
        let mod = doc.data();
        mod.uid = doc.id;
        modules.push(mod);
      });
      dispatch({
        type: GET_MODULES,
        payload: modules
      });
    });
};

export const fetchNotices = () => async dispatch => {
  noticesRef.orderBy('date','desc').limit(100)
    .onSnapshot((querySnapshot) => {
      var notices = [];
      querySnapshot.forEach((doc) => {
        let notice = doc.data();
        notice.uid = doc.id;
        notices.push(notice);
      });
      dispatch({
        type: GET_NOTICES,
        payload: notices
      });
    });
};

export const fetchReadingLog = () => async dispatch => {
  usersRef.doc(auth.currentUser.uid).collection('readinglog').orderBy('date','desc')
    .onSnapshot((querySnapshot) => {
      var logs = [];
      querySnapshot.forEach((doc) => {
        let log = doc.data();
        log.uid = doc.id;
        docsRef.doc(doc.id).get().then((doc) => {
          log.title = doc.data().title;
          logs.push(log);
        });
      });
      dispatch({
        type: GET_READINGLOG,
        payload: logs
      });
    });
};

export const editUser = ({userRef, target}) => dispatch => {
  usersRef.doc(userRef).set({
    [target.id]: target.value
  }, { merge: true });
};

export const getUser = userRef => async dispatch => {
  usersRef.doc(userRef).onSnapshot((doc) => {
    dispatch({
      type: GET_USER,
      payload: doc.data()
    });
  });
};

export const fetchWFM = () => async dispatch => {
  // let path = apiRoot + 'wfm/job.php?apiKey=' + apiKey;
  let path = wfmRoot + 'job.api/current?apiKey=' + wfmApi + '&accountKey=' + wfmAcc;
  fetch(path).then(results => results.text()).then(data =>{
    var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
    var json = xmlToJson(xmlDOM);
    let jobs = [];
    // Map WFM jobs to a single level job object we can use
    json.Response.Jobs.Job.map(wfmJob => {
      let job = {};
      job.jobNumber = wfmJob.ID ? wfmJob.ID : 'No job number';
      job.address = wfmJob.Name ? wfmJob.Name: 'No address';
      job.description = wfmJob.Description ? wfmJob.Description : 'No description';
      if (wfmJob.Client) {
        job.client = wfmJob.Client.Name ? wfmJob.Client.Name : 'No client name';
        job.clientID = wfmJob.Client.ID ? wfmJob.Client.ID : 'No client ID';
      } else {
        job.client = 'No client name';
        job.clientID = 'No client ID';
      }
      job.clientOrderNumber = wfmJob.ClientOrderNumber ? wfmJob.ClientOrderNumber : 'No client order number';
      if (wfmJob.Contact) {
        job.contact = wfmJob.Contact.Name ? wfmJob.Contact.Name : 'No contact name';
        job.contactID = wfmJob.Contact.ID ? wfmJob.Contact.ID : 'No contact ID';
      } else {
        job.contact = 'No contact name';
        job.contactID = 'No contact ID';
      }
      if (wfmJob.Manager) {
        job.manager = wfmJob.Manager.Name ? wfmJob.Manager.Name : 'No contact name';
        job.managerID = wfmJob.Manager.ID ? wfmJob.Manager.ID : 'No contact ID';
      } else {
        job.manager = 'No contact name';
        job.managerID = 'No contact ID';
      }
      job.dueDate = wfmJob.DueDate ? wfmJob.DueDate : '';
      job.startDate = wfmJob.StartDate ? wfmJob.StartDate : '';
      job.state = wfmJob.State ? wfmJob.State : 'Unknown state';
      job.type = wfmJob.Type ? wfmJob.Type : 'Other';
      jobs.push(job);
    });
    dispatch({
      type: GET_WFM,
      payload: jobs
    });
  });
};

export const onSearchChange = value => dispatch => {
  dispatch({
    type: SEARCH_CHANGE,
    payload: value,
  });
};

export const onCatChange = value => dispatch => {
  dispatch({
    type: CAT_CHANGE,
    payload: value,
  });
};
