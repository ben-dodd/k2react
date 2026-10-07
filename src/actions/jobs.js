import {
  AUTHORISE_WFM,
  CLEAR_WFM_JOB,
  EDIT_MODAL_DOC,
  GET_WFM_CLIENTS,
  GET_WFM_JOB,
  GET_WFM_JOBS,
  GET_WFM_LEADS,
  RESET_JOBS,
  SAVE_WFM_ITEMS,
  SAVE_WFM_STATS,
  SET_MODAL_ERROR
} from 'constants/action-types'

// Lead history icons

// Site icons

import moment from 'moment'

import { auth, authRef, firestore, stateRef } from 'config/firebase'
import { xmlToJson } from 'config/XmlToJson'
import { dateOf, sendSlackMessage, titleCase } from './helpers'
// import assetData from "./assetData.json";

const buckets = [
  'jobs',
  'asbestos',
  'asbestosbulkid',
  'asbestosclearance',
  'asbestosbackground',
  'workplace',
  'meth',
  'bio',
  'stack',
  'noise'
]

export const resetJobs = () => (dispatch) => {
  dispatch({ type: RESET_JOBS })
}

export const fetchWFMAuth = () => async (dispatch) => {
  authRef.get().then((doc) => {
    if (doc.data()) {
      dispatch({
        type: AUTHORISE_WFM,
        payload: doc.data()
      })
    }
  })
}

export const authoriseWFM =
  ({ code, refreshToken }) =>
  async (dispatch) => {
    console.log('authoriseWFM called')
    let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
    let params = {
      method: 'POST',
      body: JSON.stringify({
        path: `${process.env.REACT_APP_WFM_TOKEN_ENDPOINT}`,
        params: {
          method: 'POST',
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${process.env.REACT_APP_WFM_CLIENT_ID}:${process.env.REACT_APP_WFM_CLIENT_SECRET}`
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: refreshToken
            ? `grant_type=refresh_token&refresh_token=${refreshToken}`
            : `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_WFM_REDIRECT_URI}`
        }
      })
    }
    // console.log(params);
    fetch(path, params)
      .then((results) => {
        return results.text()
      })
      .then((data) => {
        let dataObj = JSON.parse(data)
        let expiryDate = moment().add(moment.duration(dataObj.expires_in, 'seconds'))
        // console.log(dataObj);
        let authObj = {
          wfmAccessToken: dataObj.access_token,
          wfmRefreshToken: dataObj.refresh_token,
          wfmAccessExpiry: expiryDate.toDate()
        }
        authRef.update(authObj)
        dispatch({
          type: AUTHORISE_WFM,
          payload: authObj
        })
      })
  }

export const fetchWFMStaff = (accessToken, refreshToken) => async (dispatch) => {
  // sendSlackMessage(`${auth.currentUser.displayName} ran fetchWFMClients`);
  // let path = apiRoot + 'wfm/job.php?apiKey=' + apiKey;
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  let params = {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}staff.api/list`,
      params: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
          Accept: 'application/json'
        }
      }
    })
  }
  fetch(path, params)
    .then((results) => results.text())
    .then((data) => {
      var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
      var json = xmlToJson(xmlDOM)
      // console.log(json);
    })
}

