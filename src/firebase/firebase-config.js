import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8t_8wTm64T8UAc_dJjbT_YAVlzVgvyUI",
  authDomain: "journal-app-react-redux.firebaseapp.com",
  projectId: "journal-app-react-redux",
  storageBucket: "journal-app-react-redux.appspot.com",
  messagingSenderId: "1025993761594",
  appId: "1:1025993761594:web:84b1a35b1618c8438aa603",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
