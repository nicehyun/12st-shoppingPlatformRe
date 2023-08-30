import { doc, getDoc, getFirestore } from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

export async function getProductListInCart(emailValue: string) {
  try {
    const cartRef = doc(db, "cart", emailValue)

    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()
      return cartData
    } else {
      console.log("Cart document not found for email:", emailValue)
      return null
    }
  } catch (error) {
    console.error("🚨 Error getting cart document:", error)
    throw error
  }
}
