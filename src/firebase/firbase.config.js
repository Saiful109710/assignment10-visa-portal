// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnXxcX7dUErJfFNYGSsF52xLTHehYh7F0",
  authDomain: "fir-learning-project-f489b.firebaseapp.com",
  projectId: "fir-learning-project-f489b",
  storageBucket: "fir-learning-project-f489b.firebasestorage.app",
  messagingSenderId: "519341684467",
  appId: "1:519341684467:web:90bdc34fc0f1e8ff94a986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
