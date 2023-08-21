import { showFeedbackModal } from "@/redux/features/modalSlice"
import {
  duplicateToEmail,
  resetEmailDuplication,
  selectSignUpCheckState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEvent, useEffect } from "react"
import useEmailDuplicateCheckMutaion from "../../hooks/useEmailDuplicateMutation"
import { useSignUpUserInput } from "../../hooks/useSignUpUserInput"
import { emailValidator } from "../../utils/validation"
import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpEmailInput = () => {
  const dispatch = useAppDispatch()
  const { email: isCheckedEmail } = useAppSelector(selectSignUpCheckState)

  const showFeedbackModalWithContent = (modalContent: string) => {
    dispatch(showFeedbackModal({ modalContent }))
  }

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    isValid: isEmailValid,
    hasError: hasErrorEmail,
    reset: emailInputReset,
  } = useSignUpUserInput(emailValidator)

  const {
    isLoading: isEmailDuplicateCheckLoading,
    mutateAsync: emailDuplicateCheckMutateAsync,
  } = useEmailDuplicateCheckMutaion(emailInputValue)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetEmailDuplication())

    handleEmailInputValueChange(event)
  }

  const handleEmailDuplicateCheck = async () => {
    const isExistedEmail = await emailDuplicateCheckMutateAsync()

    if (isExistedEmail) {
      showFeedbackModalWithContent("사용할 수 없는 이메일입니다.")
      return
    }

    dispatch(duplicateToEmail())
    showFeedbackModalWithContent("시용 가능한 이메일입니다.")
  }

  useEffect(() => {
    emailInputReset()
  }, [emailInputReset])

  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpVerificationInput
        isDisabledButton={
          !isEmailValid || isCheckedEmail || isEmailDuplicateCheckLoading
        }
        type="email"
        inputValue={emailInputValue}
        onBlurInput={handleEmailInputBlur}
        onChangeInputValue={handleEmailInputChange}
        onClickVerificationButton={handleEmailDuplicateCheck}
        isShowFeedback={hasErrorEmail}
        isLoading={isEmailDuplicateCheckLoading}
      />
      {hasErrorEmail && <SignUpFeedback classNames="ml-[-0px]" />}
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
