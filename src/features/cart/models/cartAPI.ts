import { Product } from "@/features/common/types/product"
import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import firebaseApp from "@/firebase/config"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)

// TODO :  , addProductToCart에서 getProductListInCart 재사용하기
export const cartAPI = {
  getProductListInCart: async (email: string) => {
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
  },
  addProductToCart: async (email: string, productInfo: Product) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, productInfo }),
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  removeProductFromCart: async (email: string, productId: string) => {
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
  },
  removeCheckedProductsFromCart: async (
    email: string,
    checkedProductList: ProductsInCart
  ) => {
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
  },
  increaseProductToCart: async (email: string, productId: string) => {
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
  },
  decreaseProductToCart: async (emailValue: string, productId: string) => {
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
  },
}
