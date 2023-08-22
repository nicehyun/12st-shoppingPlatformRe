import { emailDuplicateCheck } from "@/firebase/firestore/signUp"

import { useMutation } from "@tanstack/react-query"

export const useEmailDuplicationCheckMutaion = (email: string) => {
  const emailDuplicateCheckMutaion = useMutation(() =>
    emailDuplicateCheck(email)
  )

  return emailDuplicateCheckMutaion
}
