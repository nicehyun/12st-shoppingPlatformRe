import { requestPhoneVerification } from "@/firebase/auth/vertification"
import { useMutation } from "@tanstack/react-query"

const useRequestVerificationMutation = (phoneInputValue: string) => {
  const requestVerificationMutaion = useMutation(() =>
    requestPhoneVerification(phoneInputValue)
  )

  return requestVerificationMutaion
}

export default useRequestVerificationMutation
