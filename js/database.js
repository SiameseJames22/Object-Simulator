import { db } from "./firebase-config.js";
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Call this function when the player finishes creating a roster
export async function saveShowData(showName, rosterData) {
    try {
        await addDoc(collection(db, "shows"), {
            name: showName,
            contestants: rosterData,
            createdAt: new Date()
        });
        console.log("Show saved successfully!");
    } catch (error) {
        console.error("Error saving show: ", error);
    }
}

// Call this function to fetch everyone's shows
export async function loadAllShows() {
    const querySnapshot = await getDocs(collection(db, "shows"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
