
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-99a50.firebaseapp.com",
  projectId: "react-chat-99a50",
  storageBucket: "react-chat-99a50.appspot.com",
  messagingSenderId: "261620058885",
  appId: "1:261620058885:web:5a195469468ceaa3ae856c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export so that we can use these on other pages
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()