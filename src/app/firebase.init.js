// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx7GBeQhYcS0lJB2WaF_qmrLBVL2Dy4-M",
  authDomain: "e-bazar-8bfa2.firebaseapp.com",
  projectId: "e-bazar-8bfa2",
  storageBucket: "e-bazar-8bfa2.firebasestorage.app",
  messagingSenderId: "417987871053",
  appId: "1:417987871053:web:ed3987248ca16509e8f704"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);