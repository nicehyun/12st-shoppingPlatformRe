"use client"

import Input from "@/common/views/Input"
import PostCodeModal from "@/common/views/PostCodeModal"
import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"
import { enterToAddress } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"
import { Address } from "react-daum-postcode"
import { IMSignUpAddressInput } from "./mobile/MSignUpAddressInput"
import SignUpFeedback from "./SignUpFeedback"

const SignUpAddressInput = ({
  additionalAddressInputValue,
  hasErrorAdditionalAddress,
  onBlurAdditionalAddressInput,
  onChangeAdditionalAddressInputValue,
  reset,
}: IMSignUpAddressInput) => {
  const dispatch = useAppDispatch()

  const [isShowPostCodeModal, setIsShowPostCodeModal] = useState(false)
  const [addressValue, setAddressValue] = useState("")

  const handleAddressSearch = (address: Address) => {
    dispatch(enterToAddress())
    setAddressValue(address.address)
    setIsShowPostCodeModal(false)
  }

  return (
    <>
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
            onClick={() => setIsShowPostCodeModal(true)}
          />
        </div>

        <Input
          type="text"
          name="additionalAddress"
          id="additionalAddress"
          placeholder="나머지 주소를 입력해주세요"
          value={additionalAddressInputValue}
          onBlur={onBlurAdditionalAddressInput}
          isShowFeedback={hasErrorAdditionalAddress}
          onChange={onChangeAdditionalAddressInputValue}
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
