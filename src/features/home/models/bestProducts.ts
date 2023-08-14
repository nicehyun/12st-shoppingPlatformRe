import { Product, Products } from "@/common/types/product"
import firebaseApp from "@/firebase/config"
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const getBestSellingProducts = async (): Promise<Products> => {
  try {
    const productsRef = collection(db, "products")
    const bestSellingQuery = query(
      productsRef,
      orderBy("sellCount", "desc"),
      limit(100)
    )

    const querySnapshot = await getDocs(bestSellingQuery)

    const bestSellingProducts: Products = []
    querySnapshot.forEach((doc) => {
      const productData = doc.data() as Product
      const truncatedDiscountedPrice =
        Math.floor(productData.discountedPrice / 10) * 10
      const productWithTruncatedPrice: Product = {
        ...productData,
        discountedPrice: truncatedDiscountedPrice,
      }
      bestSellingProducts.push(productWithTruncatedPrice)
    })

    return bestSellingProducts
  } catch (error) {
    console.error("Error fetching top selling products:", error)
    throw error
  }
}
