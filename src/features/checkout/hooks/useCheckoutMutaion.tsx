import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { checkoutAPI } from "@/features/checkout/models/checkoutAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useCheckoutMutaion = () => {
  const { routeTo } = useNavigations()

  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading: isCheckoutLoading, mutateAsync } = useMutation(
    (formData: FormData) =>
      checkoutAPI.checkout(session?.user.accessToken, formData),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }
        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          queryClient.invalidateQueries(["checkoutList"])
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

  return {
    isCheckoutLoading,
    mutateAsync,
  }
}
