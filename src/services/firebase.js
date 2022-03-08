// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "../store";
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
initializeApp(firebaseConfig);


onAuthStateChanged(getAuth(), async (user) => {
  const tokenResult = user
    ? await getAuth().currentUser.getIdTokenResult()
    : { claims: null };

  store.dispatch("fetchUser", { user, claims: tokenResult.claims });
});