import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path if necessary

export const addEmailToWaitlist = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email,
      joinedAt: new Date(),
    });
    console.log("Email added to waitlist with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding email to waitlist: ", e);
  }
};