export const fetchWFMJobs = (accessToken, refreshToken) => async (dispatch) => {
  // dispatch(authoriseWFM());
  sendSlackMessage(`${auth.currentUser.displayName} ran fetchWFMJobs`)
  // let path = apiRoot + 'wfm/job.php?apiKey=' + apiKey;
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  let params = {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}job.api/current`,
      params: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
          Accept: 'application/json'
        }
      }
    })
  }
  let len = 100
  let str = ''
  fetch(path, params)
    .then((results) => {
      // console.log(results);
      return results.text()
    })
    .then((data) => {
      // console.log(data);
      var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
      var json = xmlToJson(xmlDOM)
      // console.log(json);
      let jobs = []
      // Map WFM jobs to a single level job object we can use
      if (json.Response) {
        json.Response.Jobs.Job.forEach((wfmJob) => {
          // console.log(wfmJob);
          let job = {}
          job.jobNumber = wfmJob.ID || null
          job.wfmID = wfmJob.UUID
          job.address = wfmJob.Name || null
          let i = job.address.length
          if (i < len) {
            len = i
            str = job.address
            //console.log(`${str} (${len})`);
          }

          job.description = wfmJob.Description || null
          if (wfmJob.Client) {
            // console.log(wfmJob.Client);
            job.client = wfmJob.Client.Name || null
            job.clientID = wfmJob.Client.UUID || null
          }
          job.clientOrderNumber = wfmJob.ClientOrderNumber ? wfmJob.ClientOrderNumber : null
          if (wfmJob.Contact) {
            job.contact = wfmJob.Contact.Name || null
            job.contactID = wfmJob.Contact.UUID || null
          }
          if (wfmJob.Manager) {
            job.manager = wfmJob.Manager.Name || null
            job.managerID = wfmJob.Manager.UUID || null
          }
          if (wfmJob.Assigned.Staff) {
            job.assigned = []
            if (Array.isArray(wfmJob.Assigned.Staff)) {
              wfmJob.Assigned.Staff.forEach((wfmAssigned) => {
                let staff = {}
                staff.id = wfmAssigned.UUID
                staff.name = wfmAssigned.Name
                job.assigned.push(staff)
              })
            } else {
              job.assigned = [
                {
                  id: wfmJob.Assigned.Staff.UUID,
                  name: wfmJob.Assigned.Staff.Name
                }
              ]
            }
            // console.log(job.assigned);
          }
          job.dueDate = wfmJob.DueDate || null
          job.startDate = wfmJob.StartDate || null
          job.wfmState = wfmJob.State || null
          job.wfmType = wfmJob.Type || 'Other'
          jobs.push(job)
        })
      } else {
        console.log('Bad response')
      }
      dispatch({
        type: GET_WFM_JOBS,
        payload: jobs
      })
    })
}

export const fetchWFMLeads = (accessToken, refreshToken) => async (dispatch) => {
  // sendSlackMessage(`${auth.currentUser.displayName} ran fetchWFMLeads`);
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  let params = {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}lead.api/current?detailed=true`,
      params: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
          Accept: 'application/json'
        }
      }
    })
  }
  fetch(path, params)
    .then((results) => results.text())
    .then((data) => {
      // //console.log(data);
      var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
      var json = xmlToJson(xmlDOM)
      let leads = []
      // Map WFM jobs to a single level job object we can use
      if (json.Response) {
        json.Response.Leads.Lead.forEach((wfmLead) => {
          // console.log(wfmLead);
          let lead = {}
          lead.wfmID = wfmLead.UUID
          lead.name = wfmLead.Name || null
          lead.description = wfmLead.Description || null
          lead.value = wfmLead.EstimatedValue || 0
          if (wfmLead.Client) {
            lead.client = wfmLead.Client.Name || null
            lead.clientID = wfmLead.Client.UUID || null
          }
          if (wfmLead.Contact) {
            lead.contact = wfmLead.Contact.Name || null
            lead.contactID = wfmLead.Contact.UUID || null
          }
          if (wfmLead.Owner) {
            lead.owner = wfmLead.Owner.Name || null
            lead.ownerID = wfmLead.Owner.UUID || null
          }
          let assigned = { [lead.ownerID]: true }
          lead.date = wfmLead.Date || null
          lead.dateWonLost = wfmLead.DateWonLost || null
          lead.category = typeof wfmLead.Category !== 'object' ? wfmLead.Category : 'Other'
          if (wfmLead.Activities && wfmLead.Activities.Activity) {
            lead.activities = []
            if (Array.isArray(wfmLead.Activities.Activity)) {
              wfmLead.Activities.Activity.forEach((wfmActivity) => {
                let activity = {}
                activity.date = wfmActivity.Date
                activity.subject = wfmActivity.Subject
                activity.completed = wfmActivity.Completed
                if (wfmActivity.Responsible) {
                  activity.responsible = wfmActivity.Responsible.Name
                  activity.responsibleID = wfmActivity.Responsible.UUID
                  assigned[activity.responsibleID] = true
                } else {
                  activity.responsible = null
                  activity.responsibleID = null
                }
                lead.activities.push(activity)
              })
            } else {
              if (wfmLead.Activities.Activity.Responsible) assigned[wfmLead.Activities.Activity.Responsible.UUID] = true
              lead.activities = [
                {
                  date: wfmLead.Activities.Activity.Date,
                  subject: wfmLead.Activities.Activity.Subject,
                  complete: wfmLead.Activities.Activity.Completed,
                  responsible: wfmLead.Activities.Activity.Responsible ? wfmLead.Activities.Activity.Responsible.Name : null,
                  responsibleID: wfmLead.Activities.Activity.Responsible ? wfmLead.Activities.Activity.Responsible.UUID : null
                }
              ]
            }
            if (Object.keys(assigned).length > 0) lead.assigned = Object.keys(assigned)
            // console.log(lead.assigned);
          } else {
            lead.activities = []
          }
          if (wfmLead.History && wfmLead.History.Item) {
            // console.log(wfmLead.History);
            lead.history = []
            if (Array.isArray(wfmLead.History.Item)) {
              wfmLead.History.Item.forEach((wfmHistory) => {
                let item = []
                item.detail = wfmHistory.Detail
                item.date = wfmHistory.Date
                item.staff = wfmHistory.Staff
                item.type = wfmHistory.Type
                lead.history.push(item)
              })
            } else {
              lead.history = [
                {
                  detail: wfmLead.History.Item.Detail,
                  date: wfmLead.History.Item.Date,
                  staff: wfmLead.History.Item.Staff,
                  type: wfmLead.History.Item.Type
                }
              ]
            }
          } else {
            lead.history = ['No History']
          }
          leads.push(lead)
        })
        // //console.log(leads);
      } else {
        console.log(data)
      }
      dispatch({
        type: GET_WFM_LEADS,
        payload: leads
      })
    })
}

