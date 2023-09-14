"use client"
import { updateAddress } from "@/firebase/firestore/address"
import { FormEventHandler } from "react"
import useSessionQuery from "../auth/signIn/hooks/useSessionQuery"
import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import CheckoutPayment from "./CheckoutPayment"
import CheckoutPaymentAmountInfo from "./CheckoutPaymentAmountInfo"
import DeliveryInfo from "./DeliveryInfo"

const CheckoutForm = () => {
  const { sessionQuery } = useSessionQuery()
  console.log(sessionQuery?.user)

  const testSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (sessionQuery?.user === undefined) return

    const formData = new FormData(event.currentTarget)

    // const deliveryName = formData.get("deliveryName") as string
    // console.log(deliveryName)

    // const recipient = formData.get("recipient") as string
    // console.log(recipient)
    const zipcode = formData.get("zipcode") as string
    const address = formData.get("address") as string
    const additionalAddress = formData.get("additionalAddress") as string

    // const phone1 = formData.get("phone1") as string
    // console.log(phone1)

    // const phone2 = formData.get("phone2") as string
    // console.log(phone2)

    const defalutAddressRegistration = formData.get(
      "defalutAddressRegistration"
    ) as "on" | null

    if (defalutAddressRegistration === "on") {
      updateAddress(sessionQuery.user.email, {
        address,
        additionalAddress,
        zipcode,
      })
    }

    // const deliveryMemoSelect = formData.get("deliveryMemo-select")
    // console.log(deliveryMemoSelect)

    // const DirectDeliveryMemo = formData.get("deliveryMemo-direct") as string
    // console.log(DirectDeliveryMemo)
  }

  return (
    <form onSubmit={testSubmit}>
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutPaymentAmountInfo />
      <CheckoutClause />
    </form>
  )
}

export default CheckoutForm
