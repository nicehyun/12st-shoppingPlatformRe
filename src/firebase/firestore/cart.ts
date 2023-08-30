import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
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

export async function addProductToCart(emailValue: string, productId: string) {
  try {
    const cartRef = doc(db, "cart", emailValue)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      if (!cartData.products) {
        cartData.products = [productId]
      } else {
        cartData.products.push(productId)
      }

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      const newCartData = { products: [productId] }
      await setDoc(cartRef, newCartData)

      return newCartData
    }
  } catch (error) {
    console.error("🚨 Error updating cart document:", error)
    throw error
  }
}
