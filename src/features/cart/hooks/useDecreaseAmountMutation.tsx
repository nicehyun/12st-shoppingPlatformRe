import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { decreaseProductToCart } from "@/firebase/firestore/cart"
import { showFeedbackModal } from "@/redux/features/modalSlice"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

const useDecreaseAmountMutation = (productId: string) => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const decreaseMutaion = useMutation(
    () => decreaseProductToCart(sessionQuery?.user.email ?? "", productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])
      },
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )

  return decreaseMutaion
}

export default useDecreaseAmountMutation
