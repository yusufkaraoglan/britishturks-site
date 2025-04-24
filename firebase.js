
// Firebase Web App Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFgL1EcQCiikKBPMdnH9Kl0Qw2v81IoNM",
  authDomain: "britishturksweb.firebaseapp.com",
  projectId: "britishturksweb",
  storageBucket: "britishturksweb.firebasestorage.app",
  messagingSenderId: "956219449213",
  appId: "1:956219449213:web:68b9ab9ff3d2cd839b7614",
  measurementId: "G-ZXZ22F74MX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };
