import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZJ5Ci7okxUxR1IeN-_P9tO7uHxITasjg",
    authDomain: "clone-1c1d8.firebaseapp.com",
    projectId: "clone-1c1d8",
    storageBucket: "clone-1c1d8.appspot.com",
    messagingSenderId: "848599302612",
    appId: "1:848599302612:web:3a02b99731227e1bb01641"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } 