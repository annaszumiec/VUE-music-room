import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQ4Ryvt8k-wLYkr-zbREagkMEjNe_JZls",
    authDomain: "musicroom-221db.firebaseapp.com",
    projectId: "musicroom-221db",
    storageBucket: "musicroom-221db.appspot.com",
    messagingSenderId: "785384360733",
    appId: "1:785384360733:web:e75df64a41ec997d912ff4"
};

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }