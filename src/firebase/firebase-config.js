import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
if (process.env.NODE_ENV === "test") {
  // TESTING
  // firebase.initializeApp(firebaseConfigTesting);
} else {
  // PRODUCTION
  // firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
