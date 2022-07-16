// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeiAD7MlMbvY2FXXU0Hr4CPXrC7HdxcN4",
  authDomain: "crwn-clothing-db-12fdf.firebaseapp.com",
  projectId: "crwn-clothing-db-12fdf",
  storageBucket: "crwn-clothing-db-12fdf.appspot.com",
  messagingSenderId: "1091515763042",
  appId: "1:1091515763042:web:73f2fdc5d12a782547843b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);