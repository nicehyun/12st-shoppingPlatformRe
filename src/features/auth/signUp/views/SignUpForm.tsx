"use client"

import { resetStep } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import SignUpStage from "./SignUpStage"
import { validCheckFromSignUpFormData } from "../models/formData"

import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useQueryClient } from "@tanstack/react-query"
import { useSignUpMutation } from "../hooks/useSignUpMutation"

const SignUpForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { isLoading, mutateAsync } = useSignUpMutation()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isLoading) return

    const formData = new FormData(event.currentTarget)

    const isEmailDuplicationCheck = (queryClient.getQueryData([
      "SignUpValidation",
      "emailDuplicationCheck",
    ]) ?? false) as boolean

    const isPhoneVerificationCheck = (queryClient.getQueryData([
      "SignUpValidation",
      "phoneVerificationCheck",
    ]) ?? false) as boolean

    formData.append(
      "emailDuplicationCheck",
      JSON.stringify(isEmailDuplicationCheck)
    )
    formData.append(
      "phoneVerificationCheck",
      JSON.stringify(isPhoneVerificationCheck)
    )

    const { isValid, message } = validCheckFromSignUpFormData(formData)

    if (!isValid && message !== undefined) {
      showFeedbackModalWithContent(message)
      return
    }

    await mutateAsync(formData)
  }

  useEffect(() => {
    return () => {
      dispatch(resetStep())
    }
  }, [dispatch])

  return (
    <form
      onSubmit={handleSignUpSubmit}
      className="sm:w-[400px] md:w-[400px] w-4/5 max-w-[800px] mx-auto h-[500px]"
    >
      <button type="submit">test</button>
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <SignUpStage isSignUpLoading={isLoading} />
    </form>
  )
}

export default SignUpForm
