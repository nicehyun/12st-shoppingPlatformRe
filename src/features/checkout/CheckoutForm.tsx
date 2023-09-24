"use client"

import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import { FormEventHandler } from "react"
import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"

import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./DeliveryInfo"
import CheckoutButton from "./CheckoutButton"
import useSelectCoupon from "../cart/hooks/useSelectCoupon"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useCheckoutMutaion } from "./hooks/useCheckoutMutaion"
import { CheckoutList, CheckoutPaymentInfo } from "@/common/types/checkout"
import CheckoutPayment from "./CheckoutPayment"

// TODO : Submit 설정하기
const CheckoutForm = () => {
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  const { selectedCoupon } = useSelectCoupon()
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const checkoutMutation = useCheckoutMutaion()

  const testSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // TODO : 약관 미체크 시 피드백 모달!
    // const collectionOfUserInfo = formData.get("collectionOfUserInfo") as string
    // console.log(collectionOfUserInfo)

    // const provisionOfUserInfo = formData.get("provisionOfUserInfo") as string
    // console.log(provisionOfUserInfo)

    // const paymentAgencyClause = formData.get("paymentAgencyClause") as string
    // console.log(paymentAgencyClause)
    // formData.append("prodcutList", `${checkedProductList}`)

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

    // TODO : 신용/체크카드 선택 시 카드 선택 체크!
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
    <form onSubmit={testSubmit} className="max-w-[800px] mx-auto">
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
