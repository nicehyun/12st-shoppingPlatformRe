import firebaseApp from "@/firebase/config"
import {
  getAuth,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
} from "firebase/auth"
import { get, getDatabase, ref, remove, set } from "firebase/database"

const auth = getAuth(firebaseApp)
const database = getDatabase()
let recaptchaVerifier: RecaptchaVerifier

export const verifyPhoneAPI = {
  // verificationId 저장
  saveVerificationId: async (phoneNumber: string, verificationId: string) => {
    try {
      await set(ref(database, `verifications/${phoneNumber}`), {
        verificationId: verificationId,
        timestamp: Date.now(),
      })
    } catch (error) {
      console.log(`🚨saveVerificationId error : ${error}`)
      throw new Error(`🚨saveVerificationId error : ${error}`)
    }
  },

  // verificationId 가져오기
  getVerificationId: async (phoneNumber: string) => {
    const verificationRef = ref(
      database,
      `verifications/${phoneNumber}/verificationId`
    )

    try {
      const verificationSnapshot = await get(verificationRef)
      if (verificationSnapshot.exists()) {
        return verificationSnapshot.val()
      } else {
        console.log(`No verificationId found for ${phoneNumber}`)
        return null
      }
    } catch (error) {
      console.log(`🚨getVerificationId error : ${error}`)
      throw new Error(`🚨getVerificationId error : ${error}`)
    }
  },

  // verificationId 삭제
  removeVerificationId: async (phoneNumber: string) => {
    const verificationRef = ref(database, `verifications/${phoneNumber}`)

    try {
      await remove(verificationRef)
    } catch (error) {
      console.log(`🚨removeVerificationId error : ${error}`)
      throw new Error(`🚨removeVerificationId error : ${error}`)
    }
  },

  // 휴대폰 인증 요청 함수
  requestPhoneVerification: async (phoneNumber: string) => {
    phoneNumber = `+82${phoneNumber.slice(1)}`

    try {
      // Firebase 인증 정보 생성
      if (!recaptchaVerifier) {
        recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
        })
      }

      const provider = new PhoneAuthProvider(auth)

      // 전화번호 인증 요청
      const verificationId = await provider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier
      )
      verifyPhoneAPI.saveVerificationId(phoneNumber, verificationId)
    } catch (error) {
      console.log(`🚨requestPhoneVerificationAPI error : ${error}`)
      throw new Error(`🚨requestPhoneVerificationAPI error : ${error}`)
    }
  },

  // 인증 번호 입력 함수
  sendVerificationCode: async (
    phoneNumber: string,
    verificationCode: string
  ) => {
    phoneNumber = `+82${phoneNumber.slice(1)}`

    const verificationId = await verifyPhoneAPI.getVerificationId(phoneNumber)

    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      )
      const userCredential = await signInWithCredential(auth, credential)

      // 인증이 완료되면 verifications 레퍼런스에서 해당 번호의 verificationId를 삭제
      verifyPhoneAPI.removeVerificationId(phoneNumber)

      return !!userCredential
    } catch (error) {
      console.error(`🚨responsePhoneVerificationAPI error : ${error}`)
      return false
    }
  },
}