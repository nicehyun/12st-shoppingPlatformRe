import {
  CheckoutClauseCheck,
  CheckoutList,
  CheckoutPaymentInfo,
} from "@/features/checkout/types/checkout"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import {
  selectCheckoutPaymentState,
  selectCheckoutPendingProductListState,
  selectCheckoutPlannedUseMileState,
} from "@/redux/features/checkoutSlice"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { checkoutAPI } from "@/features/checkout/models/checkoutAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { FormEventHandler } from "react"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import { useAppSelector } from "@/redux/hooks"
import useCheckoutPrice from "./useCheckoutPrice"

import { parseCheckoutForm } from "../utils/checkout"
import { useUpdateDeliveryInfoMutation } from "@/features/common/hooks/useUpdateDeliveryInfoMutation"
import { useSelectCoupon } from "./useSelectCoupon"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useCheckoutMutaion = () => {
  const { routeTo } = useNavigations()
  const { updateDeliveryInfoMutateAsync } = useUpdateDeliveryInfoMutation(false)
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  const { discountedPriceWithCoupon, totalPriceOfCheckedProduct } =
    useCheckoutPrice()
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )
  const { selectedCoupon } = useSelectCoupon()

  const { isLoading: isCheckoutLoading, mutateAsync } = useMutation(
    ({
      checkoutInfo,
      isClauseCheck,
    }: {
      checkoutInfo: CheckoutList
      isClauseCheck: Omit<CheckoutClauseCheck, "all">
    }) =>
      checkoutAPI.checkout(
        session?.user.accessToken,
        checkoutInfo,
        isClauseCheck
      ),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          queryClient.invalidateQueries(["checkoutList"])
          queryClient.invalidateQueries(["deliveryInfo"])
          queryClient.invalidateQueries(["userMile"])

          routeTo(ROUTE.CHECKOUTCOMFIRMED)

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "상품 주문에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const checkoutMutateAsync: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()

    const {
      additionalAddress,
      address,
      creditName,
      defalutAddressRegistration,
      deliveryInfoTab,
      deliveryMemo,
      deliveryName,
      period,
      phone1,
      phone2,
      recipient,
      zipcode,
      collectionOfUserInfo,
      paymentAgencyClause,
      provisionOfUserInfo,
    } = parseCheckoutForm(event)

    const productList = checkoutPendingProductList
    const coupon = selectedCoupon
    const useMile = checkoutPlannedUseMileState

    const checkoutPayment: CheckoutPaymentInfo =
      checkoutPaymentState.value === "credit"
        ? {
            selectedPayment: checkoutPaymentState.value,
            creditName,
            period,
          }
        : {
            selectedPayment: checkoutPaymentState.value,
          }

    const payment = checkoutPayment

    const isRecipientValid = nameValidator(recipient)

    if (!isRecipientValid) {
      showFeedbackModalWithContent("올바른 수령인 이름을 입력해주세요.")

      return
    }

    const isAddressValid = !!address
    const isAdditionalAddressValid =
      additionalAddressValidator(additionalAddress)
    if (!isAddressValid) {
      showFeedbackModalWithContent("배송지 주소를 입력해주세요.")

      return
    }

    if (!isAdditionalAddressValid) {
      showFeedbackModalWithContent("올바른 배송지 상세 주소를 입력해주세요.")

      return
    }

    const isPhone1Valid = phoneValidator(phone1)
    if (!isPhone1Valid) {
      showFeedbackModalWithContent("올바른 연락처를 입력해주세요.")

      return
    }

    if (
      checkoutPlannedUseMileState >
      totalPriceOfCheckedProduct - discountedPriceWithCoupon
    ) {
      showFeedbackModalWithContent(
        "상품 가격보다 마일리지를 많이 사용하실 수 없습니다."
      )

      return
    }

    if (checkoutPaymentState.value === "credit" && !creditName) {
      showFeedbackModalWithContent("카드사를 선택해주세요.")

      return
    }

    if (
      collectionOfUserInfo !== "on" ||
      provisionOfUserInfo !== "on" ||
      paymentAgencyClause !== "on"
    ) {
      showFeedbackModalWithContent("결제를 위해 필수사항에 모두 동의해주세요.")

      return
    }

    const checkoutInfo: CheckoutList = {
      deliveryName,
      recipient,
      zipcode,
      address,
      additionalAddress,
      phone1,
      phone2,
      deliveryMemo,
      productList,
      coupon,
      useMile,
      payment,
      getMile: 0,
      checkoutDate: "",
      checkoutNumber: "",
    }

    const isUpdateDeliveryInfo =
      deliveryInfoTab === "0" || defalutAddressRegistration === "on"

    if (isUpdateDeliveryInfo) {
      const updateDeliveryInfo = {
        deliveryName,
        recipient,
        additionalAddress,
        address,
        zipcode,
        phone1,
        phone2,
      }

      updateDeliveryInfoMutateAsync(updateDeliveryInfo)
    }

    mutateAsync({
      checkoutInfo,
      isClauseCheck: {
        collectionOfUserInfo: !!collectionOfUserInfo,
        provisionOfUserInfo: !!provisionOfUserInfo,
        paymentAgency: !!paymentAgencyClause,
      },
    })
  }

  return {
    isCheckoutLoading,
    checkoutMutateAsync,
  }
}
