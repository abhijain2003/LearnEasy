import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDcAxe7qsWvGTEpVXZTGA30DXPoBcEqNHo",
  authDomain: "learneasy-455b1.firebaseapp.com",
  projectId: "learneasy-455b1",
  storageBucket: "learneasy-455b1.appspot.com",
  messagingSenderId: "225974628140",
  appId: "1:225974628140:web:d5881918f4285a48ef0689",
  measurementId: "G-0RT848TYD5"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth, app }
