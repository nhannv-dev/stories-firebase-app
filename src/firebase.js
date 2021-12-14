import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv2DJ5QuI_pIagOCrMYy8CzGMf0C1GO_c",
  authDomain: "stories-firebase-app-4e7b9.firebaseapp.com",
  projectId: "stories-firebase-app-4e7b9",
  storageBucket: "stories-firebase-app-4e7b9.appspot.com",
  messagingSenderId: "301937476978",
  appId: "1:301937476978:web:a8ca56329fc6e1541009eb",
  measurementId: "G-LBB603ZQVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
