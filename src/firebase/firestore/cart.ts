import { Product, Products } from "@/common/types/product"
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
