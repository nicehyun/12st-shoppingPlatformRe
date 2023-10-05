import { UserInfo } from "@/common/types/user"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export const signUpAPI = {
  signUp: async (formData: FormData) => {
    try {
      const response = await fetch("/api/auth/signUp", {
        method: "POST",
        body: formData,
      })

      return response
    } catch (error) {
      console.error(error)
    }
  },
  emailDuplicateCheck: async function emailDuplicateCheck(email: string) {
    try {
      const userRef = doc(db, "user", email)
      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        return true
      } else {
        return false
      }
    } catch (error) {
      throw new Error("🚨 Error fetching sign-in methods for email")
    }
  },
  addUserInfo: async (data: UserInfo) => {
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
        throw Error(`🚨firebase setDocs API: ${error}`)
      }

      throw Error(`🚨addUserInfo firebase addUser API error : ${error}`)
    }
  },
}
