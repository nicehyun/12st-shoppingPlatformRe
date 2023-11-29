import { resetNameValid, validateName } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { useUserInput } from "../../../common/hooks/useUserInput"
import { nameValidator } from "../utils/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInput from "./SignUpInput"
import SignUpInputLayout from "./SignUpInputLayout"

interface ISignUpNameInput {
  activeStep: number
}

const SignUpNameInput = ({ activeStep }: ISignUpNameInput) => {
  const dispatch = useAppDispatch()

  const {
    value: nameInputValue,
    handleValueChange: handleNameInputValueChange,
    handleInputBlur: handleNameInputBlur,
    hasError: hasErrorName,
    isValid: isNameValid,
    reset,
  } = useUserInput(nameValidator)

  useEffect(() => {
    if (activeStep === 0) {
      reset()
      return
    }
  }, [activeStep])

  useEffect(() => {
    dispatch(resetNameValid())

    if (isNameValid) {
      dispatch(validateName())
      return
    }
  }, [isNameValid, dispatch])
  return (
    <SignUpInputLayout headingText="이름을 입력해주세요">
      <SignUpInput
        id="signUp-name"
        classNames="mt-[10px]"
        inputValue={nameInputValue}
        onChangeInputValue={handleNameInputValueChange}
        onBlurInput={handleNameInputBlur}
        isShowFeedback={hasErrorName}
      />
      {hasErrorName && <SignUpFeedback content="올바른 이름을 입력해주세요." />}
    </SignUpInputLayout>
  )
}

export default SignUpNameInput
