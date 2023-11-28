import { Products } from "@/common/types/product"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const productInfoAPI = {
  getProductInfo: async (productId: string) => {
    if (productId === "") return

    try {
      const productsRef = doc(db, "products", productId)
      const productsDoc = await getDoc(productsRef)

      if (productsDoc.exists()) {
        const productData = productsDoc.data() as Products

        return productData
      } else {
        return undefined
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 getUserInfo firebase API : ${error}`)
    }
  },
}
