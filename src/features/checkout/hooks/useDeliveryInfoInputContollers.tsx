import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import { useGetDeliveryInfoQuery } from "@/features/common/hooks/useGetDeliveryInfoQuery"
import { usePostCodeModal } from "@/features/common/hooks/usePostCodeModal"
import { useUserInput } from "@/features/common/hooks/useUserInput"
import { ChangeEvent, useEffect, useState } from "react"
import { useAppSelector } from "@/redux/hooks"
import { selectDeliveryTabValueState } from "@/redux/features/checkoutSlice"

export const useDeliveryInfoInputContollers = () => {
  const deliveryTabValueState = useAppSelector(selectDeliveryTabValueState)
  const { deliveryInfo, isLoading } = useGetDeliveryInfoQuery()

  const [deliveryName, setDeliveryName] = useState("")

  const recipientInput = useUserInput(nameValidator, deliveryInfo?.recipient)

  const additionalInput = useUserInput(
    additionalAddressValidator,
    deliveryInfo?.additionalAddress
  )

  const {
    addressValue,
    zipcodeValue,
    postCodeModalComponent,
    showPostCodeModal,
    changeZipcodeValue,
    changeAddreddValue,
  } = usePostCodeModal()

  const phone1Input = useUserInput(phoneValidator, deliveryInfo?.phone1)
  const phone2Input = useUserInput(phoneValidator, deliveryInfo?.phone2 ?? "")

  const handleDeliveryNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeliveryName(event.target.value)
  }

  const handlePhone1InputValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(Number(event.target.value))) {
      return
    }

    phone1Input.handleValueChange(event)
  }

  const handlePhone2InputValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(Number(event.target.value))) {
      return
    }

    phone2Input.handleValueChange(event)
  }

  useEffect(() => {
    if (deliveryTabValueState === 1) {
      recipientInput.reset()
      additionalInput.reset()
      changeZipcodeValue("")
      changeAddreddValue("")
      phone1Input.reset()
      phone2Input.reset()
    }
  }, [deliveryTabValueState])

  useEffect(() => {
    if (deliveryTabValueState === 0) {
      if (deliveryInfo?.deliveryName) {
        setDeliveryName(deliveryInfo.deliveryName)
      }

      if (deliveryInfo?.zipcode) {
        changeZipcodeValue(deliveryInfo.zipcode)
      }

      if (deliveryInfo?.address) {
        changeAddreddValue(deliveryInfo.address)
      }

      if (deliveryInfo?.address) {
        changeAddreddValue(deliveryInfo.address)
      }
    }
  }, [deliveryInfo, deliveryTabValueState])

  return {
    deliveryName: {
      value: deliveryName,
      handleValueChange: handleDeliveryNameChange,
    },
    recipient: recipientInput,
    address: {
      zipcode: zipcodeValue,
      address: addressValue,
      additionalAddress: additionalInput,
      showPostCodeModal,
      postCodeModalComponent,
    },
    phone1Input: {
      ...phone1Input,
      handleValueChange: handlePhone1InputValueChange,
    },
    phone2Input: {
      ...phone2Input,
      handleValueChange: handlePhone2InputValueChange,
    },
    isLoading,
  }
}
