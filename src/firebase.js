import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBnUz9mRlD8UP7F2lY_V3V1lRPmsR84vp4",
    authDomain: "todo-again-760dc.firebaseapp.com",
    databaseURL: "https://todo-again-760dc.firebaseio.com",
    projectId: "todo-again-760dc",
    storageBucket: "todo-again-760dc.appspot.com",
    messagingSenderId: "331789536461",
    appId: "1:331789536461:web:23451389c4dfd1567ded84",
    measurementId: "G-8CVRB9F9YB"
})

const db=firebaseApp.firestore()
const auth=firebase.auth()
export {db,auth} 