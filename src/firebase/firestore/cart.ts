import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

export async function getProductListInCart(emailValue: string) {
  if (emailValue === "") {
    return
  }

  try {
    const cartRef = doc(db, "cart", emailValue)

    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()
      return cartData.products as string[]
    } else {
      console.log("Cart document not found for email:", emailValue)
      return []
    }
  } catch (error) {
    throw Error(`🚨 Error getting cart document : ${error}`)
  }
}

export async function addProductToCart(emailValue: string, productId: string) {
  if (emailValue === "") {
    return
  }
  try {
    const cartRef = doc(db, "cart", emailValue)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      if (cartData.products && cartData.products.includes(productId)) {
        return cartData
      }

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
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}
