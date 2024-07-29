import {
  APP_HAS_LOADED,
  GET_FIRESTORE_COLLECTION,
  CAT_CHANGE,
  CLEAR_LOG,
  GET_AIR_ANALYSTS,
  GET_BULK_ANALYSTS,
  GET_ASSETS,
  GET_DOCUMENTS,
  GET_EDIT_STAFF,
  CLEAR_EDIT_STAFF,
  GET_HELP,
  GET_INCIDENTS,
  GET_LOGS,
  GET_ME,
  GET_METHODLOG,
  GET_METHODS,
  GET_NOTICES,
  GET_NOTICE_READS,
  GET_QUESTIONS,
  GET_QUIZZES,
  GET_QUIZLOG,
  GET_READINGLOG,
  GET_STAFF,
  GET_TOOLS,
  GET_TRAININGS,
  GET_UPDATES,
  GET_USER,
  GET_VEHICLES,
  RESET_LOCAL,
  SEARCH_CHANGE,
  SET_ANALYST,
  SET_STEPPER,
  UPDATE_STAFF
} from '../constants/action-types'
import moment from 'moment'

import momentbusinessdays from 'moment-business-days'
import momenttimezone from 'moment-timezone'
import momentbusinesstime from 'moment-business-time'
import {
  assetsRef,
  auth,
  docsRef,
  helpRef,
  incidentsRef,
  logsRef,
  methodsRef,
  noticesRef,
  questionsRef,
  quizzesRef,
  stateRef,
  toolsRef,
  trainingPathsRef,
  updateRef,
  usersRef,
  vehiclesRef,
  firestore
} from '../config/firebase'

export const resetLocal = () => (dispatch) => {
  dispatch({ type: RESET_LOCAL })
}

// General Function for retrieving firestore collections
export const getFirestoreCollection =
  ({ pathRef, statePath, actionType, update, orderBy, order, subscribe }) =>
  async (dispatch) => {
    if (update) {
      if (orderBy) {
        if (subscribe) {
          pathRef.orderBy(orderBy, order).onSnapshot((querySnapshot) => {
            var docs = []
            querySnapshot.forEach((doc) => {
              let ref = doc.data()
              ref.uid = doc.id
              docs.push(ref)
            })
            dispatch({
              type: actionType ? actionType : GET_FIRESTORE_COLLECTION,
              payload: docs,
              statePath,
              update: true
            })
          })
        } else {
          pathRef
            .orderBy(orderBy, order)
            .get()
            .then((querySnapshot) => {
              var docs = []
              querySnapshot.forEach((doc) => {
                let ref = doc.data()
                ref.uid = doc.id
                docs.push(ref)
              })
              dispatch({
                type: actionType ? actionType : GET_FIRESTORE_COLLECTION,
                payload: docs,
                statePath,
                update: true
              })
            })
        }
      } else {
        if (subscribe) {
          pathRef.onSnapshot((querySnapshot) => {
            var docs = []
            querySnapshot.forEach((doc) => {
              let ref = doc.data()
              ref.uid = doc.id
              docs.push(ref)
            })
            console.log(docs)
            dispatch({
              type: actionType ? actionType : GET_FIRESTORE_COLLECTION,
              payload: docs,
              statePath,
              update: true
            })
          })
        } else {
          pathRef.get().then((querySnapshot) => {
            var docs = []
            querySnapshot.forEach((doc) => {
              let ref = doc.data()
              ref.uid = doc.id
              docs.push(ref)
            })
            console.log(docs)
            dispatch({
              type: actionType ? actionType : GET_FIRESTORE_COLLECTION,
              payload: docs,
              statePath,
              update: true
            })
          })
        }
      }
    } else {
      stateRef
        .doc(statePath)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data())
            dispatch({
              type: actionType ? actionType : GET_FIRESTORE_COLLECTION,
              statePath,
              payload: doc.data().payload
            })
          } else {
            console.log("State document doesn't exist")
          }
        })
    }
  }

