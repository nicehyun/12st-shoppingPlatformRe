import { useQuery } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { isFeedbackError } from "@/features/common/utils/error"

export const useGetProductListInCartQuery = () => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { data, isLoading } = useQuery(
    ["productListInCart"],
    () => cartAPI.getProductListInCart(session?.user.accessToken),
    {
      staleTime: 60 * 60 * 1000,
      enabled: !!session,
      onSuccess(data) {
        if (isFeedbackError(data)) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "장바구니 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const productListInCart = !isFeedbackError(data) && data ? data : []

  const isCartLimited = productListInCart.length >= 10

  return {
    isLoading,
    productListInCart,
    isCartLimited,
  }
}
