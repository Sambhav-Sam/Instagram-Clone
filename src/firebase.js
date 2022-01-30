import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUvrASNJSiW3E4wPhFIvz-1x6qGzL5qT8",
    authDomain: "instagram-25b55.firebaseapp.com",
    projectId: "instagram-25b55",
    storageBucket: "instagram-25b55.appspot.com",
    messagingSenderId: "933686578364",
    appId: "1:933686578364:web:cc7e7bb78779cc368ad4b9",
    measurementId: "G-T8J38NRXSM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };