import firebaseApp from "../config"
import * as bcrypt from "bcrypt"

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ResponseUserInfo } from "@/common/types/user"

const db = getFirestore(firebaseApp)

export async function signIn(email: string, password: string) {
  const userRef = doc(db, "user", email)

  const userDoc = await getDoc(userRef)

  if (userDoc.exists()) {
    const userData = userDoc.data() as ResponseUserInfo

    if (await bcrypt.compare(password, userData.password)) {
      return { result: "success" }
    } else {
      throw Error("🚨firebase signIn API : 비밀번호가 일치하지 않습니다.")
    }
  } else {
    throw Error("🚨firebase signIn API : 사용자를 찾을 수 없습니다.")
  }
}
