import { DeliveryInfo } from "@/common/types/address"
import { CheckoutList } from "@/common/types/checkout"
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
import { UseMileAndGetMile } from "../types/mile"
import { Product } from "@/common/types/product"
import { CustomerCounselingDetail } from "../types/myPage"

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
      const defaultDeliveryInfoDoc = await getDoc(defaultDeliveryInfoRef)

      if (defaultDeliveryInfoDoc.exists()) {
        const defaultDeliveryInfoData =
          defaultDeliveryInfoDoc.data() as DeliveryInfo

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
  getUseMileAndGetMile: async (email: string) => {
    if (email === "") return

    try {
      const checkoutRef = doc(db, "checkout", email)
      const checkoutDoc = await getDoc(checkoutRef)

      if (checkoutDoc.exists()) {
        const checkoutData = checkoutDoc.data()
        const checkoutList = checkoutData.checkoutList || []

        const miles: UseMileAndGetMile[] = checkoutList.map(
          (checkoutEl: CheckoutList) => {
            const { getMile, useMile, checkoutNumber, checkoutDate } =
              checkoutEl
            return { getMile, useMile, checkoutNumber, checkoutDate }
          }
        )

        return miles
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 getUseMileAndGetMile firebase API : ${error}`)
    }
  },
  getProductInfoByProductId: async (productId: string) => {
    if (productId === "") return

    try {
      const productRef = doc(db, "products", productId)
      const productDoc = await getDoc(productRef)

      if (productDoc.exists()) {
        const productData = productDoc.data() as Product

        return productData
      } else {
        return undefined
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨 firebase getDocs API : ${error}`)
      }

      throw Error(`🚨 getProductInfoByProductId firebase API : ${error}`)
    }
  },
  writeCoustomerCounseling: async (
    userInfo: { email: string; name: string },
    writeDetail: CustomerCounselingDetail
  ) => {
    if (userInfo.email === "") return

    try {
      const customerCounselingRef = doc(
        db,
        "customerCounseling",
        userInfo.email
      )
      const customerCounselingDoc = await getDoc(customerCounselingRef)

      let updatedCustomerCounselingList = []

      if (customerCounselingDoc.exists()) {
        const existingCustomerCounselingData = customerCounselingDoc.data()
        const existingCustomerCounselingDataList =
          existingCustomerCounselingData.customerCounselingList || []

        updatedCustomerCounselingList = [
          writeDetail,
          ...existingCustomerCounselingDataList,
        ]
      } else {
        updatedCustomerCounselingList = [writeDetail]
      }

      await setDoc(customerCounselingRef, {
        customerCounselingList: updatedCustomerCounselingList,
      })

      return { result: "success" }
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if (response) {
        throw Error(`🚨firebase setDoc API : ${error}`)
      }

      throw Error(`writeCoustomerCounseling firebase API : ${error}`)
    }
  },
}
