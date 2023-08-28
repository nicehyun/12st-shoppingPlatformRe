import firebaseApp from "../config"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { UserInfo } from "@/common/types/user"

const db = getFirestore(firebaseApp)
export default async function addUserInfo(data: UserInfo) {
  const userInfoIncludingMile = { ...data, mile: 0 }

  try {
    await setDoc(
      doc(db, "user", userInfoIncludingMile.email),
      userInfoIncludingMile,
      {
        merge: true,
      }
    )

    return { result: "success" }
  } catch (error) {
    const { response } = error as unknown as AxiosError

    if (response) {
      throw Error(`🚨addUserInfo firebase setDoc api : ${error}`)
    }

    throw Error(`🚨addUserInfo firebase addUser API error : ${error}`)
  }
}
