import firebaseApp from "../config"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { AxiosError } from "axios"
import { UserInfo } from "@/common/types/user"

const db = getFirestore(firebaseApp)
export default async function addUserInfo(data: UserInfo) {
  const { password, ...userInfoWithoutPassword } = data

  const userInfoIncludingMile = { ...userInfoWithoutPassword, mile: 0 }

  try {
    await setDoc(
      doc(db, "user", userInfoWithoutPassword.email),
      userInfoIncludingMile,
      {
        merge: true,
      }
    )

    return { result: "success" }
  } catch (error) {
    const { response } = error as unknown as AxiosError

    if (response) {
      console.error(`🚨addUserInfo firebase setDoc api : ${error}`)
      return { result: null }
    }

    console.error(`🚨addUserInfo firebase addUser API error : ${error}`)
    return { result: null }
  }
}
