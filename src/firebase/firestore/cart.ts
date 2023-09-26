import { Product } from "@/common/types/product"
import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

export async function getProductListInCart(email: string) {
  if (email === "") {
    return []
  }

  try {
    const cartRef = doc(db, "cart", email)

    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      return cartData.products as ProductsInCart
    } else {
      console.log("Cart document not found for email:", email)
      return []
    }
  } catch (error) {
    throw Error(`🚨 Error getting cart document : ${error}`)
  }
}

export async function addProductToCart(email: string, productInfo: Product) {
  if (email === "") {
    return
  }

  const productInfoInCart = { ...productInfo, amount: 1 }

  try {
    const cartRef = doc(db, "cart", email)
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

export async function removeProductFromCart(email: string, productId: string) {
  if (email === "") {
    return
  }
  try {
    const cartRef = doc(db, "cart", email)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      const updatedProducts = cartData.products.filter(
        (product: Product) => product.id !== productId
      )

      cartData.products = updatedProducts

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      console.log("Cart document not found for email:", email)
      return null
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}

export async function removeCheckedProductsFromCart(
  email: string,
  checkedProductList: ProductsInCart
) {
  if (email === "" || checkedProductList.length === 0) {
    return
  }

  try {
    const cartRef = doc(db, "cart", email)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      const updatedProducts = cartData.products.filter(
        (cartProduct: ProductInCart) => {
          return !checkedProductList.some(
            (product) => product.id === cartProduct.id
          )
        }
      )

      cartData.products = updatedProducts

      await setDoc(cartRef, cartData)

      return cartData
    } else {
      console.log("Cart document not found for email:", email)
      return null
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}

export const increaseProductToCart = async (
  email: string,
  productId: string
) => {
  if (email === "") {
    return
  }

  try {
    const cartRef = doc(db, "cart", email)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      const existingProductIndex = cartData.products.findIndex(
        (product: ProductInCart) => product.id === productId
      )

      if (existingProductIndex !== -1) {
        cartData.products[existingProductIndex].amount += 1

        await setDoc(cartRef, cartData)

        return cartData
      }
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}

export const decreaseProductToCart = async (
  emailValue: string,
  productId: string
) => {
  if (emailValue === "") {
    return
  }

  try {
    const cartRef = doc(db, "cart", emailValue)
    const cartDoc = await getDoc(cartRef)

    if (cartDoc.exists()) {
      const cartData = cartDoc.data()

      const existingProductIndex = cartData.products.findIndex(
        (product: ProductInCart) => product.id === productId
      )

      if (existingProductIndex !== -1) {
        cartData.products[existingProductIndex].amount -= 1

        await setDoc(cartRef, cartData)

        return cartData
      }
    }
  } catch (error) {
    throw Error(`🚨 Error updating cart document : ${error}`)
  }
}
