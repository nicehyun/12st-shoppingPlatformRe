import { CheckoutList } from "@/features/common/types/checkout"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { getCurrentDateTime } from "@/features/common/utils/time"
import { AxiosError } from "axios"
import firebaseApp from "@/firebase/config"
import { checkoutNumber } from "../utils/checkout"

const db = getFirestore(firebaseApp)

export const checkoutAPI = {
  checkout: async (
    checkoutInfo: CheckoutList,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    isUpdateDeliveryInfo: boolean,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
      body: JSON.stringify({
        checkoutInfo,
        isClauseCheck,
        isUpdateDeliveryInfo,
      }),
    })

    return response.json()
  },
  addCheckoutList: async (email: string, checkoutListInfos: CheckoutList) => {
    if (email === "") return

    try {
      const checkoutRef = doc(db, "checkout", email)
      const checkoutDoc = await getDoc(checkoutRef)

      let updatedCheckoutList = []

      if (checkoutDoc.exists()) {
        const existingCheckoutData = checkoutDoc.data()
        const existingCheckoutList = existingCheckoutData.checkoutList || []

        updatedCheckoutList = [
          {
            ...checkoutListInfos,
            checkoutDate: getCurrentDateTime(),
            checkoutNumber: checkoutNumber(),
          },
          ...existingCheckoutList,
        ]
      } else {
        updatedCheckoutList = [checkoutListInfos]
      }

      await setDoc(checkoutRef, {
        checkoutList: updatedCheckoutList,
      })

      return { result: "success" }
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if (response) {
        throw Error(`🚨firebase setDoc  API : ${error}`)
      }

      throw Error(`addCheckoutList firebase API : ${error}`)
    }
  },
  getCheckoutList: async (email: string) => {
    if (email === "") return null

    try {
      const checkoutRef = doc(db, "checkout", email)
      const checkoutDoc = await getDoc(checkoutRef)

      if (checkoutDoc.exists()) {
        const checkoutData = checkoutDoc.data() as {
          checkoutList: CheckoutList[]
        }

        return checkoutData.checkoutList
      } else {
        return null
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨firebase getDocs API : ${error}`)
      }

      throw Error(`getCheckoutList firebase API : ${error}`)
    }
  },
}
