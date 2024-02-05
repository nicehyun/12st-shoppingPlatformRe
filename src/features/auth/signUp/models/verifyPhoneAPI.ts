import firebaseApp from "@/firebase/config"
import {
  getAuth,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
} from "firebase/auth"
import { get, getDatabase, ref, remove, set } from "firebase/database"
import { phoneValidator } from "../utils/validation"

const auth = getAuth(firebaseApp)
const database = getDatabase()
let recaptchaVerifier: RecaptchaVerifier

export type VerificationResponse = {
  status: number
  error?: string
}

export const verifyPhoneAPI = {
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
      throw new Error(`🚨removeVerificationId error : ${error}`)
    }
  },

  // 휴대폰 인증 요청 함수 (인증 번호 재발송 포함)
  requestPhoneVerification: async (
    phoneNumber: string,
    isRequestCode: boolean
  ): Promise<VerificationResponse> => {
    if (!phoneValidator(phoneNumber)) {
      return {
        status: 401,
        error: "유효한 휴대폰 번호 입력 후 본인확인을 진행해주세요.",
      }
    }

    phoneNumber = `+82${phoneNumber.slice(1)}`

    try {
      // Firebase 인증 정보 생성
      if (!recaptchaVerifier) {
        recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
        })
      }

      const provider = new PhoneAuthProvider(auth)

      let verificationId = null

      if (!isRequestCode) {
        // 새로운 인증 번호를 요청하는 경우
        verificationId = await provider.verifyPhoneNumber(
          phoneNumber,
          recaptchaVerifier
        )
      } else {
        // 인증 번호를 재발송하는 경우
        const existingVerificationId = await verifyPhoneAPI.getVerificationId(
          phoneNumber
        )
        if (existingVerificationId) {
          // 이전 인증 번호가 존재하는 경우에만 무효화하고 재발송
          await verifyPhoneAPI.removeVerificationId(phoneNumber)
          verificationId = await provider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier
          )
        } else {
          console.log(`No existing verificationId found for ${phoneNumber}`)
          return { status: 401, error: "인증번호를 재발송할 수 없습니다." }
        }
      }

      verifyPhoneAPI.saveVerificationId(phoneNumber, verificationId)

      return { status: 200 }
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
    if (!phoneValidator(phoneNumber)) {
      return {
        status: 401,
        error: "유효한 휴대폰 번호 입력 후 본인확인을 진행해주세요.",
      }
    }

    if (verificationCode.length !== 6) {
      return {
        status: 401,
        error: "인증번호를 6자리 입력 후 인증을 진행해주세요.",
      }
    }

    phoneNumber = `+82${phoneNumber.slice(1)}`

    const verificationId = await verifyPhoneAPI.getVerificationId(phoneNumber)

    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      )

      const userCredential = await signInWithCredential(auth, credential)

      if (!!userCredential) {
        // 인증이 완료되면 verifications 레퍼런스에서 해당 번호의 verificationId를 삭제
        verifyPhoneAPI.removeVerificationId(phoneNumber)
        return {
          status: 200,
        }
      } else {
        return {
          status: 401,
          error: "인증번호가 일치하지 않습니다.",
        }
      }
    } catch (error) {
      return {
        status: 401,
        error: "인증번호가 일치하지 않습니다.",
      }
    }
  },
}
