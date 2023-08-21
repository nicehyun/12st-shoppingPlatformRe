import { emailDuplicateCheck } from "@/firebase/auth/signUp"

import { useMutation } from "@tanstack/react-query"

const useEmailDuplicateCheckMutaion = (email: string) => {
  const emailDuplicateCheckMutaion = useMutation(() =>
    emailDuplicateCheck(email)
  )

  return emailDuplicateCheckMutaion
}

export default useEmailDuplicateCheckMutaion
