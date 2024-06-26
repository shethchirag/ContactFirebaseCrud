// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH,
  projectId: "vite-contact-f41bc",
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUKET,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