// Separate stream for just your information. So you don't re-read all staff for just changing your details.
export const fetchMe = () => async (dispatch) => {
  auth.currentUser &&
    usersRef.doc(auth.currentUser.uid).onSnapshot((doc) => {
      console.log('Read a doc (fetchMe)!')
      if (doc.exists) {
        let user = doc.data()
        user.uid = doc.id
        if (user.auth && user.auth['Asbestos Air Analysis']) {
          // dispatch({ type: GET_AIR_ANALYSTS, payload: [{uid: user.uid, name: user.name}] });
          dispatch({ type: SET_ANALYST, payload: user.name })
        }
        if (user.auth && user.auth['Asbestos Bulk Analysis']) {
          // dispatch({ type: GET_BULK_ANALYSTS, payload: [{uid: user.uid, name: user.name}] });
          dispatch({ type: SET_ANALYST, payload: user.name })
        }
        dispatch({ type: GET_ME, payload: user })
        dispatch({ type: APP_HAS_LOADED })
        // usersRef.doc(doc.id).collection("myjobs")
        //   .onSnapshot((querySnapshot) => {
        //     user.jobs = {};
        //     if (querySnapshot.size > 0) {
        //       querySnapshot.forEach((doc) => {
        //         //console.log("Read a doc (my job)!");
        //         let job = doc.data();
        //         job.uid = doc.id;
        //         user.jobs[doc.id] = job;
        //       });
        //       dispatch({ type: GET_ME, payload: user });
        //     }
        //     dispatch({ type: APP_HAS_LOADED });
        //   });
      }
    })
}

export const fetchStaff = (update) => async (dispatch) => {
  if (update) {
    // //console.log("Running fetch staff to update");
    var users = {}
    usersRef.get().then((querySnapshot) => {
      // //console.log(querySnapshot);
      let airAnalysts = []
      let bulkAnalysts = []
      querySnapshot.forEach((doc) => {
        // //console.log(doc.data());
        if (doc.data().key !== undefined) {
          // //console.log("Read a doc! " + doc.data().name);

          let user = doc.data()
          user.uid = doc.id
          users[doc.id] = user
          if (user.auth && user.auth['Asbestos Air Analysis']) airAnalysts.push({ uid: user.uid, name: user.name })
          if (user.auth && user.auth['Asbestos Bulk Analysis']) bulkAnalysts.push({ uid: user.uid, name: user.name })
        }
      })
      console.log(users)
      dispatch({ type: GET_STAFF, payload: users, update: true })
      dispatch({ type: GET_AIR_ANALYSTS, payload: airAnalysts, update: true })
      dispatch({
        type: GET_BULK_ANALYSTS,
        payload: bulkAnalysts,
        update: true
      })
    })
  } else {
    // //console.log("Fetching staff from cache");
    stateRef.doc('staff').onSnapshot((doc) => {
      if (doc.exists) {
        // .filter((m) => m.uid !== auth.currentUser.uid)
        let staffRead = {}
        Object.values(doc.data()).forEach((s) => {
          stateRef
            .doc('noticereads')
            .collection('users')
            .doc(s.uid)
            .get()
            .then((d) => {
              if (d.data()) staffRead[s.name] = d.data().payload.length
              else staffRead[s.name] = 0
            })
        })
        // console.log(staffRead);
        dispatch({ type: GET_STAFF, payload: doc.data() })
      } else {
        // //console.log("Doc doesn't exist");
      }
    })
    stateRef
      .doc('airAnalysts')
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: GET_AIR_ANALYSTS, payload: doc.data().payload })
        }
      })
    stateRef
      .doc('bulkAnalysts')
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: GET_BULK_ANALYSTS, payload: doc.data().payload })
        }
      })
  }
}

