// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DM2toFhlAoQs-uS0YbnQefmVjWWZzOk",
  authDomain: "gestiondesstocks-27b54.firebaseapp.com",
  projectId: "gestiondesstocks-27b54",
  storageBucket: "gestiondesstocks-27b54.appspot.com",
  messagingSenderId: "194829220653",
  appId: "1:194829220653:web:fae60a7b2af8887cc731a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);