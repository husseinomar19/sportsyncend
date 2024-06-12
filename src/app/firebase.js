// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGow9VBdJWZBQffVf_iTmXV9z6KjDOOY",
  authDomain: "sportsync-a55cc.firebaseapp.com",
  projectId: "sportsync-a55cc",
  storageBucket: "sportsync-a55cc.appspot.com",
  messagingSenderId: "594984564859",
  appId: "1:594984564859:web:0db1c55dbaec5c2836cade",
  measurementId: "G-L7D6S3FKQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();
import { signInWithPopup } from "firebase/auth";
export const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};