export const getUserAttrs = (userPath, editStaff) => async (dispatch) => {
  console.log('Calling get user attrs for ' + userPath)
  let user = {}
  auth.currentUser &&
    usersRef
      .doc(userPath)
      .collection('attr')
      .get()
      .then((querySnapshot) => {
        user = {
          attrs: {},
          aanumber: '',
          tertiary: '',
          ip402: '',
          nzqa: [],
          nzqatraining: 'None',
          firstaid: null,
          maskfit: '',
          docimages: []
        }
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            // //console.log("Read a doc (Attr)!");
            let attr = doc.data()
            attr.uid = doc.id
            user.attrs[doc.id] = attr
            if (attr.fileUrl) {
              user.docimages.push({
                type: attr.type,
                url: attr.fileUrl
              })
            }
            if (attr.type === 'NZQAUnitStandard' && attr.date) {
              if (attr.expiry) {
                if (new Date(attr.expiry) > new Date()) user.nzqa = user.nzqa.concat(attr.unit)
              } else {
                var expiry = new Date(attr.date)
                expiry.setFullYear(expiry.getFullYear() + 3)
                if (expiry > new Date()) user.nzqa = user.nzqa.concat(attr.unit)
              }
            }
            if (attr.type === 'Tertiary') user.tertiary = attr.abbrev
            if (attr.type === 'MaskFit') {
              if (new Date(attr.expiry) > new Date()) {
                user.maskfit = 'OK'
              } else {
                user.maskfit = 'Expired'
              }
            }
            if (attr.type === 'IP402') user.ip402 = true
            if (attr.type === 'AsbestosAssessor') user.aanumber = attr.number
            if (attr.type === 'FirstAid' && attr.date) {
              user.firstaid = 'Expired'
              if (attr.expiry) {
                if (new Date(attr.expiry) > new Date()) user.firstaid = 'OK'
              } else {
                var firstaidexpiry = new Date(attr.date)
                firstaidexpiry.setFullYear(firstaidexpiry.getFullYear() + 2)
                if (firstaidexpiry > new Date()) user.firstaid = 'OK'
              }
            }
          })
          if (user.nzqa) {
            let nzqalist = []
            if (user.nzqa.includes('23229') && user.nzqa.includes('17600') && user.nzqa.includes('25045')) {
              nzqalist.push('Height Training')
            }
            if (user.nzqa.includes('23960') && user.nzqa.includes('23962') && user.nzqa.includes('23966')) {
              nzqalist.push('Mobile Elevated Work Platforms')
            }
            if (user.nzqa.includes('17599') && user.nzqa.includes('18426') && user.nzqa.includes('25510')) {
              nzqalist.push('Confined Spaces')
            }
            user.nzqatraining = nzqalist.join(', ')
          }
          usersRef.doc(userPath).update({
            tertiary: user.tertiary,
            ip402: user.ip402,
            nzqa: user.nzqa,
            nzqatraining: user.nzqatraining,
            firstaid: user.firstaid,
            maskfit: user.maskfit,
            aanumber: user.aanumber,
            docimages: user.docimages
          })
          if (userPath === auth.currentUser.uid) {
            // //console.log("Updating user");
            // //console.log(user);
            dispatch({
              type: GET_ME,
              payload: user
            })
          }
          // //console.log("Updating other staff");
          // //console.log(user);
          dispatch({
            type: UPDATE_STAFF,
            userPath: userPath,
            payload: user
          })
          if (editStaff) {
            dispatch({
              type: GET_EDIT_STAFF,
              payload: user
            })
          }
        }
      })
}

export const getEditStaff = (userPath) => async (dispatch) => {
  console.log('Get edit staff')
  dispatch(getUserAttrs(userPath, true))
  auth.currentUser &&
    usersRef.doc(userPath).onSnapshot((doc) => {
      console.log(doc.data())
      dispatch({
        type: GET_EDIT_STAFF,
        payload: doc.data()
      })
    })
}

export const clearEditStaff = () => (dispatch) => {
  dispatch({
    type: CLEAR_EDIT_STAFF
  })
}

