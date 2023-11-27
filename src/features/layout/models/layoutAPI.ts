import { Product } from "@/common/types/product"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { collection, getDocs, getFirestore, query } from "firebase/firestore"
import { CategoryHierarchy } from "../types/category"
//  TODO : api 타입 맞추기
type Categories = {
  category1: string
  category2: string
  category3: string
}

type CategoryHierarchyArray = Array<[string, Array<[string, Array<string>]>]>

const db = getFirestore(firebaseApp)

export const layoutAPI = {
  getCategories: async (): Promise<CategoryHierarchyArray> => {
    try {
      const productsRef = collection(db, "products")
      const productsQuery = query(productsRef)

      const productsDoc = await getDocs(productsQuery)

      const categoryHierarchyArray: CategoryHierarchyArray = []

      // productsSnapshot.forEach((productDoc) => {
      //   const { category1, category2, category3, category4 } =
      //     productDoc.data() as Product

      // if (!categoryHierarchy[category1]) {
      //   categoryHierarchy[category1] = {}
      // }

      // if (!categoryHierarchy[category1][category2]) {
      //   categoryHierarchy[category1][category2] = {}
      // }

      // if (!categoryHierarchy[category1][category2][category3]) {
      //   categoryHierarchy[category1][category2][category3] = []
      // }

      // if (category4 !== "") {
      //   categoryHierarchy[category1][category2][category3].push(category4)
      // }

      productsDoc.forEach((productDoc) => {
        const { category1, category2, category3, category4 } =
          productDoc.data() as Product

        // Find or create category1 entry
        let category1Entry = categoryHierarchyArray.find(
          (entry) => entry[0] === category1
        )

        if (!category1Entry) {
          category1Entry = [category1, []]
          categoryHierarchyArray.push(category1Entry)
        }

        // Find or create category2 entry within category1
        let category2Entry = category1Entry[1].find(
          (entry) => entry[0] === category2
        )

        if (!category2Entry) {
          category2Entry = [category2, []]
          category1Entry[1].push(category2Entry)
        }

        // Add category3 to category2
        category2Entry[1].push(category3)
      })

      return categoryHierarchyArray
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 Firestore API Error: ${error}`)
      }

      throw Error(`🚨 getCategories Firestore API Error: ${error}`)
    }
  },
}
