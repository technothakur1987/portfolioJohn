// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-wlYwCM48AYTcdaDqhid6uhp9tfztMJ0",
  authDomain: "portfolioassign-6710e.firebaseapp.com",
  projectId: "portfolioassign-6710e",
  storageBucket: "portfolioassign-6710e.appspot.com",
  messagingSenderId: "879204416583",
  appId: "1:879204416583:web:436f07ba277b675b7b8562",
  measurementId: "G-WCZLHB5W8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const fireDB = getFirestore(app);

export {auth,fireDB}