export const fetchDocuments = (update) => async (dispatch) => {
  if (update) {
    docsRef
      .orderBy('title')
      .get()
      .then((querySnapshot) => {
        var docs = []
        querySnapshot.forEach((doc) => {
          let ref = doc.data()
          ref.uid = doc.id
          docs.push(ref)
        })
        dispatch({
          type: GET_DOCUMENTS,
          payload: docs,
          update: true
        })
      })
  } else {
    stateRef
      .doc('documents')
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: GET_DOCUMENTS, payload: doc.data().payload })
        } else {
          //console.log("Documents doesn't exist");
        }
      })
  }
}

export const fetchMethods = (update) => async (dispatch) => {
  if (update) {
    methodsRef
      .orderBy('title')
      .get()
      .then((querySnapshot) => {
        var methods = []
        querySnapshot.forEach((doc) => {
          let method = doc.data()
          method.uid = doc.id
          methods.push(method)
        })
        dispatch({
          type: GET_METHODS,
          payload: methods,
          update: true
        })
      })
  } else {
    stateRef
      .doc('methods')
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: GET_METHODS, payload: doc.data().payload })
        } else {
          //console.log("Methods doesn't exist");
        }
      })
  }
}

export const fetchNotices = (update) => async (dispatch) => {
  if (update) {
    noticesRef
      .orderBy('date', 'desc')
      // .limit(200)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot)
        var notices = []
        querySnapshot.forEach((doc) => {
          let notice = doc.data()
          notice.uid = doc.id
          notices.push(notice)
        })
        dispatch({
          type: GET_NOTICES,
          payload: notices,
          update: true
        })
      })
  } else {
    stateRef.doc('notices').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_NOTICES, payload: doc.data().payload })
      } else {
        //console.log("Notices doesn't exist");
      }
    })
  }
}

export const removeNoticeReads = async (notice, reads) => {
  stateRef
    .doc('noticereads')
    .collection('notices')
    .doc(notice.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        doc.data().payload.forEach((user) => {
          let userArray = []
          // console.log(user);
          stateRef
            .doc('noticereads')
            .collection('users')
            .doc(user)
            .get()
            .then((doc) => {
              if (doc.exists && doc.data() && doc.data().payload) userArray = doc.data().payload.filter((uid) => uid !== notice.uid)
              // console.log(userArray);
              stateRef.doc('noticereads').collection('users').doc(user).set({ payload: userArray })
              // batch.set(stateRef.doc("noticereads").collection("users").doc(user), { payload: userArray });
            })
        })
      }
      // console.log('commiting');
      stateRef.doc('noticereads').collection('notices').doc(notice.uid).delete()
      // batch.commit();
    })
}

export const readNotice = (notice, me, reads) => {
  let userArray = []
  let batch = firestore.batch()
  let noticeArray = []

  // console.log(reads);

  if (reads) userArray = [...reads]
  // console.log(userArray);

  stateRef
    .doc('noticereads')
    .collection('notices')
    .doc(notice.uid)
    .get()
    .then((doc) => {
      if (doc.exists) noticeArray = [...doc.data().payload]
      if (userArray.includes(notice.uid)) {
        // Remove read notice
        userArray = userArray.filter((uid) => uid !== notice.uid)
        noticeArray = noticeArray.filter((uid) => uid !== me.uid)
      } else {
        // Add to read notices
        userArray.push(notice.uid)
        noticeArray.push(me.uid)
      }
      batch.set(stateRef.doc('noticereads').collection('users').doc(me.uid), {
        payload: userArray
      })
      batch.set(stateRef.doc('noticereads').collection('notices').doc(notice.uid), { payload: noticeArray })
      // stateRef.doc("noticereads").collection("users").doc(me.uid).set({ payload: userArray });
      // stateRef.doc("noticereads").collection("notices").doc(notice.uid).set({ payload: noticeArray });
      // console.log('commiting');
      batch.commit()
    })
}

export const fetchNoticeReads = (update) => async (dispatch) => {
  stateRef
    .doc('noticereads')
    .collection('users')
    .doc(auth.currentUser.uid)
    .onSnapshot((doc) => {
      dispatch({
        type: GET_NOTICE_READS,
        payload: doc.exists ? doc.data().payload : []
      })
    })
}

