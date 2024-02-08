// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3eeae.firebaseapp.com",
  projectId: "real-estate-3eeae",
  storageBucket: "real-estate-3eeae.appspot.com",
  messagingSenderId: "1044365286046",
  appId: "1:1044365286046:web:98c3886d4b7fafa1dfb98f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);