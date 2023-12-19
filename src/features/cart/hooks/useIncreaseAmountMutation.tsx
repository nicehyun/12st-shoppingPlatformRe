import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductInCart } from "../types/cart"

const useIncreaseAmountMutation = (productInCartInfo: ProductInCart) => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const increaseMutaion = useMutation(
    () =>
      cartAPI.increaseProductToCart(
        productInCartInfo,
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

  return increaseMutaion
}

export default useIncreaseAmountMutation
