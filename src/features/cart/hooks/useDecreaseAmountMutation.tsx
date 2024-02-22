import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductInCart } from "../types/cart"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

export const useDecreaseAmountMutation = (productInCartInfo: ProductInCart) => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { mutateAsync, isLoading } = useMutation(
    () =>
      cartAPI.decreaseProductInCart(
        productInCartInfo,
        session?.user.accessToken
      ),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          return
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