export const fetchWFMClients = (accessToken, refreshToken) => async (dispatch) => {
  // sendSlackMessage(`${auth.currentUser.displayName} ran fetchWFMClients`);
  // let path = apiRoot + 'wfm/job.php?apiKey=' + apiKey;
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  // let taskParams = {
  //   method: "POST",
  //   // mode: "no-cors",
  //   body: JSON.stringify({
  //     path: `${process.env.REACT_APP_WFM_ROOT}job.api/tasks`,
  //     params: {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "xero-tenant-id": process.env.REACT_APP_XERO_TENANT_ID,
  //         Accept: "application/json",
  //       },
  //     },
  //   }),
  // };
  //
  // fetch(path, taskParams)
  //   .then((results) => results.text())
  //   .then((data) => {
  //     var xmlDOM = new DOMParser().parseFromString(data, "text/xml");
  //     var json = xmlToJson(xmlDOM);
  //     console.log(json);
  //   });

  let params = {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}client.api/list`,
      params: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
          Accept: 'application/json'
        }
      }
    })
  }
  let len = 100
  let str = ''
  fetch(path, params)
    .then((results) => results.text())
    .then((data) => {
      var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
      var json = xmlToJson(xmlDOM)
      // console.log(json);
      let clients = []
      // Map WFM jobs to a single level job object we can use
      if (json.Response) {
        json.Response.Clients.Client.forEach((wfmClient) => {
          // //console.log(wfmClient);
          let i = wfmClient.Name.length
          if (i < len) {
            len = i
            str = wfmClient.Name
          }
          let client = {}
          client.wfmID = wfmClient.UUID
          client.name = wfmClient.Name
          client.email = wfmClient.Email
          client.address = wfmClient.Address instanceof Object ? '' : wfmClient.Address
          client.city = wfmClient.City instanceof Object ? '' : wfmClient.City
          // client.postalAddress = wfmClient.postalAddress;
          clients.push(client)
        })
        //console.log(`${str} (${len})`);
        // console.log(clients);
      } else {
        console.log(data)
      }
      dispatch({
        type: GET_WFM_CLIENTS,
        payload: clients
      })
    })
}

export const clearWfmJob = () => async (dispatch) => {
  dispatch({
    type: CLEAR_WFM_JOB
  })
}

export const getDetailedWFMJob =
  ({ jobNumber, createUid, wfmClients, site, jobDescription, accessToken, refreshToken }) =>
  async (dispatch) => {
    let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
    let params = {
      method: 'POST',
      body: JSON.stringify({
        path: `${process.env.REACT_APP_WFM_ROOT}job.api/get/${jobNumber.trim()}`,
        params: {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
            Accept: 'application/json'
          }
        }
      })
    }
    fetch(path, params)
      .then((results) => results.text())
      .then((data) => {
        var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
        var json = xmlToJson(xmlDOM)
        if (json.Response) {
          if (json.Response.Status === 'ERROR') {
            dispatch({
              type: SET_MODAL_ERROR,
              payload: json.Response.ErrorDescription
            })
          } else {
            let wfmJob = json.Response.Job
            let job = {
              isJob: true
            }
            // console.log(wfmJob);
            job.jobDescription = jobDescription || wfmJob.ID || 'Job'
            job.jobNumber = wfmJob.ID || null
            job.address = wfmJob.Name || null
            job.wfmID = wfmJob.UUID
            job.description = wfmJob.Description || null
            job.dueDate = dateOf(wfmJob.DueDate)
            job.startDate = dateOf(wfmJob.StartDate)
            job.wfmState = wfmJob.State || 'Unknown state'
            job.category = wfmJob.Type || 'Other'

            if (wfmJob.Client) {
              job.client = wfmJob.Client.Name || null
              job.clientID = wfmJob.Client.UUID || null
              if (job.clientID) {
                let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
                let params = {
                  method: 'POST',
                  body: JSON.stringify({
                    path: `${process.env.REACT_APP_WFM_ROOT}client.api/get/${job.clientID}`,
                    params: {
                      method: 'GET',
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
                        Accept: 'application/json'
                      }
                    }
                  })
                }
                fetch(path, params)
                  .then((results) => results.text())
                  .then((data) => {
                    var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
                    var json = xmlToJson(xmlDOM)
                    if (json.Response) {
                      if (json.Response.Status === 'ERROR') {
                        dispatch({
                          type: SET_MODAL_ERROR,
                          payload: json.Response.ErrorDescription
                        })
                      } else {
                        let client = json.Response.Client
                        let wfmClient = {}
                        job.clientDetails = {
                          wfmID: client.UUID,
                          name: client.Name === Object(client.Phone) ? null : titleCase(client.Name.toString().trim()),
                          email:
                            client.Email === Object(client.Email)
                              ? null
                              : client.Email
                                ? client.Email.toString().trim().toLowerCase()
                                : null,
                          address: client.Address === Object(client.Address) ? null : titleCase(client.Address.toString().trim()),
                          city: client.City === Object(client.City) ? null : titleCase(client.City.toString().trim()),
                          region: client.Region === Object(client.Region) ? null : titleCase(client.Region.toString().trim()),
                          postcode: client.PostCode === Object(client.PostCode) ? null : client.PostCode.toString().trim(),
                          country: client.Country === Object(client.Country) ? null : titleCase(client.Country.toString().trim()),
                          postalAddress:
                            client.PostalAddress === Object(client.PostalAddress)
                              ? null
                              : titleCase(client.PostalAddress.toString().trim()),
                          postalCity:
                            client.PostalCity === Object(client.PostalCity) ? null : titleCase(client.PostalCity.toString().trim()),
                          postalRegion:
                            client.PostalRegion === Object(client.PostalRegion) ? null : titleCase(client.PostalRegion.toString().trim()),
                          postalPostCode:
                            client.PostalPostCode === Object(client.PostalPostCode) ? null : client.PostalPostCode.toString().trim(),
                          postalCountry:
                            client.PostalCountry === Object(client.PostalCountry)
                              ? null
                              : titleCase(client.PostalCountry.toString().trim()),
                          phone: client.Phone === Object(client.Phone) ? null : client.Phone.toString().replace('-', ' ').trim()
                        }
                        dispatch({
                          type: GET_WFM_JOB,
                          payload: job
                        })
                        dispatch({
                          type: EDIT_MODAL_DOC,
                          payload: job
                        })
                      }
                    } else {
                      console.log(data)
                    }
                  })
              }
            } else {
              job.client = null
              job.clientID = null
            }
            job.clientOrderNumber = wfmJob.ClientOrderNumber && typeof wfmJob.ClientOrderNumber !== 'object' ? wfmJob.ClientOrderNumber : ''
            if (wfmJob.Contact) {
              if (wfmJob.Contact.UUID) {
                let contactID = wfmJob.Contact.UUID
                let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
                let params = {
                  method: 'POST',
                  body: JSON.stringify({
                    path: `${process.env.REACT_APP_WFM_ROOT}client.api/contact/${contactID}`,
                    params: {
                      method: 'GET',
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
                        Accept: 'application/json'
                      }
                    }
                  })
                }
                fetch(path, params)
                  .then((results) => results.text())
                  .then((data) => {
                    var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
                    var json = xmlToJson(xmlDOM)
                    if (json.Response) {
                      if (json.Response.Status === 'ERROR') {
                        dispatch({
                          type: SET_MODAL_ERROR,
                          payload: json.Response.ErrorDescription
                        })
                      } else {
                        let contact = json.Response.Contact
                        let wfmContact = {}
                        // console.log(contact);
                        job.contact = {
                          wfmID: contactID,
                          name: contact.Name ? contact.Name.toString().trim() : '',
                          position: contact.Position === Object(contact.Position) ? '' : contact.Position.toString().trim(),
                          mobile: contact.Mobile === Object(contact.Mobile) ? '' : contact.Mobile.toString().replace('-', ' ').trim(),
                          phone: contact.Phone === Object(contact.Phone) ? '' : contact.Phone.toString().replace('-', ' ').trim(),
                          email: contact.Email === Object(contact.Email) ? '' : contact.Email.toString().toLowerCase().trim()
                        }
                        dispatch({
                          type: GET_WFM_JOB,
                          payload: job
                        })
                        dispatch({
                          type: EDIT_MODAL_DOC,
                          payload: job
                        })
                      }
                    } else {
                      console.log(data)
                    }
                  })
              } else {
                job.contact = {
                  wfmID: null,
                  name: null,
                  email: null
                }
              }
            } else {
              job.contact = {
                wfmID: null,
                name: null,
                email: null
              }
            }
            if (wfmJob.Manager) {
              job.manager = wfmJob.Manager.Name || null
              job.managerID = wfmJob.Manager.UUID || null
            } else {
              job.manager = null
              job.managerID = null
            }
            if (wfmJob.Milestones.Milestone) {
              job.milestones = []
              if (Array.isArray(wfmJob.Milestones.Milestone)) {
                wfmJob.Milestones.Milestone.forEach((wfmMilestone) => {
                  let milestone = {}
                  milestone.id = wfmMilestone.UUID
                  milestone.date = wfmMilestone.Date
                  milestone.description = wfmMilestone.Description
                  milestone.folder = wfmMilestone.Folder
                  milestone.completed = wfmMilestone.Completed
                  job.milestones.push(milestone)
                })
              } else {
                job.milestones = [
                  {
                    id: wfmJob.Milestones.Milestone.UUID,
                    date: wfmJob.Milestones.Milestone.Date,
                    description: wfmJob.Milestones.Milestone.Description,
                    folder: wfmJob.Milestones.Milestone.Folder,
                    complete: wfmJob.Milestones.Milestone.Completed
                  }
                ]
              }
            }
            if (wfmJob.Notes.Note) {
              job.notes = []
              if (Array.isArray(wfmJob.Notes.Note)) {
                wfmJob.Notes.Note.forEach((wfmNote) => {
                  let note = {}
                  note.id = wfmNote.UUID
                  note.date = wfmNote.Date
                  note.createdBy = wfmNote.CreatedBy
                  note.text = wfmNote.Text
                  note.title = wfmNote.Title
                  note.comments = wfmNote.Comments
                  note.folder = wfmNote.Folder
                  job.notes.push(note)
                })
              } else {
                job.notes = [
                  {
                    id: wfmJob.Notes.Note.UUID,
                    date: wfmJob.Notes.Note.Date,
                    createdBy: wfmJob.Notes.Note.CreatedBy,
                    text: wfmJob.Notes.Note.Text,
                    title: wfmJob.Notes.Note.Title,
                    comments: wfmJob.Notes.Note.Comments,
                    folder: wfmJob.Notes.Note.Folder
                  }
                ]
              }
            }
            if (wfmJob.Assigned.Staff) {
              job.assigned = []
              if (Array.isArray(wfmJob.Assigned.Staff)) {
                wfmJob.Assigned.Staff.forEach((wfmAssigned) => {
                  let staff = {}
                  staff.id = wfmAssigned.UUID
                  staff.name = wfmAssigned.Name
                  job.assigned.push(staff)
                })
              } else {
                job.assigned = [
                  {
                    id: wfmJob.Assigned.Staff.UUID,
                    name: wfmJob.Assigned.Staff.Name
                  }
                ]
              }
            }
            if (createUid) {
              let uid = `${job.jobNumber.toUpperCase()}_${job.client.toUpperCase()}_${moment().format('x')}`.replace(/[.:/,\s]/g, '_')
              // console.log("New uid" + uid);
              dispatch({
                type: EDIT_MODAL_DOC,
                payload: { uid: uid }
              })
            }
            dispatch({
              type: GET_WFM_JOB,
              payload: job
            })
            dispatch({
              type: EDIT_MODAL_DOC,
              payload: job
            })
          }
        } else {
          console.log(data)
        }
      })
  }

export const resetWfmJob = () => (dispatch) => {
  dispatch({
    type: GET_WFM_JOB,
    payload: {}
  })
}

export const saveWFMItems = (items) => (dispatch) => {
  // console.log(Object.keys(items).length);
  var date = moment().format('YYYY-MM-DD')
  // //console.log(items);
  // Object.values(items).forEach(job => {
  //   Object.keys(job).forEach(val => {
  //     if (job[val] === undefined) {
  //       console.log(`Job: ${job.isJob}, Number: ${job.jobNumber}, Val: ${val}`);
  //     }
  //   })
  // })
  let leads1 = {}
  let leads2 = {}
  let jobs = {}

  let leadSwitch = true

  Object.values(items).forEach((item) => {
    if (item.isJob) jobs[item.wfmID] = item
    else if (leadSwitch) leads1[item.wfmID] = item
    else leads2[item.wfmID] = item
    leadSwitch = !leadSwitch
  })

  let batch = firestore.batch()
  batch.set(stateRef.doc('wfmstate').collection('jobStates').doc(date), jobs)
  batch.set(stateRef.doc('wfmstate').collection('leadStates1').doc(date), leads1)
  batch.set(stateRef.doc('wfmstate').collection('leadStates2').doc(date), leads2)
  batch.commit()
  dispatch({
    type: SAVE_WFM_ITEMS,
    payload: items
  })
}

export const saveStats = (stats) => (dispatch) => {
  var date = moment().format('YYYY-MM-DD')
  // //console.log(stats);
  // stateRef
  //   .doc("stats")
  //   .collection("clientsjobs")
  //   .doc(date)
  //   .set({ state: stats["clients"] });
  stateRef.doc('stats').collection('staffjobs').doc(date).set({ state: stats['staff'] })
  dispatch({
    type: SAVE_WFM_STATS,
    payload: stats
  })
}

export const getAddressFromClient = (clientID, wfmClients) => {
  var client = wfmClients.filter((client) => client.wfmID === clientID)
  if (client.length > 0) {
    var address = client[0].city === '' ? client[0].address : client[0].address + ', ' + client[0].city
    return address
  } else {
    return ''
  }
}

export const getWfmUrl = (m) => {
  var path
  if (m.isJob) {
    path = `https://my.workflowmax.com/job/jobview.aspx?id=${m.wfmID}`
  } else {
    path = `https://my.workflowmax.com/lead/view.aspx?id=${m.wfmID}`
  }
  return path
}

