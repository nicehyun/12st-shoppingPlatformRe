import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query"
import { signUpAPI } from "../models/signUpAPI"

type EmailDuplicationCheckResult = { isExistedEmail: boolean }

export const useEmailDuplicationCheckMutation = (
  options?: UseMutationOptions<EmailDuplicationCheckResult, Error, string>
): UseMutationResult<EmailDuplicationCheckResult, Error, string> => {
  const emailDuplicateCheckMutation = useMutation(
    (email: string) => signUpAPI.emailDuplicateCheck(email),
    options
  )

  return emailDuplicateCheckMutation
}
