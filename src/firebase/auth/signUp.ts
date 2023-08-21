import firebaseApp from "../config"
// TODO : 디렉토리 변경
import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

// export async function signUp(email: string, password: string) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     )

//     //TODO : 회원가입 시 이메일 인증
//     // const user = userCredential.user;

//     // if (user) {
//     //   await sendEmailVerification(user);
//     // }

//     return { result: userCredential }
//   } catch (error: any) {
//     console.error(error)
//     return { result: null }
//   }
// }

export async function emailDuplicateCheck(email: string) {
  try {
    const userRef = doc(db, "users", email)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    throw new Error("🚨 Error fetching sign-in methods for email")
  }
}
