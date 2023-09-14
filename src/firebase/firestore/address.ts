import firebaseApp from "../config"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { Address } from "@/common/types/address"

const db = getFirestore(firebaseApp)
export async function updateAddress(email: string, addressData: Address) {
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
