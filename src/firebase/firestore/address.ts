import firebaseApp from "../config"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { Address } from "@/common/types/address"
import { ResponseUserInfo } from "@/common/types/user"

const db = getFirestore(firebaseApp)
export async function updateAddress(email: string, addressData: Address) {
  if (email === "") return

  try {
    await setDoc(doc(db, "address", email), addressData, {
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
}

export async function getUserAddress(email: string) {
  if (email === "") return null

  try {
    const addressRef = doc(db, "address", email)

    const addressDoc = await getDoc(addressRef)

    if (addressDoc.exists()) {
      const AddressData = addressDoc.data() as Address

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
}
