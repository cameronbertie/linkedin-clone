import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAKo0TqkZkFP00oFKY37mxnGRqJw4yOi6g",
  authDomain: "linkedin-clone-e3755.firebaseapp.com",
  projectId: "linkedin-clone-e3755",
  storageBucket: "linkedin-clone-e3755.appspot.com",
  messagingSenderId: "148232293605",
  appId: "1:148232293605:web:6ad36f9a81c3c1cd17d80c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, onSnapshot, addDoc, serverTimestamp, orderBy, query, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword };

  