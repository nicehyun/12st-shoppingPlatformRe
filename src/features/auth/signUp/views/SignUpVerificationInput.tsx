"use client"

import Input from "@/features/common/views/Input"
import RightFetchButton from "@/features/common/views/RightFetchButton"
import { ChangeEvent } from "react"
import Timer from "@/features/common/views/TImer"

interface ISignUpVerificationInput {
  id: string
  placeholder?: string
  maxLength?: number
  isLoading: boolean
  inputValue: string
  buttonContent: string
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
  onClickVerificationButton: () => void
  onBlurInput?: () => void
  isDisabledButton: boolean
  classNames?: string
  isShowFeedback?: boolean
  isReadOnly?: boolean
  isNeedTimerComponent?: boolean
  timerExpireFn?: () => void
}

const SignUpVerificationInput = ({
  id,
  maxLength,
  isLoading,
  isDisabledButton,
  inputValue,
  onChangeInputValue,
  onClickVerificationButton,
  onBlurInput,
  classNames,
  isShowFeedback,
  isReadOnly,
  isNeedTimerComponent = false,
  buttonContent,
  placeholder,
  timerExpireFn,
}: ISignUpVerificationInput) => {
  return (
    <div className={`${classNames} relative  flex flex-grow`}>
      <Input
        name={id}
        id={id}
        placeholder={placeholder}
        classNames="flex-grow h-[50px] sm:h-[40px] md:h-[44px]"
        maxLength={maxLength}
        value={inputValue}
        onChange={onChangeInputValue}
        onBlur={onBlurInput}
        isShowFeedback={isShowFeedback}
        isReadOnly={isReadOnly}
      >
        {isNeedTimerComponent && (
          <Timer seconds={300} onTimeExpire={timerExpireFn} />
        )}
      </Input>

      <RightFetchButton
        isLoading={isLoading}
        onClick={onClickVerificationButton}
        isDisabled={isDisabledButton}
        content={buttonContent}
      />
    </div>
  )
}

export default SignUpVerificationInput
