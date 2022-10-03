// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDn4UDAIlaP73Tw54Z9Saai2-vOTUCZymg",
  authDomain: "drive-92b40.firebaseapp.com",
  projectId: "drive-92b40",
  storageBucket: "drive-92b40.appspot.com",
  messagingSenderId: "769569436059",
  appId: "1:769569436059:web:1077e3dca4d7f84359313e",
  measurementId: "G-DZKQ7LRP76",
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default db;
export { auth, storage, provider };
