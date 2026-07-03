import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();

// Attach an observer to the global authentication object
// This observer gets called whenever the user's sign-in state changes
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        document.getElementById("btn-login").style.display = "none";
        document.getElementById("btn-logout").style.display = "block";
        
        // Check if user already exists in your Firestore database
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        
        // If not, generate a profile for them
        if (!userSnap.exists()) {
            await setDoc(userRef, {
                username: user.displayName,
                email: user.email,
                role: "player" // Set this to "admin" manually for your own account later!
            });
        }
    } else {
        // User is signed out
        document.getElementById("btn-login").style.display = "block";
        document.getElementById("btn-logout").style.display = "none";
    }
});

// UI Button Listeners
document.getElementById("btn-login").addEventListener("click", () => {
    signInWithPopup(auth, provider);
});

document.getElementById("btn-logout").addEventListener("click", () => {
    signOut(auth);
});
