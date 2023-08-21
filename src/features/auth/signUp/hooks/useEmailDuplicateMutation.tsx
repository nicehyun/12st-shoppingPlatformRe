import { emailDuplicateCheck } from "@/firebase/firestore/signUp"

import { useMutation } from "@tanstack/react-query"

const useEmailDuplicateCheckMutaion = (email: string) => {
  const emailDuplicateCheckMutaion = useMutation(() =>
    emailDuplicateCheck(email)
  )

  return emailDuplicateCheckMutaion
}

export default useEmailDuplicateCheckMutaion
