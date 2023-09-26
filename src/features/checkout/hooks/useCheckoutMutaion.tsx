import { CheckoutList } from "@/common/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/auth/signUp/hooks/useFeedbackModal"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { useMutation } from "@tanstack/react-query"

import { checkoutAPI } from "../models/checkoutApi"

export const useCheckoutMutaion = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { sessionQuery } = useSessionQuery()

  const { isLoading: isCheckoutLoading, mutateAsync: checkoutMutateAsync } =
    useMutation<
      Response | undefined,
      unknown,
      {
        checkoutInfo: CheckoutList
        isDefalutAddressCheck: boolean
        isClauseCheck: Omit<CheckoutClauseCheck, "all">
      }
    >(
      ({ checkoutInfo, isDefalutAddressCheck, isClauseCheck }) =>
        checkoutAPI.checkout(
          checkoutInfo,
          sessionQuery?.user.email ?? "",
          isDefalutAddressCheck,
          isClauseCheck
        ),
      {
        onError: () => {
          showFeedbackModalWithContent(
            "상품 주문에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
          )
        },
      }
    )

  return {
    isCheckoutLoading,
    checkoutMutateAsync,
  }
}
