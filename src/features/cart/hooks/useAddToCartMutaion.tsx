import useSessionQuery from "@/app/api/user/[email]/useSessionQuery"
import { Product } from "@/common/types/product"
import { addProductToCart } from "@/firebase/firestore/cart"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddToCartMutaion = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const { sessionQuery } = useSessionQuery()

  const addMutaion = useMutation(
    () => addProductToCart(sessionQuery?.user.email ?? "", productInfo.id),
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

  return addMutaion
}
