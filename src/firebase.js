// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZNnC0uucVbZHQJbg6DPgDadzVYnYj1A",
  authDomain: "books-3c9c1.firebaseapp.com",
  projectId: "books-3c9c1",
  storageBucket: "books-3c9c1.appspot.com",
  messagingSenderId: "857669816018",
  appId: "1:857669816018:web:1728c7c6bd5197a3da270b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app);