export const fetchIncidents = (update) => async (dispatch) => {
  if (update) {
    incidentsRef
      // .orderBy("date", "desc")
      // .limit(100)
      .get()
      .then((querySnapshot) => {
        var incidents = []
        querySnapshot.forEach((doc) => {
          let incident = doc.data()
          incident.uid = doc.id
          incidents.push(incident)
        })
        dispatch({
          type: GET_INCIDENTS,
          payload: incidents,
          update: true
        })
      })
  } else {
    stateRef.doc('incidents').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_INCIDENTS, payload: doc.data().payload })
      } else {
        //console.log("Incidents doesn't exist");
      }
    })
  }
}

export const fetchQuestions = (update) => async (dispatch) => {
  if (update) {
    questionsRef
      .orderBy('question')
      .get()
      .then((querySnapshot) => {
        var questions = []
        querySnapshot.forEach((doc) => {
          let question = doc.data()
          question.uid = doc.id
          questions.push(question)
        })
        dispatch({
          type: GET_QUESTIONS,
          payload: questions,
          update: true
        })
      })
  } else {
    stateRef.doc('questions').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_QUESTIONS, payload: doc.data().payload })
      } else {
        //console.log("Questions doesn't exist");
      }
    })
  }
}

export const fetchQuizzes = (update) => async (dispatch) => {
  if (update) {
    quizzesRef
      .orderBy('title')
      .get()
      .then((querySnapshot) => {
        var quizzes = []
        querySnapshot.forEach((doc) => {
          let quiz = doc.data()
          quiz.uid = doc.id
          quizzes.push(quiz)
        })
        dispatch({
          type: GET_QUIZZES,
          payload: quizzes,
          update: true
        })
      })
  } else {
    stateRef.doc('quizzes').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_QUIZZES, payload: doc.data().payload })
      } else {
        //console.log("Quizzes doesn't exist");
      }
    })
  }
}

export const fetchTools = (update) => async (dispatch) => {
  if (update) {
    toolsRef
      .orderBy('title')
      .get()
      .then((querySnapshot) => {
        var tools = []
        querySnapshot.forEach((doc) => {
          let tool = doc.data()
          tool.uid = doc.id
          tools.push(tool)
        })
        dispatch({
          type: GET_TOOLS,
          payload: tools,
          update: true
        })
      })
  } else {
    stateRef.doc('tools').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_TOOLS, payload: doc.data().payload })
      } else {
        //console.log("Tools doesn't exist");
      }
    })
  }
}

export const fetchTrainingPaths = (update) => async (dispatch) => {
  if (update) {
    trainingPathsRef
      .orderBy('title')
      .get()
      .then((querySnapshot) => {
        var trainings = []
        querySnapshot.forEach((doc) => {
          let training = doc.data()
          training.uid = doc.id
          trainings.push(training)
        })
        dispatch({
          type: GET_TRAININGS,
          payload: trainings,
          update: true
        })
      })
  } else {
    stateRef.doc('trainings').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_TRAININGS, payload: doc.data().payload })
      } else {
        //console.log("Trainings doesn't exist");
      }
    })
  }
}

export const fetchVehicles = (update) => async (dispatch) => {
  if (update) {
    vehiclesRef.get().then((querySnapshot) => {
      var vehicles = []
      querySnapshot.forEach((doc) => {
        var vehicle = doc.data()
        vehicle.number = doc.id
        vehicles.push(vehicle)
      })
      dispatch({
        type: GET_VEHICLES,
        payload: vehicles,
        update: true
      })
    })
  } else {
    stateRef.doc('vehicles').onSnapshot((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_VEHICLES, payload: doc.data().payload })
      } else {
        //console.log("Vehicles doesn't exist");
      }
    })
  }
}

