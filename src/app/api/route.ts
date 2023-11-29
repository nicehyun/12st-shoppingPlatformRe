import { Product, Products } from "@/features/common/types/product"
import firebaseApp from "@/firebase/config"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { NextResponse } from "next/server"

const db = getFirestore(firebaseApp)

export async function GET() {
  const products: Products = []

  try {
    //   const productsCollectionRef = collection(db, "products")
    //   const productsSnapshot = await getDocs(productsCollectionRef)

    //   productsSnapshot.forEach((doc) => {
    //     const product = doc.data() as Product

    //     products.push(product)

    return NextResponse.json(products)
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}
