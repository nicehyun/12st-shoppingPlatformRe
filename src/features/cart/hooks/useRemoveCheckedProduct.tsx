import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductsInCart } from "../types/cart"

export const useRemoveCheckedProduct = () => {
  const queryClient = useQueryClient()
  const { sessionQuery } = useSessionQuery()
  const dispatch = useAppDispatch()

  const checkedProductRemoveMutaion = useMutation(
    (checkedProductList: ProductsInCart) =>
      cartAPI.removeCheckedProductsFromCart(
        checkedProductList,
        sessionQuery?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])
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
  return checkedProductRemoveMutaion
}
