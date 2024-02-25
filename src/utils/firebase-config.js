// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPoBQ27E3HbIN8Ue68MEtE3apsV_tx9RE",
  authDomain: "react-netflix-clone-4538d.firebaseapp.com",
  projectId: "react-netflix-clone-4538d",
  storageBucket: "react-netflix-clone-4538d.appspot.com",
  messagingSenderId: "491861774918",
  appId: "1:491861774918:web:1e67be8dc0649ccd5df047",
  measurementId: "G-NZHNXKLTPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);