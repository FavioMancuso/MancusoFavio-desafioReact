// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwweTuxTndMI0rMoSV5SQRB6KGU6tV_ts",
  authDomain: "appleworld-react.firebaseapp.com",
  projectId: "appleworld-react",
  storageBucket: "appleworld-react.appspot.com",
  messagingSenderId: "944507581077",
  appId: "1:944507581077:web:ac57f10348bf964f7b219c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);