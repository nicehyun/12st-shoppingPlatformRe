import { Product, Products } from "@/features/common/types/product"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const getArrivalProducts = async (): Promise<Products> => {
  try {
    const productsRef = collection(db, "products")
    const arrivalQuery = query(productsRef, orderBy("name", "desc"), limit(30))

    const arrivalProductsDoc = await getDocs(arrivalQuery)

    const arrivalProducts: Products = []

    arrivalProductsDoc.forEach((productDoc) => {
      const productData = productDoc.data() as Product

      arrivalProducts.push(productData)
    })

    return arrivalProducts
  } catch (error) {
    const { response } = error as unknown as AxiosError

    if (response) {
      throw Error(`🚨firebase getDocs API : ${error}`)
    }

    throw Error(`getArrivalProducts firebase API : ${error}`)
  }
}

export const getTopSaleProducts = async (): Promise<Products> => {
  try {
    const productsRef = collection(db, "products")
    const topSaleQuery = query(
      productsRef,
      orderBy("discount", "desc"),
      limit(100)
    )

    const topSaleProductsDoc = await getDocs(topSaleQuery)

    const topSaleProducts: Products = []

    topSaleProductsDoc.forEach((productDoc) => {
      const productData = productDoc.data() as Product

      topSaleProducts.push(productData)
    })

    return topSaleProducts
  } catch (error) {
    const { response } = error as unknown as AxiosError

    if (response) {
      throw Error(`🚨firebase getDocs API : ${error}`)
    }

    throw Error(`getTopSaleProducts firebase API : ${error}`)
  }
}

export const getBestSellingProducts = async (): Promise<Products> => {
  try {
    const productsRef = collection(db, "products")
    const bestSellingQuery = query(
      productsRef,
      orderBy("sellCount", "desc"),
      limit(100)
    )

    const bestSellingProductsDoc = await getDocs(bestSellingQuery)

    const bestSellingProducts: Products = []
    bestSellingProductsDoc.forEach((doc) => {
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
    const { response } = error as unknown as AxiosError

    if (response) {
      throw Error(`🚨firebase getDocs API : ${error}`)
    }

    throw Error(`getBestSellingProducts firebase API : ${error}`)
  }
}
