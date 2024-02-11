import { useMutation } from "@tanstack/react-query"
import { productDeatilAPI } from "@/features/productDetail/model/productDetailAPI"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { ChangeEvent, useState } from "react"
import { isFeedbackError } from "@/features/common/utils/error"

export const useSearchProductInfoMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const [productSearchInputValue, setProductSearchInputValue] = useState("")

  const { data, isLoading, mutateAsync } = useMutation(
    (productId: string) => productDeatilAPI.getProductInfo(productId),

    {
      onSuccess(data) {
        if (isFeedbackError(data)) {
          if (data.status === 401) {
            showFeedbackModalWithErrorMessage(data.error ?? "")
            return
          }
        } else {
          showFeedbackModalWithContent("상품 조회를 완료했습니다.")
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "상품 검색을 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const searchProductInfo = !isFeedbackError(data) && data ? data : null

  const handleProductSearchInputValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(Number(event.target.value))) return

    if (event.target.value.length === 12) return

    setProductSearchInputValue(event.target.value)
  }

  const searchProductInfoMutateAsync = async () => {
    if (searchProductInfo?.id === productSearchInputValue || isLoading) return

    await mutateAsync(productSearchInputValue)
  }
  return {
    isLoading,
    searchProductInfoMutateAsync,
    productSearchInputValue,
    handleProductSearchInputValueChange,
    searchProductInfo,
  }
}
