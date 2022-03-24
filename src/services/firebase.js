// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
 import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite';
 import store from "../store";
// import "firebase/compat/storage";
// require("firebase/compat/firestore");
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
require('firebase/compat/firestore');
require ('firebase/compat/storage');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzpXL9iUr6QCb71aB5DsAQ9KnFpI1Ow1w",
  authDomain: "golden-ball-1531f.firebaseapp.com",
  projectId: "golden-ball-1531f",
  storageBucket: "golden-ball-1531f.appspot.com",
  messagingSenderId: "520383113394",
  appId: "1:520383113394:web:acfd6052d49cf776ebc1ab",
  measurementId: "G-J54K8T60DY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();




onAuthStateChanged(getAuth(), async (user) => {
  const tokenResult = user
    ? await getAuth().currentUser.getIdTokenResult()
    : { claims: null };

  store.dispatch("fetchUser", { user, claims: tokenResult.claims });
});

export { fb, db }