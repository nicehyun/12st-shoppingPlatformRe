import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { Product } from "@/features/common/types/product"
import { useAuthenticate } from "@/features/auth/signIn/hooks/useAuthenticate"

const useRemoveFromCartMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const { sessionQuery } = useSessionQuery()
  const dispatch = useAppDispatch()
  const { authentication } = useAuthenticate()

  const removeMutaion = useMutation(
    () =>
      cartAPI.removeProductFromCart(
        productInfo,
        sessionQuery?.user.accessToken
      ),
    {
      onMutate: () => {
        authentication()
      },
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

  const removeMutate = async () => {
    if (removeMutaion.isLoading) return

    removeMutaion.mutate()
  }

  return { removeMutate, isLoading: removeMutaion.isLoading }
}

export default useRemoveFromCartMutation
