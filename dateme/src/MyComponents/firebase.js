import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZzUjjmT9-XLxaRrDGjGxzaC2m41mq2Zw",
  authDomain: "login-c55e8.firebaseapp.com",
  projectId: "login-c55e8",
  storageBucket: "login-c55e8.appspot.com",
  messagingSenderId: "852387332320",
  appId: "1:852387332320:web:ac7d43d36d31f74acd1085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app)

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}


export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  

  return currentUser;
}