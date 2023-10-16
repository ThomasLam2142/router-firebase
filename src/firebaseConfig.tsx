// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5TExeBRqGgyo-F7qJ3OnkYkft3KiumWo",
  authDomain: "router-fire-bfd4a.firebaseapp.com",
  projectId: "router-fire-bfd4a",
  storageBucket: "router-fire-bfd4a.appspot.com",
  messagingSenderId: "224900441404",
  appId: "1:224900441404:web:b8426c989f055ff23c2a39",
  measurementId: "G-ZP0ZR1DNM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
