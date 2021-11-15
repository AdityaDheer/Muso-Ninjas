import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCnoOFVNysIcJvZ0qEwAnhNab-NK3zM0as",
    authDomain: "muso-ninjas-10513.firebaseapp.com",
    projectId: "muso-ninjas-10513",
    storageBucket: "muso-ninjas-10513.appspot.com",
    messagingSenderId: "25631723924",
    appId: "1:25631723924:web:d86f2111922f7ec093bf81"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }