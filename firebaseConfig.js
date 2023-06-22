import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5IQq-jB0XHH1ZMaDzdNCesCGu8B6UQp0",
  authDomain: "walletapp-c6d88.firebaseapp.com",
  projectId: "walletapp-c6d88",
  storageBucket: "walletapp-c6d88.appspot.com",
  messagingSenderId: "403808692422",
  appId: "1:403808692422:web:d04c5dc691e4e80ffb4fc7",
  measurementId: "G-L2SMKLBP1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, auth }
