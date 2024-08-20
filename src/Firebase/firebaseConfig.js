// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoaCbNNQP7zuXNytSu5gp8TpEC14FoL6Q",
  authDomain: "nfquiz-99c8c.firebaseapp.com",
  projectId: "nfquiz-99c8c",
  storageBucket: "nfquiz-99c8c.appspot.com",
  messagingSenderId: "877847976232",
  appId: "1:877847976232:web:a981774e6eeeeca6fa181d",
  measurementId: "G-X9W6RKZC2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
export const db = getFirestore(app);
