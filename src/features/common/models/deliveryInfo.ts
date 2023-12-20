import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { DeliveryInfo } from "@/features/common/types/address"
import firebaseApp from "@/firebase/config"

const db = getFirestore(firebaseApp)

export const addressAPI = {
  getDeliveryInfo: async (authorization: string | null | undefined) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/address`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  updateDeliveryInfo: async (
    updateDeliveryInfo: DeliveryInfo,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/address`,
      {
        method: "POST",
        headers: { authorization },
        body: JSON.stringify({ updateDeliveryInfo, direction: "update" }),
      }
    )

    return response.json()
  },
}
