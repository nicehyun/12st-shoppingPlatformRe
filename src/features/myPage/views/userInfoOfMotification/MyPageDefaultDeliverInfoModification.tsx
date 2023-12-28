"use client"

import { useUserInput } from "@/features/common/hooks/useUserInput"
import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import Button from "@/features/common/views/Button"
import Loading from "@/features/common/views/Loading"
import { additionalAddressValidator } from "@/features/auth/signUp/utils/validation"
import { useGetDefaultDeliveryInfoQuery } from "@/features/checkout/hooks/useGetDefaultDeliveryInfoQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import useDefaultDeliveryinfoModificaitionMutation from "../../hooks/useDefaultDeliveryinfoModificaitionMutation"
import MyPageDefaultDeliveryAddressModification, {
  IMyPageDefaultDeliveryAddressModification,
} from "./MyPageDefaultDeliveryAddressModification"
import MyPageDefaultDeliveryNameAndRecipient, {
  IMyPageDefaultDeliveryNameAndRecipient,
} from "./MyPageDefaultDeliveryNameAndRecipient"
import MyPageDefaultDeliveryPhoneModification, {
  IMyPageDefaultDeliveryPhoneModification,
} from "./MyPageDefaultDeliveryPhoneModification"
import MyPageListLoading from "../MyPageListLoading"

const MyPageDefaultDeliverInfoModification = () => {
  const dispatch = useAppDispatch()
  const { deliveryInfo, isLoading: isGetDeliveryInfoLoading } =
    useGetDefaultDeliveryInfoQuery()

  const { mutateAsync: defalutDeliveryInfoModificationMutateAsync, isLoading } =
    useDefaultDeliveryinfoModificaitionMutation()

  const additionalAddressInput = useUserInput(
    additionalAddressValidator,
    deliveryInfo?.additionalAddress
  )

  const handleDefaultAddressModification = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    if (!deliveryInfo) return

    const formData = new FormData(event.currentTarget)
    const inputsToBeUpdated: DeliveryInfo = {
      deliveryName: formData.get("deliveryName")
        ? (formData.get("deliveryName") as string)
        : null,
      recipient: formData.get("recipient") as string,
      zipcode: formData.get("zipcode") as string,
      address: formData.get("address") as string,
      additionalAddress: additionalAddressInput.value,
      phone1: formData.get("phone1") as string,
      phone2: formData.get("phone2")
        ? (formData.get("phone2") as string)
        : null,
    }

    if (
      Object.keys(deliveryInfo).every(
        (key) => deliveryInfo[key] === inputsToBeUpdated[key]
      )
    ) {
      dispatch(
        showFeedbackModal({ modalContent: "주소 정보가 기존과 동일합니다" })
      )

      return
    }

    await defalutDeliveryInfoModificationMutateAsync(inputsToBeUpdated)
    dispatch(showFeedbackModal({ modalContent: "주소정보가 변경되었습니다" }))
  }

  const myPageDefaultDeliveryNameAndRecipientProps: IMyPageDefaultDeliveryNameAndRecipient =
    {
      deliveryInfo: {
        deliveryName: deliveryInfo?.deliveryName ?? null,
        recipient: deliveryInfo?.recipient ?? "",
      },
    }

  const myPageDefaultDeliveryPhoneModificationProps: IMyPageDefaultDeliveryPhoneModification =
    {
      phoneInfo: {
        phone1: deliveryInfo?.phone1 ?? "",
        phone2: deliveryInfo?.phone2 ?? null,
      },
    }

  const myPageDefaultDeliveryAddressModificationProps: IMyPageDefaultDeliveryAddressModification =
    {
      addressInfo: {
        zipcode: deliveryInfo?.zipcode ?? "",
        address: deliveryInfo?.address ?? "",
        additionalAddress: deliveryInfo?.additionalAddress ?? "",
      },
    }

  if (isGetDeliveryInfoLoading) {
    return <MyPageListLoading />
  }

  return (
    <form onSubmit={handleDefaultAddressModification}>
      <MyPageDefaultDeliveryNameAndRecipient
        {...myPageDefaultDeliveryNameAndRecipientProps}
      />

      <MyPageDefaultDeliveryAddressModification
        {...myPageDefaultDeliveryAddressModificationProps}
      />

      <MyPageDefaultDeliveryPhoneModification
        {...myPageDefaultDeliveryPhoneModificationProps}
      />

      <Button
        type="submit"
        content={
          isLoading ? (
            <Loading
              spinnerSize={{ width: "w-[15px]", height: "h-[15px]" }}
              isFrame={false}
            />
          ) : (
            "저장하기"
          )
        }
        isDisabled={isLoading}
        classNames="mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
      />
    </form>
  )
}

export default MyPageDefaultDeliverInfoModification
