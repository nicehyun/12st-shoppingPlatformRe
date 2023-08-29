import firebaseApp from "../config"

import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export async function emailDuplicateCheck(email: string) {
  try {
    const userRef = doc(db, "user", email)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    throw new Error("🚨 Error fetching sign-in methods for email")
  }
}