export const getWfmClientUrl = (m) => {
  return `https://practicemanager.xero.com/Client/${m.clientID}/Detail`
}

export const getGoogleMapsUrl = (m) => {
  if (m.geocode) return `https://www.google.com/maps/search/?api=1&query=${encodeURI(m.geocode.address)}&query_place_id=${m.geocode.place}`
  else return `https://www.google.com/maps/search/?api=1&query=${encodeURI(m.name)}`
}

export const sendTimeSheetToWFM = (taskData, taskID, that) => {
  // console.log(taskData);
  // console.log(taskID);
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  // Convert to XML
  let assignXML = `<Job><ID>${taskData.job}</ID><add uuid="${taskData.staff}" task-uuid="${taskID}" /></Job>`,
    timeXML = `<Timesheet><Job>${taskData.job}</Job><TaskUUID>${taskID}</TaskUUID><StaffUUID>${taskData.staff}</StaffUUID><Date>${taskData.day}</Date><Start>${taskData.startTime}</Start><End>${taskData.endTime}</End><Note>${taskData.note}</Note></Timesheet>`

  let assignParams = {
    method: 'POST',
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}job.api/assign`,
      params: {
        method: 'PUT',
        body: assignXML,
        headers: {
          Authorization: `Bearer ${taskData.accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID
        }
      }
    })
  }

  let timeParams = {
    method: 'POST',
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}time.api/add`,
      params: {
        method: 'POST',
        body: timeXML,
        headers: {
          Authorization: `Bearer ${taskData.accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID
        }
      }
    })
  }

  // console.log(assignParams);

  fetch(path, assignParams)
    .then((results) => {
      // console.log(results);
      return results.text()
    })
    .then((data) => {
      // console.log(data);
      var xmlDOM = new DOMParser().parseFromString(data, 'text/xml')
      // console.log(xmlDOM);
      var json = xmlToJson(xmlDOM)
      // console.log(json);
      if (json.Response && json.Response.Status === 'OK') {
        fetch(path, timeParams)
          .then((results) => results.text())
          .then((data) => {
            var json = xmlToJson(new DOMParser().parseFromString(data, 'text/xml'))
            console.log(json.Response)
            if (json.Response.Status === 'OK') {
              that.setState({
                status: 'Success'
              })
              // Show snack bar
            } else {
              // Post time sheet failed
              // console.log('Post time sheet failed');
            }
            // Show snack bar
          })
      } else {
        // Assign Failed
        // console.log('Assign Failed');
      }
    })
}

