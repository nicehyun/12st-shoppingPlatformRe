import { Products } from "@/common/types/product"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore"
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
      const productIds = (cartData.products as string[]) || []

      const products = await Promise.all(
        productIds.map(async (productId) => {
          const productQuery = query(
            collection(db, "products"),
            where("id", "==", productId)
          )
          const productQuerySnapshot = await getDocs(productQuery)
          if (!productQuerySnapshot.empty) {
            return productQuerySnapshot.docs[0].data()
          }
          return null
        })
      )

      return products.filter((product) => product !== null) as Products | null
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
