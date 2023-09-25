"use client"

import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FormEventHandler } from "react"
import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"

import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./DeliveryInfo"
import CheckoutButton from "./CheckoutButton"

import { selectCheckedProductList } from "@/redux/features/cartSlice"

import { CheckoutList, CheckoutPaymentInfo } from "@/common/types/checkout"
import CheckoutPayment from "./CheckoutPayment"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import useSelectCoupon from "@/features/cart/hooks/useSelectCoupon"
import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import { nameValidator } from "@/features/auth/signUp/utils/validation"

const CheckoutForm = () => {
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  const { selectedCoupon } = useSelectCoupon()
  const checkedProductList = useAppSelector(selectCheckedProductList)
  const dispatch = useAppDispatch()

  const checkoutMutation = useCheckoutMutaion()

  const handleCheckoutSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const isRecipientValid = nameValidator(formData.get("recipient") as string)

    if (!isRecipientValid) {
      dispatch(
        showFeedbackModal({
          modalContent: "올바른 수령인 이름을 입력해주세요",
        })
      )
      return
    }

    const isAddressValid = !!(formData.get("address") as string)
    const isAdditionalAddressValid = !!(formData.get(
      "additionalAddress"
    ) as string)

    if (!isAddressValid) {
      dispatch(
        showFeedbackModal({
          modalContent: "배송지 주소를 입력해주세요",
        })
      )
      return
    }

    if (!isAdditionalAddressValid) {
      dispatch(
        showFeedbackModal({
          modalContent: "배송지 상세 주소를 입력해주세요",
        })
      )
      return
    }

    const isPhone1Valid = !!(formData.get("phone1") as string)
    if (!isPhone1Valid) {
      dispatch(
        showFeedbackModal({
          modalContent: "올바른 수령인의 연락처를 입력해주세요",
        })
      )
      return
    }

    if (
      checkoutPaymentState.value === "credit" &&
      !(formData.get("credit-select") as string)
    ) {
      dispatch(
        showFeedbackModal({
          modalContent: "카드사를 선택해주세요",
        })
      )
      return
    }

    const collectionOfUserInfo = formData.get("collectionOfUserInfo") as string
    const provisionOfUserInfo = formData.get("provisionOfUserInfo") as string
    const paymentAgencyClause = formData.get("paymentAgencyClause") as string

    if (
      collectionOfUserInfo !== "on" ||
      provisionOfUserInfo !== "on" ||
      paymentAgencyClause !== "on"
    ) {
      dispatch(
        showFeedbackModal({
          modalContent: "결제를 위해 필수사항에 모두 동의해주세요",
        })
      )
      return
    }

    const defalutAddressRegistration = formData.get(
      "defalutAddressRegistration"
    ) as "on" | null

    const handleDeliveryMemo = () => {
      const selectedDeliveryMemo = formData.get("deliveryMemo-select")
        ? (formData.get("deliveryMemo-select") as string)
        : null

      const DirectDeliveryMemo = formData.get("deliveryMemo-direct") as string

      if (!selectedDeliveryMemo) return null

      if (selectedDeliveryMemo === "직접입력") return DirectDeliveryMemo

      return selectedDeliveryMemo
    }

    const checkoutPayment: CheckoutPaymentInfo =
      checkoutPaymentState.value === "credit"
        ? {
            selectedPayment: checkoutPaymentState.value,
            creditName: formData.get("credit-select") as string,
            period: formData.get("period-select") as string,
          }
        : {
            selectedPayment: checkoutPaymentState.value,
          }

    const checkoutInfo: CheckoutList = {
      deliveryName: formData.get("deliveryName") as string,
      recipient: formData.get("recipient") as string,
      zipcode: formData.get("zipcode") as string,
      address: formData.get("address") as string,
      additionalAddress: formData.get("additionalAddress") as string,
      phone1: formData.get("phone1") as string,
      phone2: formData.get("phone2")
        ? (formData.get("phone2") as string)
        : null,
      deliveryMemo: handleDeliveryMemo(),
      prductList: checkedProductList,
      coupon: selectedCoupon,
      useMile: +(formData.get("useMile") as string),
      getMile: 0,
      payment: checkoutPayment,
    }

    const response = checkoutMutation.mutateAsync({
      checkoutInfo,
      isDefalutAddressCheck: defalutAddressRegistration === "on",
    })
  }

  return (
    <form onSubmit={handleCheckoutSubmit} className="max-w-[800px] mx-auto">
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutTotalPriceInfo />
      <CheckoutClause />
      <CheckoutButton />
    </form>
  )
}

export default CheckoutForm