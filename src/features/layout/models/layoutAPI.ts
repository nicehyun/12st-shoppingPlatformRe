import { Product } from "@/common/types/product"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { collection, getDocs, getFirestore, query } from "firebase/firestore"
import { CategoryHierarchy } from "../types/category"

const db = getFirestore(firebaseApp)

export const layoutAPI = {
  getCategories: async (): Promise<CategoryHierarchy> => {
    try {
      const productsRef = collection(db, "products")
      const productsQuery = query(productsRef)

      const productsSnapshot = await getDocs(productsQuery)

      const categoryHierarchy: any = {}

      productsSnapshot.forEach((productDoc) => {
        const { category1, category2, category3, category4 } =
          productDoc.data() as Product

        if (!categoryHierarchy[category1]) {
          categoryHierarchy[category1] = {}
        }

        if (!categoryHierarchy[category1][category2]) {
          categoryHierarchy[category1][category2] = {}
        }

        if (!categoryHierarchy[category1][category2][category3]) {
          categoryHierarchy[category1][category2][category3] = []
        }

        if (category4 !== "") {
          categoryHierarchy[category1][category2][category3].push(category4)
        }
      })

      return categoryHierarchy
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 Firestore API Error: ${error}`)
      }

      throw Error(`🚨 getCategories Firestore API Error: ${error}`)
    }
  },
}
