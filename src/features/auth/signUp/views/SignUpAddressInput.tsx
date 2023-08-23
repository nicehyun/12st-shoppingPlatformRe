"use client"

import Input from "@/common/views/Input"
import PostCodeModal from "@/common/views/PostCodeModal"
import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"
import { enterToAddress } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { Address } from "react-daum-postcode"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { additionalAddressValidator } from "../utils/validation"

import SignUpFeedback from "./SignUpFeedback"

interface ISignUpAddressInput {
  isMobile: boolean
}

const SignUpAddressInput = ({ isMobile }: ISignUpAddressInput) => {
  const dispatch = useAppDispatch()

  const [isShowPostCodeModal, setIsShowPostCodeModal] = useState(false)
  const [addressValue, setAddressValue] = useState("")

  const {
    value: additionalAddressInputValue,
    handleValueChange: handleAdditionalAddressInputValueChange,
    handleInputBlur: handleAdditionalAddressInputBlur,
    hasError: hasErrorAdditionalAddress,
    isValid: isValidAdditionalAddress,
  } = useSignUpUserInput(additionalAddressValidator)

  const handleAddressSearch = (address: Address) => {
    setAddressValue(address.address)
    setIsShowPostCodeModal(false)
  }

  useEffect(() => {
    if (!addressValue) return

    if (isValidAdditionalAddress) {
      dispatch(enterToAddress())
      return
    }
  }, [addressValue, isValidAdditionalAddress, dispatch])

  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex">
          <Input
            type="text"
            name="address"
            id={`${isMobile ? "m-address" : "address"}`}
            isReadOnly={true}
            classNames="mb-[10px] w-full"
            value={addressValue}
          />

          <SignUpSideButton
            content="검색"
            classNames="ml-[10px]"
            onClick={() => setIsShowPostCodeModal(true)}
          />
        </div>

        <Input
          type="text"
          name="additionalAddress"
          id={`${isMobile ? "m-additionalAddress" : "additionalAddress"}`}
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

      {isShowPostCodeModal && (
        <PostCodeModal
          isShow={isShowPostCodeModal}
          onComplete={handleAddressSearch}
          onHide={() => setIsShowPostCodeModal(false)}
        />
      )}
    </>
  )
}

export default SignUpAddressInput
