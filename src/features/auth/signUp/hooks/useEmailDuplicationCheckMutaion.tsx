import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "../models/signUpAPI"

export const useEmailDuplicationCheckMutaion = (email: string) => {
  const emailDuplicateCheckMutaion = useMutation(() =>
    signUpAPI.emailDuplicateCheck(email)
  )

  return emailDuplicateCheckMutaion
}