export const fetchAssets = (update) => async (dispatch) => {
  if (update) {
    assetsRef.get().then((querySnapshot) => {
      var assets = []
      querySnapshot.forEach((doc) => {
        assets.push(doc.data())
      })
      dispatch({
        type: GET_ASSETS,
        payload: assets,
        update: true
      })
    })
  } else {
    stateRef.doc('assets').onSnapshot((doc) => {
      if (doc.exists) {
        let assets = []
        Object.keys(doc.data()).forEach((bucket) => {
          assets.push(...doc.data()[bucket])
        })
        dispatch({ type: GET_ASSETS, payload: assets })
      } else {
        //console.log("Assets doesn't exist");
      }
    })
  }
}

export const fetchReadingLog = () => async (dispatch) => {
  usersRef
    .doc(auth.currentUser.uid)
    .collection('readinglog')
    .orderBy('date', 'desc')
    .get()
    .then((querySnapshot) => {
      var logs = []
      querySnapshot.forEach((doc) => {
        let log = doc.data()
        //console.log(log);
        log.uid = doc.id
        docsRef
          .doc(doc.id)
          .get()
          .then((doc2) => {
            log.title = doc2.data().title
            log.updatedate = doc2.data().updatedate ? doc2.data().updatedate : doc2.data().date
            logs.push(log)
            //console.log(log);
            dispatch({
              type: GET_READINGLOG,
              payload: logs
            })
          })
      })
    })
}

export const fetchQuizLog = () => async (dispatch) => {
  usersRef
    .doc(auth.currentUser.uid)
    .collection('quizlog')
    .orderBy('latestSubmit', 'desc')
    .get()
    .then((querySnapshot) => {
      var logs = []
      querySnapshot.forEach((doc) => {
        let log = doc.data()
        log.uid = doc.id
        quizzesRef
          .doc(doc.id)
          .get()
          .then((doc2) => {
            if (doc2.exists) {
              log.title = doc2.data().title
              logs.push(log)
              dispatch({
                type: GET_QUIZLOG,
                payload: logs
              })
            } else {
              usersRef.doc(auth.currentUser.uid).collection('quizlog').doc(doc.id).delete()
            }
          })
      })
    })
}

export const fetchMethodLog = () => async (dispatch) => {
  usersRef
    .doc(auth.currentUser.uid)
    .collection('methodlog')
    .orderBy('methodCompleted', 'desc')
    .get()
    .then((querySnapshot) => {
      var logs = []
      querySnapshot.forEach((doc) => {
        let log = doc.data()
        log.uid = doc.id
        methodsRef
          .doc(doc.id)
          .get()
          .then((doc2) => {
            if (doc2.exists) {
              log.title = doc2.data().title
              log.subtitle = doc2.data().subtitle
              log.sectionlength = doc2.data().sections.length
              log.updatedate = doc2.data().updateDate
              logs.push(log)
            } else {
              usersRef.doc(auth.currentUser.uid).collection('methodlog').doc(doc.id).delete()
            }
          })
      })
      dispatch({
        type: GET_METHODLOG,
        payload: logs
      })
    })
}

export const fetchHelp = () => async (dispatch) => {
  helpRef
    .orderBy('date', 'desc')
    .get()
    .then((querySnapshot) => {
      var helps = []
      querySnapshot.forEach((doc) => {
        helps.push(doc.data())
      })
      dispatch({
        type: GET_HELP,
        payload: helps
      })
    })
}

export const fetchUpdates = () => async (dispatch) => {
  updateRef
    .orderBy('date', 'desc')
    .get()
    .then((querySnapshot) => {
      var updates = []
      querySnapshot.forEach((doc) => {
        updates.push(doc.data())
      })
      dispatch({
        type: GET_UPDATES,
        payload: updates
      })
    })
}

export const getUser = (userRef) => async (dispatch) => {
  usersRef
    .doc(userRef)
    .get()
    .then((doc) => {
      dispatch({
        type: GET_USER,
        payload: doc.data()
      })
    })
}

export const onSearchChange = (value) => (dispatch) => {
  dispatch({
    type: SEARCH_CHANGE,
    payload: value
  })
}

