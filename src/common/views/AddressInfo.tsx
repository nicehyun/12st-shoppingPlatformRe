"use client"

import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"
import { ChangeEvent, useEffect } from "react"
import { usePostCodeModal } from "../hooks/usePostCodeModal"
import Input from "./Input"

interface IAddressInfo {
  zipcode?: string
  address?: string
  additionalAddress?: {
    value: string
    handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleInputBlur: () => void
    hasError: boolean
    reset: () => void
  }
  className?: string
}

const AddressInfo = ({
  additionalAddress,
  address,
  zipcode,
  className,
}: IAddressInfo) => {
  const {
    addressValue,
    zipcodeValue,
    postCodeModalComponent,
    resetAddressValue,
    showPostCodeModal,
    changeZipcodeValue,
    changeAddreddValue,
  } = usePostCodeModal()

  useEffect(() => {
    return () => {
      resetAddressValue()
      additionalAddress?.reset()
    }
  }, [])

  useEffect(() => {
    if (zipcode) {
      changeZipcodeValue(zipcode)
    }

    if (address) {
      changeAddreddValue(address)
    }
  }, [zipcode, address])
  return (
    <div className={`${className} flex flex-col flex-grow`}>
      <div className="flex">
        <Input
          type="text"
          name="zipcode"
          id="zipcode"
          isReadOnly={true}
          classNames="mb-[10px] flex-grow h-[50px] sm:h-[40px] md:h-[44px]"
          value={zipcodeValue}
        />

        <SignUpSideButton
          content="검색"
          classNames="ml-[10px] h-[50px] sm:h-[40px] md:h-[44px]"
          onClick={showPostCodeModal}
        />
      </div>

      <Input
        type="text"
        name="address"
        id="address"
        isReadOnly={true}
        classNames="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]"
        value={addressValue}
      />

      <Input
        type="text"
        name="additionalAddress"
        id="additionalAddress"
        placeholder="배송지 상세 주소를 입력해주세요"
        value={additionalAddress?.value}
        onBlur={additionalAddress?.handleInputBlur}
        isShowFeedback={additionalAddress?.hasError}
        onChange={additionalAddress?.handleValueChange}
        classNames="h-[50px] w-full sm:h-[40px] md:h-[44px]"
        maxLength={50}
      />

      {postCodeModalComponent}
    </div>
  )
}

export default AddressInfo
