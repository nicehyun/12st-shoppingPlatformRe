import firebaseApp from "../config"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"
import { ResponseUserInfo, UserInfo } from "@/common/types/user"
import { junkOfNoMoreThanOneDigit } from "@/common/utils/price"

const db = getFirestore(firebaseApp)

export async function checkoutUseMile(email: string, useMile: number) {
  if (email === "") {
    return
  }

  if (useMile <= 0) return

  try {
    const userRef = doc(db, "user", email)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data() as ResponseUserInfo

      await updateDoc(userRef, {
        mile: userData.mile - useMile,
      })
    } else {
      throw new Error("등록된 사용자가 확인되지 않습니다.")
    }

    return { result: "success" }
  } catch (error) {
    throw new Error(`🚨 Error updating user document: ${error}`)
  }
}

export async function checkoutGetMile(email: string, checkoutPirce: number) {
  if (email === "") {
    return
  }

  if (checkoutPirce <= 0) return

  try {
    const userRef = doc(db, "user", email)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data() as ResponseUserInfo

      const getMile = junkOfNoMoreThanOneDigit(checkoutPirce * 0.01)

      await updateDoc(userRef, {
        mile: userData.mile + getMile,
      })
    } else {
      throw new Error("등록된 사용자가 확인되지 않습니다.")
    }

    return { result: "success" }
  } catch (error) {
    throw new Error(`🚨 Error updating user document: ${error}`)
  }
}
