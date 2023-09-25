"use client"

import { usePostCodeModal } from "@/common/hooks/usePostCodeModal"
import Input from "@/common/views/Input"

import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"
import {
  enterToAddress,
  resetSignUpAddressCheck,
  selectSignUpActiveStepState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useUserInput } from "../../../../common/hooks/useUserInput"
import { additionalAddressValidator } from "../utils/validation"

import SignUpFeedback from "../../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"

const SignUpAddressInput = () => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const {
    postCodeModalComponent,
    showPostCodeModal,
    addressValue,
    resetAddressValue,
  } = usePostCodeModal()

  const {
    value: additionalAddressInputValue,
    handleValueChange: handleAdditionalAddressInputValueChange,
    handleInputBlur: handleAdditionalAddressInputBlur,
    hasError: hasErrorAdditionalAddress,
    isValid: isValidAdditionalAddress,
    reset,
  } = useUserInput(additionalAddressValidator)

  useEffect(() => {
    dispatch(resetSignUpAddressCheck())

    if (!addressValue) return

    if (isValidAdditionalAddress) {
      dispatch(enterToAddress())
      return
    }
  }, [addressValue, isValidAdditionalAddress, dispatch])

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      reset()

      resetAddressValue()
      return
    }
  }, [selectSignUpActiveStep])

  return (
    <SignUpInputLayout headingText="주소를 입력해주세요">
      <div className="flex flex-col flex-grow">
        <div className="flex">
          <Input
            type="text"
            name="address"
            id="address"
            isReadOnly={true}
            classNames="mb-[10px] w-full"
            value={addressValue}
          />

          <SignUpSideButton
            content="검색"
            classNames="ml-[10px]"
            onClick={showPostCodeModal}
          />
        </div>

        <Input
          type="text"
          name="additionalAddress"
          id="additionalAddress"
          placeholder="나머지 주소를 입력해주세요"
          value={additionalAddressInputValue}
          onBlur={handleAdditionalAddressInputBlur}
          isShowFeedback={hasErrorAdditionalAddress}
          onChange={handleAdditionalAddressInputValueChange}
        />
      </div>
      {hasErrorAdditionalAddress && (
        <SignUpFeedback content="나머지 주소를 입력해주세요" />
      )}

      {postCodeModalComponent}
    </SignUpInputLayout>
  )
}

export default SignUpAddressInput
