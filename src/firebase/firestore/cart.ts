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

      // 상품을 제거할 때, 상품 정보를 사용하여 제거합니다.
      const updatedProducts = cartData.products.filter(
        (product: Product) => product.id !== productInfo.id
      )

      cartData.products = updatedProducts

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      // 카트가 존재하지 않는 경우에는 아무 작업도 하지 않습니다.
      console.log("Cart document not found for email:", emailValue)
      return null
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}
