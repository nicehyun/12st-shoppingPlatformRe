import { Product, Products } from "@/common/types/product"
import { ProductsInCart } from "@/features/cart/types/cart"
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

      return cartData.products as ProductsInCart
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

  const productInfoInCart = { ...productInfo, amount: 1 }

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

      cartData.products.push(productInfoInCart)

      await setDoc(cartRef, cartData)
    } else {
      const newCartData = { products: [productInfoInCart] }
      await setDoc(cartRef, newCartData)
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}

export async function removeProductFromCart(
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

      const updatedProducts = cartData.products.filter(
        (product: Product) => product.id !== productInfo.id
      )

      cartData.products = updatedProducts

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      console.log("Cart document not found for email:", emailValue)
      return null
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}