export const getTaskID = (taskData, that) => {
  let path = `${process.env.REACT_APP_API_ROOT}wfm/post_api.php?apiKey=${process.env.REACT_APP_API_KEY}`
  // console.log(taskData);
  let jobParams = {
    method: 'POST',
    body: JSON.stringify({
      path: `${process.env.REACT_APP_WFM_ROOT}job.api/get/${taskData.job.trim()}`,
      params: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${taskData.accessToken}`,
          'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
          Accept: 'application/json'
        }
      }
    })
  }

  // Get information about Job and read tasks list
  return fetch(path, jobParams)
    .then((results) => results.text())
    .then((data) => {
      var json = xmlToJson(new DOMParser().parseFromString(data, 'text/xml'))
      // console.log(json);
      if (json.Response.Status === 'OK') {
        // Check if task type is in the job. If it is, we will use that ID so the task isn't duplicated.
        let tasks = json.Response.Job.Tasks.Task
        let taskID = null
        // console.log(tasks);
        if (tasks !== undefined) {
          if (tasks instanceof Array) {
            // console.log('tasks instance of array');
            tasks.forEach((task) => {
              // console.log(task);
              if (task.TaskUUID === taskData.task) {
                taskID = task.UUID
                // console.log(task);
              }
            })
          } else if (tasks instanceof Object) {
            // console.log("tasks instance of object");
            if (tasks.TaskUUID === taskData.task) {
              taskID = tasks.UUID
              // console.log(tasks);
            }
          } else {
            tasks.forEach((task) => {
              // console.log(task);
              if (task.TaskUUID === taskData.task) {
                taskID = task.UUID
                // console.log(task);
              }
            })
          }
        }
        if (!taskID) {
          // console.log('Task ID not found');
          // Task type was not found in job, will need to be added first
          let taskXML = `<Task><Job>${taskData.job}</Job><TaskUUID>${taskData.task}</TaskUUID><EstimatedMinutes>${
            taskData.minutes ? taskData.minutes : 0
          }</EstimatedMinutes></Task>`

          let taskParams = {
            method: 'POST',
            body: JSON.stringify({
              path: `${process.env.REACT_APP_WFM_ROOT}job.api/task`,
              params: {
                method: 'POST',
                body: taskXML,
                headers: {
                  Authorization: `Bearer ${taskData.accessToken}`,
                  'xero-tenant-id': process.env.REACT_APP_XERO_TENANT_ID,
                  Accept: 'application/json'
                }
              }
            })
          }

          fetch(path, taskParams)
            .then((results) => results.text())
            .then((data) => {
              var json = xmlToJson(new DOMParser().parseFromString(data, 'text/xml'))
              if (json.Response.Status === 'OK') {
                // console.log(json.Response);
                sendTimeSheetToWFM(taskData, json.Response.UUID, that)
              } else {
                // console.log('Adding task failed.');
                return {
                  status: json.Response.Status,
                  text: json.Response.ErrorDescription
                }
              }
            })
        } else {
          sendTimeSheetToWFM(taskData, taskID, that)
        }
      } else {
        // console.log('job url failed');
        return {
          status: json.Response.Status,
          text: json.Response.ErrorDescription
        }
      }
    })
}

export const gotoWFM = (m) => {
  // //console.log("GoTO");
  var path
  if (m.isJob) {
    path = `https://my.workflowmax.com/job/jobview.aspx?id=${m.wfmID}`
  } else {
    path = `https://my.workflowmax.com/lead/view.aspx?id=${m.wfmID}`
  }
  var win = window.open(path, '_blank')
  win.focus()
}

export const checkAddress = (address, geocodes) => {
  if (address === '') return 'NULL'
  // if (address.trim().split(/\s+/).length < 2) return "NULL";

  var geo = geocodes[encodeURI(address)]

  // ignore all addresses that just return the country
  if (geo !== undefined && geo.address === 'New Zealand') {
    // console.log(address);
    return 'NULL'
  }

  // ignore all addresses with blackListed words
  var blacklist = [
    'acoustic',
    'air quality',
    'testing',
    'asbestos',
    'samples',
    'website',
    'query',
    'analysis',
    'pricing',
    'biological',
    'assessment',
    'dust',
    'monitoring',
    'lead',
    'asbetsos',
    'survey',
    'silica',
    'consulting',
    'biologial',
    'emission',
    'mould',
    'noise',
    'stack',
    'welding'
  ]

  var blackListed = false

  blacklist.forEach((w) => {
    if (address.toLowerCase().includes(w)) blackListed = true
  })

  if (blackListed) return 'NULL'

  return encodeURI(address)
}

export const getDefaultLetterAddress = (doc) => {
  // console.log(doc);
  if (doc) {
    if (doc.coverLetterAddress) return doc.coverLetterAddress
    if (!doc.contact && !doc.clientDetails) {
      return `${doc.client}\n${doc.address}`
    }
    let contact = doc.contact,
      client = doc.clientDetails,
      contactName = contact && (contact.name !== null || contact.name !== '') ? contact.name : null,
      contactPosition = contact && (contact.position !== null || contact.position !== '') ? contact.position : null,
      address = null,
      city = null,
      postcode = null

    if (client && client.postalAddress) {
      address = client.postalAddress
      city = client.postalCity
      if (address && city && address.toLowerCase().includes(city.toLowerCase())) city = null
      postcode = client.postalPostCode
      address = `${address ? address : ''}${city ? '\n' + city : ''}${postcode ? ' ' + postcode : ''}`
    } else if (client && client.address) {
      address = client.address
      city = client.city
      if (address && city && address.toLowerCase().includes(city.toLowerCase())) city = null
      postcode = client.postcode
      address = `${address ? address : ''}${city ? '\n' + city : ''}${postcode ? ' ' + postcode : ''}`
    } else {
      address = doc.address
    }

    // Don't add contact name if it is the same as the client name
    if (contactName) {
      let contactWords = contactName.split(' ')
      let contactInClientName = contactWords.length
      contactWords.forEach((word) => {
        if (doc.client.includes(word)) contactInClientName--
      })
      if (contactInClientName === 0) {
        contactName = null
        contactPosition = null
      }
    }

    let letterAddress = `${contactName ? contactName + '\n' : ''}${
      contactPosition ? contactPosition + '\n' : ''
    }${doc.client ? doc.client + '\n' : ''}${address ? address : ''}`
    return letterAddress.trim()
  } else {
    return ''
  }
}
