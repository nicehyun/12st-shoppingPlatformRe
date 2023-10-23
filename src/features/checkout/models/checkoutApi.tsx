import { CheckoutList } from "@/common/types/checkout"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { getCurrentDateTime } from "@/common/utils/time"
import { AxiosError } from "axios"
import firebaseApp from "@/firebase/config"

const db = getFirestore(firebaseApp)

export const checkoutAPI = {
  checkout: async (
    checkoutInfo: CheckoutList,
    email: string,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    isUpdateDeliveryInfo: boolean
  ) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          checkoutInfo,
          email,
          isClauseCheck,
          isUpdateDeliveryInfo,
        }),
      })

      return response
    } catch (error) {
      console.error(error)
    }
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
          { ...checkoutListInfos, checkoutDate: getCurrentDateTime() },
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
