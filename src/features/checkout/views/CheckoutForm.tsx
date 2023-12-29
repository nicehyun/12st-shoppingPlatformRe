"use client"

import {
  selectCheckoutPaymentState,
  selectCheckoutPendingProductListState,
  selectCheckoutPlannedUseMileState,
} from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FormEventHandler, Suspense } from "react"
import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"

import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./DeliveryInfo"
import CheckoutButton from "./CheckoutButton"

import {
  CheckoutList,
  CheckoutPaymentInfo,
} from "@/features/checkout/types/checkout"
import CheckoutPayment from "./CheckoutPayment"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import useSelectCoupon from "@/features/checkout/hooks/useSelectCoupon"
import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

import useCheckoutPrice from "../hooks/useCheckoutPrice"
import Loading from "@/features/common/views/Loading"

const CheckoutForm = () => {
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  const { selectedCoupon } = useSelectCoupon()
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )

  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )
  const { discountedPriceWithCoupon, totalPriceOfCheckedProduct } =
    useCheckoutPrice()

  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()

  const { checkoutMutateAsync, isCheckoutLoading } = useCheckoutMutaion()

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
    const isAdditionalAddressValid = !!additionalAddressValidator(
      formData.get("additionalAddress") as string
    )

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
          modalContent: "올바른 배송지 상세 주소를 입력해주세요",
        })
      )
      return
    }

    const isPhone1Valid = !!phoneValidator(formData.get("phone1") as string)
    if (!isPhone1Valid) {
      dispatch(
        showFeedbackModal({
          modalContent: "올바른 수령인의 연락처를 입력해주세요",
        })
      )
      return
    }

    if (
      checkoutPlannedUseMileState >
      totalPriceOfCheckedProduct - discountedPriceWithCoupon
    ) {
      dispatch(
        showFeedbackModal({
          modalContent: "상품 가격보다 마일리지를 많이 사용하실 수 없습니다",
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
      deliveryName: formData.get("deliveryName")
        ? (formData.get("deliveryName") as string)
        : null,
      recipient: formData.get("recipient") as string,
      zipcode: formData.get("zipcode") as string,
      address: formData.get("address") as string,
      additionalAddress: formData.get("additionalAddress") as string,
      phone1: formData.get("phone1") as string,
      phone2: formData.get("phone2")
        ? (formData.get("phone2") as string)
        : null,
      deliveryMemo: handleDeliveryMemo(),
      productList: checkoutPendingProductList,
      coupon: selectedCoupon,
      useMile: checkoutPlannedUseMileState,
      getMile: 0,
      payment: checkoutPayment,
      checkoutDate: "",
      checkoutNumber: "",
    }

    const deliveryInfoTab = formData.get("deliveryInfo-tab") as "0" | "1"
    const isUpdateDeliveryInfo =
      deliveryInfoTab === "0" || defalutAddressRegistration === "on"

    const response = await checkoutMutateAsync({
      checkoutInfo,
      isClauseCheck: {
        collectionOfUserInfo: !!collectionOfUserInfo,
        provisionOfUserInfo: !!provisionOfUserInfo,
        paymentAgency: !!paymentAgencyClause,
      },
      isUpdateDeliveryInfo,
    })

    if (response?.status === 200) {
      routeTo(ROUTE.CHECKOUTCOMFIRMED, true)
    } else {
      routeTo(ROUTE.HOME, true)
    }
  }

  return (
    <form onSubmit={handleCheckoutSubmit} className="max-w-[800px] mx-auto">
      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <DeliveryInfo />
      </Suspense>

      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutTotalPriceInfo />
      <CheckoutClause />
      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
