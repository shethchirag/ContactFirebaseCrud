// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8L-Y4d6hsimfvFtWgKbeEmoQxodn3NE",
  authDomain: "vite-contact-95a04.firebaseapp.com",
  projectId: "vite-contact-95a04",
  storageBucket: "vite-contact-95a04.appspot.com",
  messagingSenderId: "767956101728",
  appId: "1:767956101728:web:d1684ebd77c59a5c8c7105",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
