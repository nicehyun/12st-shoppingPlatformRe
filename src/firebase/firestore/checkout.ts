import firebaseApp from "../config"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { CheckoutList } from "@/common/types/checkout"
import { getCurrentDateTime } from "@/common/utils/time"
import { AxiosError } from "axios"

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
    const { response } = error as unknown as AxiosError
    if (response) {
      throw Error(`🚨firebase setDoc  API : ${error}`)
    }

    throw Error(`addCheckoutList firebase API : ${error}`)
  }
}

export async function getCheckoutList(email: string) {
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
}
