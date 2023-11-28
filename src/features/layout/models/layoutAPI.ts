import { Product, Products } from "@/common/types/product"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { collection, getDocs, getFirestore } from "firebase/firestore"

type Categories = {
  [key: string]: { [key: string]: string[] }
}

const db = getFirestore(firebaseApp)

export const layoutAPI = {
  getAllProducts: async (): Promise<Products> => {
    const productsCollectionRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsCollectionRef)

    const products: Products = []

    productsSnapshot.forEach((doc) => {
      const product = doc.data() as Product

      products.push(product)
    })

    return products
  },
  getCategories: async (): Promise<Categories[]> => {
    try {
      const productsCollectionRef = collection(db, "products")
      const productsSnapshot = await getDocs(productsCollectionRef)

      const categories: Categories[] = []

      productsSnapshot.forEach((doc) => {
        if (doc.exists()) {
          const product = doc.data() as Product

          const { category1, category2, category3 } = product

          const category1Index = categories.findIndex(
            (categoryEntry) => categoryEntry[category1]
          )

          if (category1Index === -1) {
            categories.push({
              [category1]: {
                [category2]: [category3],
              },
            })
          } else {
            const category1Data = categories[category1Index][category1]
            const category2Index = Object.keys(category1Data).indexOf(category2)

            if (category2Index === -1) {
              category1Data[category2] = [category3]
            } else {
              const category3Array = category1Data[category2]

              if (!category3Array.includes(category3)) {
                category3Array.push(category3)
              }
            }
          }
        }
      })

      return categories
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 Firestore API Error: ${error}`)
      }

      throw Error(`🚨 getCategories Firestore API Error: ${error}`)
    }
  },
}
