// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3nwxvOwD6vMueaaSsp0ywp7aH3wHK5KU",
    authDomain: "dep13-tdl-jquery-fb-app.firebaseapp.com",
    projectId: "dep13-tdl-jquery-fb-app",
    storageBucket: "dep13-tdl-jquery-fb-app.firebasestorage.app",
    messagingSenderId: "847367566344",
    appId: "1:847367566344:web:3b60f6d8b3dbcd1cdc4dbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);