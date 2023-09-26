import firebaseApp from "../config"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { CheckoutList } from "@/common/types/checkout"
import { getCurrentDateTime } from "@/common/utils/time"

const db = getFirestore(firebaseApp)
export async function addCheckoutList(
  email: string,
  checkoutListInfos: CheckoutList
) {
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
    throw Error(`🚨 Error updating checkout document : ${error}`)
  }
}
