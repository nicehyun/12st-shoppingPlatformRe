import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { Product } from "@/features/common/types/product"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddHeartListMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const { sessionQuery } = useSessionQuery()

  const {
    mutateAsync: addHeartListMutateAsync,
    isLoading: isAddHeartListLoading,
  } = useMutation(
    () =>
      productHeartAPI.heartOfProduct(
        productInfo,
        "add",
        sessionQuery?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["heartList"])
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

  return { addHeartListMutateAsync, isAddHeartListLoading }
}
