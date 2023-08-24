import {
  resetNameValid,
  selectSignUpActiveStepState,
  validateName,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { Mobile } from "../types/mobile"
import { nameValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpInput from "./SignUpInput"

const SignUpNameInput = ({ isMobile }: Mobile) => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const {
    value: nameInputValue,
    handleValueChange: handleNameInputValueChange,
    handleInputBlur: handleNameInputBlur,
    hasError: hasErrorName,
    isValid: isNameValid,
    reset,
  } = useSignUpUserInput(nameValidator)

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      reset()
      return
    }
  }, [selectSignUpActiveStep])

  useEffect(() => {
    dispatch(resetNameValid())

    if (isNameValid) {
      dispatch(validateName())
      return
    }
  }, [isNameValid, dispatch])
  return (
    <>
      <SignUpInput
        type="name"
        classNames="mt-[10px]"
        inputValue={nameInputValue}
        onChangeInputValue={handleNameInputValueChange}
        onBlurInput={handleNameInputBlur}
        isShowFeedback={hasErrorName}
        isMobile={isMobile}
      />
      {hasErrorName && <SignUpFeedback content="올바른 이름을 입력해주세요." />}
    </>
  )
}

export default SignUpNameInput
