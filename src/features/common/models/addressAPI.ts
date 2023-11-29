import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { DeliveryInfo } from "@/features/common/types/address"
import firebaseApp from "@/firebase/config"

const db = getFirestore(firebaseApp)

export const addressAPI = {
  updateDefalutDeliveryInfo: async (
    email: string,
    deliveryInfo: DeliveryInfo
  ) => {
    if (email === "") return

    try {
      await setDoc(doc(db, "defaultDeliveryInfo", email), deliveryInfo, {
        merge: true,
      })

      return { result: "success" }
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`updateAddress firebase setDoc api : ${error}`)
      }

      throw Error(`🚨firebase updateAddress API error : ${error}`)
    }
  },
  getUserDefaultDeliveryInfo: async (email: string) => {
    if (email === "") return null

    try {
      const addressRef = doc(db, "defaultDeliveryInfo", email)

      const addressDoc = await getDoc(addressRef)

      if (addressDoc.exists()) {
        const AddressData = addressDoc.data() as DeliveryInfo

        return AddressData
      }

      return null
    } catch (error) {
      const { response } = error as unknown as AxiosError

      if (response) {
        throw Error(`🚨firebase getDocs API : ${error}`)
      }

      throw Error(`getUserAddress firebase API : ${error}`)
    }
  },
}
