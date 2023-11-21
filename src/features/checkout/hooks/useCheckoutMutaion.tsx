import { CheckoutList } from "@/common/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/common/hooks/useFeedbackModal"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { useMutation } from "@tanstack/react-query"
<<<<<<< HEAD
import { checkoutAPI } from "../models/checkoutApi"
=======
import { checkoutAPI } from "../models/checkoutAPI"
>>>>>>> 120e7d35f4b4673d70b178580e9b977497e227e3

export const useCheckoutMutaion = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { sessionQuery } = useSessionQuery()

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
          sessionQuery?.user.email ?? "",
          isClauseCheck,
          isUpdateDeliveryInfo
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
