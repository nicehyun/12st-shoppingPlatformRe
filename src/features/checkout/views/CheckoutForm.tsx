"use client"

import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import { FormEvent, ReactNode } from "react"
import CheckoutButton from "./CheckoutButton"
import {
  parseAddressFromCheckoutFormEvent,
  validCheckFromCheckoutFormEvent,
} from "../models/formData"

import { useAppSelector } from "@/redux/hooks"
import {
  selectCheckoutPaymentState,
  selectCheckoutPendingProductListState,
} from "@/redux/features/checkoutSlice"
import useCheckoutPrice from "../hooks/useCheckoutPrice"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useSelectCoupon } from "../hooks/useSelectCoupon"
import { useUpdateDeliveryInfoMutation } from "@/features/common/hooks/useUpdateDeliveryInfoMutation"

interface ICheckoutForm {
  children: ReactNode
}

const CheckoutForm = ({ children }: ICheckoutForm) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )

  const { selectedCoupon } = useSelectCoupon()

  const { updateDeliveryInfoMutateAsync } = useUpdateDeliveryInfoMutation(false)
  const { mutateAsync, isCheckoutLoading } = useCheckoutMutaion()

  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)

  const { discountedPriceWithCoupon, totalPriceOfCheckedProduct } =
    useCheckoutPrice()

  const handleCheckoutSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    formData.append("payment", JSON.stringify(checkoutPaymentState))

    formData.append(
      "totalPriceOfCheckedProduct",
      JSON.stringify(totalPriceOfCheckedProduct)
    )
    formData.append(
      "discountedPriceWithCoupon",
      JSON.stringify(discountedPriceWithCoupon)
    )

    const { isValid, message } = validCheckFromCheckoutFormEvent(formData)

    if (isValid) {
      formData.append("coupon", JSON.stringify(selectedCoupon))
      formData.append("productList", JSON.stringify(checkoutPendingProductList))

      await mutateAsync(formData)
    } else {
      message && showFeedbackModalWithContent(message)
    }

    const {
      defalutAddressRegistration,
      additionalAddress,
      address,
      deliveryName,
      phone1,
      phone2,
      recipient,
      zipcode,
    } = parseAddressFromCheckoutFormEvent(formData)

    if (defalutAddressRegistration === "on") {
      await updateDeliveryInfoMutateAsync({
        additionalAddress,
        address,
        deliveryName,
        phone1,
        phone2,
        recipient,
        zipcode,
      })
    }
  }

  return (
    <form onSubmit={handleCheckoutSubmit} className="max-w-[800px] mx-auto">
      {children}

      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
