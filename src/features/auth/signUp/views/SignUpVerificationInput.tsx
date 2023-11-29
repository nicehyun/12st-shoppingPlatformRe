"use client"

import Input, { InputType } from "@/features/common/views/Input"
import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"

import { ChangeEvent } from "react"
import Loading from "@/features/common/views/Loading"
import Timer from "@/features/common/views/TImer"

interface ISignUpVerificationInput {
  id: string
  placeholder?: string
  maxLength?: number
  isChecked?: boolean
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
    <div className={`${classNames} flex flex-grow`}>
      <Input
        name={id}
        id={id}
        placeholder={placeholder}
        classNames="flex-grow"
        maxLength={maxLength}
        value={inputValue}
        onChange={onChangeInputValue}
        onBlur={onBlurInput}
        isShowFeedback={isShowFeedback}
        isReadOnly={isReadOnly}
      >
        {isNeedTimerComponent && (
          <Timer
            seconds={300}
            onTimeExpire={timerExpireFn}
            position={{ top: "top-[9px]", right: "right-[15px]" }}
          />
        )}
      </Input>

      <SignUpSideButton
        classNames={`ml-[10px]`}
        onClick={onClickVerificationButton}
        isDisabled={isDisabledButton}
        content={
          isLoading ? (
            <Loading
              spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
              isFrame={false}
            />
          ) : (
            buttonContent
          )
        }
      />
    </div>
  )
}

export default SignUpVerificationInput
