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

export default async function getBestSellingProducts(): Promise<any[]> {
  try {
    const productsRef = collection(db, "products")
    const q = query(productsRef, orderBy("sellCount", "desc"), limit(6))

    const querySnapshot = await getDocs(q)

    const topSellingProducts: any = []
    querySnapshot.forEach((doc) => {
      topSellingProducts.push(doc.data())
    })

    return topSellingProducts
  } catch (error) {
    console.error("Error fetching top selling products:", error)
    throw error
  }
}
