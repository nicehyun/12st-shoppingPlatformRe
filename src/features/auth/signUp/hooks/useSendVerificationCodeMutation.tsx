import { useMutation } from "@tanstack/react-query"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

const useSendVerificationCodeMutation = (
  phoneNumber: string,
  verificationCode: string
) => {
  const sendVerificationCodeMutaion = useMutation(() =>
    verifyPhoneAPI.sendVerificationCode(phoneNumber, verificationCode)
  )

  return sendVerificationCodeMutaion
}

export default useSendVerificationCodeMutation
