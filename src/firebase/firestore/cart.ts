import { Product, Products } from "@/common/types/product"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

export async function getProductListInCart(emailValue: string) {
  if (emailValue === "") {
    return []
  }

  try {
    const cartRef = doc(db, "cart", emailValue)

    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      return cartData.products as Products
    } else {
      console.log("Cart document not found for email:", emailValue)
      return []
    }
  } catch (error) {
    throw Error(`🚨 Error getting cart document : ${error}`)
  }
}

export async function addProductToCart(
  emailValue: string,
  productInfo: Product
) {
  if (emailValue === "") {
    return
  }
  try {
    const cartRef = doc(db, "cart", emailValue)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      const existingProductIndex = cartData.products.findIndex(
        (product: Product) => product.id === productInfo.id
      )

      if (existingProductIndex !== -1) {
        return cartData
      }

      cartData.products.push(productInfo)

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      const newCartData = { products: [productInfo] }
      await setDoc(cartRef, newCartData)

      return newCartData
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}
