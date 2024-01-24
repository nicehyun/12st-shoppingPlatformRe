import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductsInCart } from "../types/cart"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useRemoveCheckedProductMutation = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()

  const { mutateAsync, isLoading } = useMutation(
    (checkedProductList: ProductsInCart) =>
      cartAPI.removeCheckedProductsFromCart(
        checkedProductList,
        session?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])

        dispatch(
          showFeedbackModal({
            modalContent: "장바구니에서 선택한 상품을 제거하였습니다.",
          })
        )
      },
      onError: () => {
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        )
      },
    }
  )

  const removeCheckedProductMutateAsync = async (
    checkedProductList: ProductsInCart
  ) => {
    if (isLoading && checkedProductList.length === 0) return

    if (shouldProceedWithRouting(!!session)) {
      mutateAsync(checkedProductList)
    }
  }

  return { removeCheckedProductMutateAsync, isLoading }
}
