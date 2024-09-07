import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQ4fSDx78mvRZ3SxVEJ63BPC1NRAlWQIU",
  authDomain: "nwitter-reloaded-e02a7.firebaseapp.com",
  projectId: "nwitter-reloaded-e02a7",
  storageBucket: "nwitter-reloaded-e02a7.appspot.com",
  messagingSenderId: "259222189347",
  appId: "1:259222189347:web:bca534582f837ffcbc4896",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
