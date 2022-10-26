// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKsMVxSudMNIysoE5_TBOA0s96UlBnyec",
  authDomain: "nwitter-c5be9.firebaseapp.com",
  projectId: "nwitter-c5be9",
  storageBucket: "nwitter-c5be9.appspot.com",
  messagingSenderId: "905873797248",
  appId: "1:905873797248:web:c69465ff791879bdfef665",
  measurementId: "G-C8M0ZQRE2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {fireStroe};