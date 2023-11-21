import { useState } from "react"

const useSignUpVerificationCheck = () => {
  const [isVerificationCheck, setIsVerificationCheck] = useState({
    email: false,
    phone: false,
  })

  const checkEmailDuplication = () => {
    setIsVerificationCheck((prev) => {
      return { ...prev, email: true }
    })
  }

  const checkPhoneVerification = () => {
    setIsVerificationCheck((prev) => {
      return { ...prev, phone: true }
    })
  }

  const resetEmailDuplicateCheck = () => {
    setIsVerificationCheck((prev) => {
      return { ...prev, email: false }
    })
  }

  const resetPhoneVerificationCheck = () => {
    setIsVerificationCheck((prev) => {
      return { ...prev, phone: false }
    })
  }
  return {
    verificationCheckedState: isVerificationCheck,
    checkEmailDuplication,
    checkPhoneVerification,
    resetEmailDuplicateCheck,
    resetPhoneVerificationCheck,
  }
}

export default useSignUpVerificationCheck
