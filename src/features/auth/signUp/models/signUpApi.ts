import { UserInfo } from "@/common/types/user"
import addUserInfo from "@/firebase/firestore/addUserInfo"
import { signUp } from "@/firebase/firestore/signUp"

export const signUpAPI = {
  signUp: async (userInfo: UserInfo) => {
    try {
      // const { result: signUpResult } = await signUp(
      //   userInfo.email,
      //   userInfo.password
      // )
      const { result: addUserResult } = await addUserInfo(userInfo)

      return addUserResult === "success"
    } catch (error) {
      console.error(error)
      return !error
    }
  },
}
