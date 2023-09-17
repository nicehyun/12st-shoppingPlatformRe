"use client"
import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import { updateAddress } from "@/firebase/firestore/address"
import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import { FormEventHandler } from "react"
import useSessionQuery from "../auth/signIn/hooks/useSessionQuery"
import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import CheckoutPayment from "./CheckoutPayment"
import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./DeliveryInfo"
import MCheckoutButton from "./MCheckoutButton"

const CheckoutForm = () => {
  const { sessionQuery } = useSessionQuery()
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)

  const testSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (sessionQuery?.user === undefined) return

    const formData = new FormData(event.currentTarget)

    const deliveryName = formData.get("deliveryName") as string
    console.log(deliveryName)

    const recipient = formData.get("recipient") as string
    console.log(recipient)

    const zipcode = formData.get("zipcode") as string
    const address = formData.get("address") as string
    const additionalAddress = formData.get("additionalAddress") as string
    console.log(zipcode + " " + address + " " + additionalAddress)

    const phone1 = formData.get("phone1") as string
    console.log(phone1)

    const phone2 = formData.get("phone2") as string
    console.log(phone2)

    const defalutAddressRegistration = formData.get(
      "defalutAddressRegistration"
    ) as "on" | null

    if (defalutAddressRegistration === "on") {
      await updateAddress(sessionQuery.user.email, {
        address,
        additionalAddress,
        zipcode,
      })
    }

    const deliveryMemoSelect = formData.get("deliveryMemo-select")
    console.log(deliveryMemoSelect)

    const DirectDeliveryMemo = formData.get("deliveryMemo-direct") as string
    console.log(DirectDeliveryMemo)

    console.log(checkoutPaymentState)
    if (checkoutPaymentState.value === "credit") {
      const creditSelect = formData.get("credit-select")
      console.log(creditSelect)
      const periodSelect = formData.get("period-select")
      console.log(periodSelect)
    }

    const collectionOfUserInfo = formData.get("collectionOfUserInfo") as string
    console.log(collectionOfUserInfo)

    const provisionOfUserInfo = formData.get("provisionOfUserInfo") as string
    console.log(provisionOfUserInfo)

    const paymentAgencyClause = formData.get("paymentAgencyClause") as string
    console.log(paymentAgencyClause)

    console.log(
      "----------------------------------------------------------------"
    )
    console.log(
      "----------------------------------------------------------------"
    )
    console.log(
      "----------------------------------------------------------------"
    )
  }

  return (
    <form onSubmit={testSubmit}>
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutTotalPriceInfo />
      {/* <PcConditionComponent component={<CouponBar />} /> */}
      <CheckoutClause />
      <MobileViewConditionComponent component={<MCheckoutButton />} />
    </form>
  )
}

export default CheckoutForm
