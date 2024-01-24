import { CheckoutList } from "@/features/checkout/types/checkout"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { useMutation } from "@tanstack/react-query"
import { checkoutAPI } from "@/features/checkout/models/checkoutAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useCheckoutMutaion = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { session } = useSessionQuery()

  const { isLoading: isCheckoutLoading, mutateAsync: checkoutMutateAsync } =
    useMutation<
      Response | undefined,
      unknown,
      {
        checkoutInfo: CheckoutList
        isClauseCheck: Omit<CheckoutClauseCheck, "all">
        isUpdateDeliveryInfo: boolean
      }
    >(
      ({ checkoutInfo, isClauseCheck, isUpdateDeliveryInfo }) =>
        checkoutAPI.checkout(
          checkoutInfo,
          isClauseCheck,
          isUpdateDeliveryInfo,
          session?.user.accessToken
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
