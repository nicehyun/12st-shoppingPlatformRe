import { useQuery } from "@tanstack/react-query"
import { productDeatilAPI } from "../model/productDetailAPI"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { isFeedbackError } from "@/features/common/utils/error"

export const useGetProductDetailQuery = (productId: string) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { data, isLoading, isError } = useQuery(
    ["product", productId],
    () => productDeatilAPI.getProductInfo(productId),
    {
      onSuccess: (data) => {
        if (isFeedbackError(data)) {
          if (data.status === 401) {
            showFeedbackModalWithErrorMessage(data.error ?? "")

            return
          }
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },

      staleTime: 60 * 60 * 1000,
    }
  )

  const productDetail = !isFeedbackError(data) && data ? data : null

  return {
    productDetail,
    isLoading,
    isError,
  }
}
