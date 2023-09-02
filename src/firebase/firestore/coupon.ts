import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

export const getCoupon = async () => {
  try {
    const amountRef = doc(db, "coupon", "amount")

    const rateRef = doc(db, "coupon", "rate")

    const amountDoc = await getDoc(amountRef)
    // "rate" 문서 가져오기
    const rateDoc = await getDoc(rateRef)

    if (amountDoc.exists() && rateDoc.exists()) {
      return {
        amount: amountDoc.data() as AmountCoupon,
        rate: rateDoc.data() as RateCoupon,
      }
    } else {
      console.log("Coupon document not found")
    }
  } catch (error) {
    throw Error(`🚨 Error getting coupon document : ${error}`)
  }
}
