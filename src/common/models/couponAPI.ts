import { convertingObjectIntoArray } from "@/common/utils/object"
import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const couponAPI = {
  getCoupon: async () => {
    try {
      const amountRef = doc(db, "coupon", "amount")

      const rateRef = doc(db, "coupon", "rate")

      const amountDoc = await getDoc(amountRef)

      const rateDoc = await getDoc(rateRef)

      if (amountDoc.exists() && rateDoc.exists()) {
        const couponData = {
          amount: amountDoc.data() as AmountCoupon,
          rate: rateDoc.data() as RateCoupon,
        }

        return convertingObjectIntoArray(couponData) as (
          | RateCoupon
          | AmountCoupon
        )[]
      } else {
        console.log("Coupon document not found")
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 Error getting coupon document: ${error}`)
    }
  },
}
