import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_GOOGLE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRESTORE_GOOGLE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRESTORE_GOOGLE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_GOOGLE_SENDER_ID
}

const app = firebase.initializeApp(FirebaseConfig)
var p = new firebase.auth.GoogleAuthProvider()
p.setCustomParameters({
  prompt: 'select_account'
})
p.addScope('https://www.googleapis.com/auth/calendar')

const firestore = firebase.firestore()

const provider = p
const auth = firebase.auth()
const storage = firebase.storage()

const appSettingsRef = firestore.collection('appsettings')
const asbestosSampleIssueLogRef = firestore.collection('lab').doc('asbestos').collection('sampleIssueLog')
const asbestosCheckLogRef = firestore.collection('lab').doc('asbestos').collection('checkLog')
const asbestosMicroscopeCalibrationsRef = firestore.collection('lab').doc('asbestos').collection('microscopeCalibrations')
const authRef = firestore.collection('appsettings').doc('auth')
const constRef = firestore.collection('appsettings').doc('constants')
const docsRef = firestore.collection('documents')
const jobsRef = firestore.collection('jobs')
const noticesRef = firestore.collection('notices')
const incidentsRef = firestore.collection('incidents')
const noticeReadsRef = firestore.collection('noticereads')
const stateRef = firestore.collection('state')
const updateRef = firestore.collection('updates')
const usersRef = firestore.collection('users')

const asbestosSamplesRef = firestore.collection('lab').doc('asbestos').collection('samples')
const asbestosAnalysisLogRef = firestore.collection('lab').doc('asbestos').collection('analysisLog')
const asbestosSampleLogRef = firestore.collection('lab').doc('asbestos').collection('sampleLog')
const logsRef = firestore.collection('logs').doc('logs')
const cocsRef = firestore.collection('lab').doc('asbestos').collection('cocs')

// Test collections
// const asbestosAnalysisLogRef = firestore.collection("test_lab").doc("asbestos").collection("analysis");
// const asbestosSamplesRef = firestore.collection("test_lab").doc("asbestos").collection("samples");
// const asbestosSampleLogRef = firestore.collection("test_lab").doc("asbestos").collection("sampleLog");
// const cocsRef = firestore.collection("test_lab").doc("asbestos").collection("cocs");
// const logsRef = firestore.collection("test_logs").doc("logs");

export {
  app, appSettingsRef, asbestosAnalysisLogRef,
  asbestosCheckLogRef,
  asbestosMicroscopeCalibrationsRef, asbestosSampleIssueLogRef, asbestosSampleLogRef, asbestosSamplesRef, auth, authRef,
  cocsRef,
  constRef, docsRef, firebase, firestore, incidentsRef, jobsRef,
  logsRef, noticeReadsRef, noticesRef, provider, stateRef, storage, updateRef,
  usersRef
}
export default firebase
