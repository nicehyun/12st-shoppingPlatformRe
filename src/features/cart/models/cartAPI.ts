import { Product } from "@/features/common/types/product"
import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import firebaseApp from "@/firebase/config"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const cartAPI = {
  getProductListInCart: async (
    authorization: string | null | undefined
  ): Promise<ProductsInCart | null> => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  increaseProductToCart: async (
    productInfo: Product,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInfo, direction: "increase" }),
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  removeProductFromCart: async (
    productInfo: Product,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInfo, direction: "remove" }),
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  // removeProductFromCart: async (email: string, productId: string) => {
  //   if (email === "") {
  //     return
  //   }
  //   try {
  //     const cartRef = doc(db, "cart", email)
  //     const cartDoc = await getDoc(cartRef)

  //     if (cartDoc.exists()) {
  //       const cartData = cartDoc.data()

  //       const updatedProducts = cartData.products.filter(
  //         (product: Product) => product.id !== productId
  //       )

  //       cartData.products = updatedProducts

  //       await setDoc(cartRef, cartData)

  //       return cartData
  //     } else {
  //       console.log("Cart document not found for email:", email)
  //       return null
  //     }
  //   } catch (error) {
  //     throw Error(`🚨 Error updating cart document : ${error}`)
  //   }
  // },
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
  // increaseProductToCart: async (email: string, productId: string) => {
  //   if (email === "") {
  //     return
  //   }

  //   try {
  //     const cartRef = doc(db, "cart", email)
  //     const cartDoc = await getDoc(cartRef)

  //     if (cartDoc.exists()) {
  //       const cartData = cartDoc.data()

  //       const existingProductIndex = cartData.products.findIndex(
  //         (product: ProductInCart) => product.id === productId
  //       )

  //       if (existingProductIndex !== -1) {
  //         cartData.products[existingProductIndex].amount += 1

  //         await setDoc(cartRef, cartData)

  //         return cartData
  //       }
  //     }
  //   } catch (error) {
  //     throw Error(`🚨 Error updating cart document : ${error}`)
  //   }
  // },
  //   decreaseProductToCart: async (emailValue: string, productId: string) => {
  //     if (emailValue === "") {
  //       return
  //     }

  //     try {
  //       const cartRef = doc(db, "cart", emailValue)
  //       const cartDoc = await getDoc(cartRef)

  //       if (cartDoc.exists()) {
  //         const cartData = cartDoc.data()

  //         const existingProductIndex = cartData.products.findIndex(
  //           (product: ProductInCart) => product.id === productId
  //         )

  //         if (existingProductIndex !== -1) {
  //           cartData.products[existingProductIndex].amount -= 1

  //           await setDoc(cartRef, cartData)

  //           return cartData
  //         }
  //       }
  //     } catch (error) {
  //       throw Error(`🚨 Error updating cart document : ${error}`)
  //     }
  //   },
}
