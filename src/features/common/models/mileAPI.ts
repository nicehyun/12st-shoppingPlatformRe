import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"
import { ResponseUserInfo } from "@/features/common/types/user"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"

const db = getFirestore(firebaseApp)

export const mileAPI = {
  checkoutUseMile: async (email: string, useMile: number) => {
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
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 Error updating user document: ${error}`)
    }
  },
  checkoutGetMile: async (email: string, checkoutPirce: number) => {
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
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 Error updating user document: ${error}`)
    }
  },
  getUserMile: async (email: string) => {
    if (email === "") {
      return 0
    }

    try {
      const userRef = doc(db, "user", email)

      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        const userData = userDoc.data() as ResponseUserInfo

        return userData.mile
      } else {
        console.log("User document not found for email:", email)
        return 0
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨firebase getDocs API : ${error}`)
      }

      throw Error(`🚨getUserMile firebase API : ${error}`)
    }
  },
}
