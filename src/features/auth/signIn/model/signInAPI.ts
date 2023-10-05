import * as bcrypt from "bcrypt"

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ResponseUserInfo } from "@/common/types/user"
import { signJwtAccessToken } from "@/app/lib/jwt"
import firebaseApp from "@/firebase/config"

const db = getFirestore(firebaseApp)

export const signInAPI = {
  signIn: async (email: string, passwordValue: string) => {
    const userRef = doc(db, "user", email)

    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data() as ResponseUserInfo
      const { password, ...userInfoWithoutPassword } = userData

      if (await bcrypt.compare(passwordValue, userData.password)) {
        const accessToken = signJwtAccessToken(userInfoWithoutPassword)

        const result = {
          ...userInfoWithoutPassword,
          accessToken,
        }

        return result
      } else {
        throw Error("🚨firebase signIn API : 비밀번호가 일치하지 않습니다.")
      }
    } else {
      throw Error("🚨firebase signIn API : 사용자를 찾을 수 없습니다.")
    }
  },
}
