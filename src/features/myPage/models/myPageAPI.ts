import { DeliveryInfo } from "@/common/types/address"
import { ResponseUserInfo } from "@/common/types/user"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore"
import { MyPageRoute } from "../types/route"

const db = getFirestore(firebaseApp)

export const myPageAPI = {
  getUserInfo: async (email: string) => {
    if (email === "") return

    try {
      const userRef = doc(db, "user", email)
      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        const userData = userDoc.data() as ResponseUserInfo
        const { password, ...userInfoWithoutPassword } = userData

        return userInfoWithoutPassword
      } else {
        return undefined
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 getUserInfo firebase API : ${error}`)
    }
  },
  modificatieMarketingClause: async (email: string, isChecked: boolean) => {
    if (email === "") return

    try {
      const userRef = doc(db, "user", email)
      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        const userData = userDoc.data() as ResponseUserInfo

        if (userData.marketingClause === isChecked) return

        const updatedUserInfo = { ...userData, marketingClause: isChecked }

        await setDoc(userRef, updatedUserInfo)

        return userData
      } else {
        return undefined
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 modificatieMarketingClause firebase API : ${error}`)
    }
  },
  modificatieDefaultAddress: async (
    email: string,
    deliveryInfo: DeliveryInfo
  ) => {
    if (email === "") return

    try {
      const defaultDeliveryInfoRef = doc(db, "defaultDeliveryInfo", email)
      const defaultDeliveryInfoRefDoc = await getDoc(defaultDeliveryInfoRef)

      if (defaultDeliveryInfoRefDoc.exists()) {
        const defaultDeliveryInfoData =
          defaultDeliveryInfoRefDoc.data() as DeliveryInfo

        if (
          Object.keys(defaultDeliveryInfoData).every(
            (key) => defaultDeliveryInfoData[key] === deliveryInfo[key]
          )
        )
          return

        await setDoc(defaultDeliveryInfoRef, deliveryInfo)
      } else {
        return undefined
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 modificatieDefaultAddress firebase API : ${error}`)
    }
  },
  memberTermination: async (email: string) => {
    if (email === "") return

    try {
      const userRef = doc(db, "user", email)
      const addressRef = doc(db, "address", email)
      const cartRef = doc(db, "cart", email)
      const checkoutRef = doc(db, "checkout", email)
      const defaultDeliveryInfoRef = doc(db, "defaultDeliveryInfo", email)

      await deleteDoc(userRef)
      await deleteDoc(addressRef)
      await deleteDoc(cartRef)
      await deleteDoc(checkoutRef)
      await deleteDoc(defaultDeliveryInfoRef)

      return {
        result: "success",
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 memberTermination firebase API : ${error}`)
    }
  },
}
