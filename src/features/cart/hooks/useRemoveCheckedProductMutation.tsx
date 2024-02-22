import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { ProductsInCart } from "../types/cart"

export const useRemoveCheckedProductMutation = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()

  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { mutateAsync, isLoading } = useMutation(
    (checkedProductList: ProductsInCart) =>
      cartAPI.removeCheckedProductListInCart(
        checkedProductList,
        session?.user.accessToken
      ),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          showFeedbackModalWithContent("장바구니에서 상품을 제거하였습니다.")
        }

        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return { mutateAsync, isLoading }
}
