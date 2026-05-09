// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmr1WH3-nlVHHQDoXkEPDALR11rdNjTF0",
  authDomain: "e-bazars.firebaseapp.com",
  projectId: "e-bazars",
  storageBucket: "e-bazars.firebasestorage.app",
  messagingSenderId: "996984238541",
  appId: "1:996984238541:web:4e579741cd2829655d5484",
  measurementId: "G-DNT7YQNG30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
