import { UserInfo } from "@/features/common/types/user"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import { IRequestSignUp } from "../types/signUp"

const db = getFirestore(firebaseApp)

export const signUpAPI = {
  signUp: async (props: IRequestSignUp) => {
    const response = await fetch(`/api/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
      next: { revalidate: 0 },
    })

    return response.json()
  },
  emailDuplicateCheck: async (email: string) => {
    const response = await fetch(`/api/auth/signUp/emailDuplicateCheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      next: { revalidate: 0 },
    })

    return response.json()
  },
  requestPhoneVerification: async (
    phone: string,
    isRequestCode: boolean = false
  ) => {
    const response = await fetch(
      `/api/auth/signUp/verificatePhone/requestPhoneVerification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, isRequestCode }),
        next: { revalidate: 0 },
      }
    )

    return response.json()
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
