import { selectSignUpStepState } from "@/redux/features/signUpSlice"
import { useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useUserInput } from "../../../common/hooks/useUserInput"
import { nameValidator } from "../models/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInput from "./SignUpInput"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpStepLayout from "./SignUpStepLayout"

const SignUpNameInput = () => {
  const signUpStep = useAppSelector(selectSignUpStepState)
  const {
    value: nameInputValue,
    handleValueChange: handleNameInputValueChange,
    handleInputBlur: handleNameInputBlur,
    hasError: hasErrorName,
    isValid: isNameValid,
    reset,
  } = useUserInput(nameValidator)

  useEffect(() => {
    if (signUpStep === 0) {
      reset()
      return
    }
  }, [signUpStep])

  return (
    <SignUpStepLayout isButtonDisabled={!isNameValid}>
      <SignUpInputLayout headingText="이름을 입력해주세요">
        <SignUpInput
          id="signUp-name"
          classNames="mt-[10px]"
          inputValue={nameInputValue}
          onChangeInputValue={handleNameInputValueChange}
          onBlurInput={handleNameInputBlur}
          isShowFeedback={hasErrorName}
        />
        <SignUpFeedback isValid={isNameValid} content=" 2~4글자의 한글" />
      </SignUpInputLayout>
    </SignUpStepLayout>
  )
}

export default SignUpNameInput