export const onCatChange = (value) => (dispatch) => {
  dispatch({
    type: CAT_CHANGE,
    payload: value
  })
}

export const setStepper = (steppers, uid, step) => (dispatch) => {
  steppers[uid] = step
  dispatch({
    type: SET_STEPPER,
    payload: steppers
  })
}

export const copyStaff = (oldId, newId) => (dispatch) => {
  usersRef
    .doc(oldId)
    .get()
    .then((doc) => {
      usersRef.doc(newId).set(doc.data())
    })
  usersRef
    .doc(oldId)
    .collection('attr')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        usersRef.doc(newId).collection('attr').doc(doc.id).set(doc.data())
      })
    })
  usersRef
    .doc(oldId)
    .collection('readinglog')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        usersRef.doc(newId).collection('readinglog').doc(doc.id).set(doc.data())
      })
    })
  usersRef
    .doc(oldId)
    .collection('quizlog')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        usersRef.doc(newId).collection('quizlog').doc(doc.id).set(doc.data())
      })
    })
  usersRef
    .doc(oldId)
    .collection('myjobs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        usersRef.doc(newId).collection('myjobs').doc(doc.id).set(doc.data())
      })
    })
}

export const addLog = (collection, log, user, batch) => {
  let uid = moment().format('YYYY-MMM-DD-HH-mm-ss') + parseInt(Math.floor(Math.random() * Math.floor(1000)))
  if (user === undefined) user = { uid: '', name: 'Mystery Person' }
  log = {
    ...log,
    date: new Date(),
    user: user.uid,
    userName: user.name
  }

  // //console.log('Adding Log');
  // //console.log(log);
  if (batch) batch.set(logsRef.collection(collection).doc(uid), log)
  else logsRef.collection(collection).doc(uid).set(log)
}

export const fetchLogs = (collection, filter, filterValue, limit) => async (dispatch) => {
  logsRef
    .collection(collection)
    .where(filter, '==', filterValue)
    .orderBy('date', 'desc')
    .limit(limit)
    .get()
    .then((querySnapshot) => {
      var logs = []
      querySnapshot.forEach((doc) => {
        let log = doc.data()
        log.uid = doc.id
        logs.push(log)
      })
      dispatch({
        type: GET_LOGS,
        payload: logs
      })
    })
}

export const clearLog = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOG
  })
}

