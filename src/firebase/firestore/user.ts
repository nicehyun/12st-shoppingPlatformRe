import { ResponseUserInfo, UserInfo } from "@/common/types/user"
import { AxiosError } from "axios"
import {
  CollectionReference,
  getFirestore,
  QuerySnapshot,
  where,
  query,
  getDocs,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore"
import firebaseApp from "../config"

const db = getFirestore(firebaseApp)

// export const findUserEmailWithNameAndPassword = async (
//   phoneNumber: string,
//   name: string
// ): Promise<string[]> => {
//   try {
//     const usersRef: CollectionReference = collection(db, "users")
//     const querySnapshot: QuerySnapshot = await getDocs(
//       query(
//         usersRef,
//         where("phone", "==", phoneNumber),
//         where("name", "==", name)
//       )
//     )

//     const matchingUsers: string[] = []
//     querySnapshot.forEach((doc) => {
//       const userData = doc.data().email as string
//       matchingUsers.push(userData)
//     })

//     return matchingUsers
//   } catch (error) {
//     const { response } = error as AxiosError

//     if (response) {
//       console.error(`🚨firebase getDocs API: ${error}`)
//       return []
//     }

//     console.error(`🚨findUserEmailWithNameAndPassword firebase API: ${error}`)
//     return []
//   }
// }

// export const addUserInfo = async (data: UserInfo) => {
//   const userInfoIncludingMile = { ...data, mile: 0 }

//   try {
//     await setDoc(
//       doc(db, "user", userInfoIncludingMile.email),
//       userInfoIncludingMile,
//       {
//         merge: true,
//       }
//     )

//     return { result: "success" }
//   } catch (error) {
//     const { response } = error as unknown as AxiosError

//     if (response) {
//       throw Error(`🚨firebase setDocs API: ${error}`)
//     }

//     throw Error(`🚨addUserInfo firebase addUser API error : ${error}`)
//   }
// }

export const getUserMile = async (email: string) => {
  if (email === "") {
    return 0
  }

  try {
    const userRef = doc(db, "user", email)

    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data() as ResponseUserInfo

      return userData.mile
    } else {
      console.log("User document not found for email:", email)
      return 0
    }
  } catch (error) {
    const { response } = error as unknown as AxiosError

    if (response) {
      throw Error(`🚨firebase getDocs API : ${error}`)
    }

    throw Error(`🚨getUserMile firebase API : ${error}`)
  }
}
