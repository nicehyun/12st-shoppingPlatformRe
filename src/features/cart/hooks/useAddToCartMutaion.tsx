import { Product } from "@/common/types/product"
import { addProductToCart } from "@/firebase/firestore/cart"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import { useMutation, useQueryClient } from "@tanstack/react-query"

const useAddToCartMutaion = (email: string, productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const addMutaion = useMutation(
    () => addProductToCart(email, productInfo.id),
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

export default useAddToCartMutaion