export const getEmailSignature = (user) => {
  let officePhone = '+64 3 384 8966'
  if (user.office === 'Auckland' || user.office === 'Hamilton') officePhone = '+64 9 275 1261'
  let logo = `<img style='text-align: "left";' height='38px' width='128px' src="https://www.k2.co.nz/wp-content/uploads/2019/01/email_logos.png" alt="IANZ/OHSAS">`
  if (user.office !== 'Christchurch')
    logo = `<img style='text-align: "left";' height='38px' width='128px' src="https://www.k2.co.nz/wp-content/uploads/2019/11/email_logos_non_chch.png" alt="IANZ">`
  let addresses = {
    Auckland: `Unit 23, 203 Kirkbride Road,<br />Airport Oaks, <b>Auckland</b> 2022`,
    Wellington: `5/408 Hutt Road, Alicetown,<br /><b>Lower Hutt</b> 5010`,
    Hamilton: `37 Lake Road, Frankton<br /><b>Hamilton</b> 3204`,
    ChristchurchPostal: `PO Box 28147,<br /> Beckenham,<br /><b>Christchurch</b> 8242`,
    ChristchurchPhysical: `Unit 24,<br />105 Bamford Street,<br />Woolston, <b>Christchurch</b>`
  }
  let address = ''
  if (user.office === 'Christchurch')
    address = `<tr>
    <td colspan=3 style='vertical-align: top; white-space: nowrap'>
      <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
          ${addresses.ChristchurchPostal}
      </span>
    </td>
    <td colspan=2 style='vertical-align: top; white-space: nowrap'>
      <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
          ${addresses.ChristchurchPhysical}<br/>${logo}
      </span>
    </td>
  </tr>`
  else
    address = `<tr>
    <td colspan=3 style='vertical-align: top; white-space: nowrap'>
      <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
          ${addresses[user.office]}
      </span>
    </td>
    <td colspan=2 style='vertical-align: top; white-space: nowrap'>
      <span>${logo}</span>
    </td>
  </tr>`
  let addressChristchurch = `<tr>
    <td colspan=3 style='vertical-align: top; white-space: nowrap'>
      <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
          PO Box 28147,<br /> Beckenham,<br /><b>Christchurch</b> 8242
      </span>
    </td>
    <td colspan=2 style='vertical-align: top; white-space: nowrap'>
      <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
          Unit 24,<br />105 Bamford Street,<br />Woolston, <b>Christchurch</b><br/>${logo}
      </span>
    </td>
  </tr>`

  return `<table border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse' width=300 bgcolor="#FFF">
        <tr>
          <td width=15% style='vertical-align: center'>
            <img width='50px' height='50px' src="https://www.k2.co.nz/wp-content/uploads/2017/12/Logo-flat-icon.png" alt="K2">
          </td>
          <td colspan=4 style='vertical-align: top; white-space: nowrap'>
            <span style='color: #006D44; font-family: Calibri, Arial, Sans Serif; font-size: medium; font-weight: bold'>${
              user.name
            }</span><br />
            <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'><i>${user.jobdescription}</i><br />
            <b>K2 Environmental Ltd</b></span>
          </td>
        </tr>
        <tr>
          <td colspan=5 style='vertical-align: top'>
            <hr noshade size=2 />
          </td>
        </tr>
        <tr>
          <td colspan=3 style='vertical-align: bottom; white-space: nowrap'>
            <span style='color: #FF2D00; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>T</span>
            <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>${officePhone}</span><br />
            <span style='color: #FF2D00; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>E</span>
            <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
              <a href="mailto:${
                user.email
              }" onMouseOver="this.style.color='#FF2D00'" onMouseOut="this.style.color='#D32500'" style="color:#FFA28E; ">${user.email}</a>
            </span><br />
          </td>
          <td colspan=2 style='vertical-align: bottom; white-space: nowrap'>
            ${
              user.workphone &&
              `<span style='color: #FF2D00; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>M</span>
            <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>${user.workphone}</span><br />`
            }
            <span style='color: #FF2D00; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>W</span>
            <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: small'>
              <a href="https://www.k2.co.nz" onMouseOver="this.style.color='#FF2D00'" onMouseOut="this.style.color='#D32500'" style="color:#FFA28E; ">www.k2.co.nz</a>
            </span><br />
          </td>
        </tr>
        ${address}
        <tr>
          <td colspan=5 style='vertical-align: top'>
            <hr noshade size=2 />
          </td>
        </tr>
        <tr>
          <td colspan=2 width=25% style='vertical-align: top; white-space: nowrap; padding-right: 20px '>
            <span style='color: #006D44; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>Christchurch</span><br />
              <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: x-small'>03 384 8966</span>
          </td>
          <td width=25% style='vertical-align: top; white-space: nowrap; padding-right: 20px'>
            <span style='color: #006D44; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>Auckland</span><br />
              <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: x-small'>09 275 1261</span>
          </td>
          <td width=25% style='vertical-align: top; white-space: nowrap; padding-right: 20px'>
            <span style='color: #006D44; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>Wellington</span><br />
              <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: x-small'>027 533 7872</span>
          </td>
          <td width=25% style='vertical-align: top; white-space: nowrap; padding-right: 20px'>
            <span style='color: #006D44; font-family: Calibri, Arial, Sans Serif; font-weight: bold; font-size: small'>Hamilton</span><br />
              <span style='color: #000; font-family: Calibri, Arial, Sans Serif; font-size: x-small'>027 233 7874</span>
          </td>
        </tr>
      </table>`
}
