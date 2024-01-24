import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { Product } from "@/features/common/types/product"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddHeartListMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { session } = useSessionQuery()

  const { mutateAsync, isLoading: isAddHeartListLoading } = useMutation(
    () =>
      productHeartAPI.heartOfProduct(
        productInfo,
        "add",
        session?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["heartList"])

        dispatch(
          showFeedbackModal({
            modalContent: "상품이 HEART에 추가되었습니다.",
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

  const addHeartListMutateAsync = async () => {
    if (isAddHeartListLoading) return

    if (shouldProceedWithRouting(!!session)) {
      mutateAsync()
    }
  }

  return { addHeartListMutateAsync, isAddHeartListLoading }
}
