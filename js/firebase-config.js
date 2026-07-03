import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqxdjcy5k2HDG6t-c-4zr1PSnzdspOoQY",
  authDomain: "object-simulator.firebaseapp.com",
  projectId: "object-simulator",
  storageBucket: "object-simulator.firebasestorage.app",
  messagingSenderId: "746726290134",
  appId: "1:746726290134:web:881ca97514b50c2f8c8f77",
  measurementId: "G-Y89YV65TPQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
