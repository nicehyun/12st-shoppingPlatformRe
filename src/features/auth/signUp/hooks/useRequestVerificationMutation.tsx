import { useMutation } from "@tanstack/react-query"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

const useRequestVerificationMutation = (phoneInputValue: string) => {
  const requestVerificationMutaion = useMutation(() =>
    verifyPhoneAPI.requestPhoneVerification(phoneInputValue)
  )

  return requestVerificationMutaion
}

export default useRequestVerificationMutation
