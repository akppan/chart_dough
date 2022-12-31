// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

var db = getDatabase(app);

export default db;