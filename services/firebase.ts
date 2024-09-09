// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxqASzWkUMqB34pmTOF-Y-55pJ4c0J8TI",
  authDomain: "brandsyncwaitlist.firebaseapp.com",
  projectId: "brandsyncwaitlist",
  storageBucket: "brandsyncwaitlist.appspot.com",
  messagingSenderId: "765302903956",
  appId: "1:765302903956:web:19518d77102a16a6a89081",
  measurementId: "G-3PC8W1F8RH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db }; // Ensure db is exported
