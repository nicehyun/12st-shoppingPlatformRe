import firebaseApp from "../config"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

import { Order } from "@/common/types/order"

const db = getFirestore(firebaseApp)
export async function addProductToOrder(email: string, orderInfo: Order) {
  if (email === "") return

  try {
    const orderRef = doc(db, "order", email)
    const orderDoc = await getDoc(orderRef)

    const orderData: { orders: Order[] } = {
      orders: [],
    }

    if (orderDoc.exists()) {
      const existingOrderData = orderDoc.data()
      orderData.orders = [orderInfo, ...existingOrderData.orders]
    } else {
      orderData.orders.push(orderInfo)
    }

    await setDoc(orderRef, orderData, { merge: true })

    return { result: "success" }
  } catch (error) {
    throw new Error(`🚨 주문 중 오류 발생 : ${error}`)
  }
}
