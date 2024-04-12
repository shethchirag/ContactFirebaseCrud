// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7-gwXeAqlghnPVsqy6mBCBXyoWRtqriY",
  authDomain: "vite-contact-f41bc.firebaseapp.com",
  projectId: "vite-contact-f41bc",
  storageBucket: "vite-contact-f41bc.appspot.com",
  messagingSenderId: "471083454081",
  appId: "1:471083454081:web:0881cef09144e480880780",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
