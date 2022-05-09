// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_W2C-acwiBnwgVB2v7s-TFzUJM4C4rg",
  authDomain: "ecommerce-coder-6986f.firebaseapp.com",
  projectId: "ecommerce-coder-6986f",
  storageBucket: "ecommerce-coder-6986f.appspot.com",
  messagingSenderId: "569864041315",
  appId: "1:569864041315:web:40f9457dd7433f4eeb5956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db