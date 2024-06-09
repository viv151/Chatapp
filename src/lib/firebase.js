
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-d34e2.firebaseapp.com",
  projectId: "react-chat-d34e2",
  storageBucket: "react-chat-d34e2.appspot.com",
  messagingSenderId: "747078835276",
  appId: "1:747078835276:web:4dcc1a89f21874811ca8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export so that we can use these on other pages
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()