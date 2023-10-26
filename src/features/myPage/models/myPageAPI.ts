import { ResponseUserInfo } from "@/common/types/user"
import firebaseApp from "@/firebase/config"
import { AxiosError } from "axios"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

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
}
