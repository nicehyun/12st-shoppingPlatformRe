import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { Product, Products } from "@/features/common/types/product"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddHeartListMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { session } = useSessionQuery()

  const { mutateAsync, isLoading: isAddHeartListLoading } = useMutation(
    () =>
      productHeartAPI.addProductInHeart(session?.user.accessToken, productInfo),
    {
      onSuccess: (data) => {
        if (data.status === 401 || data.status === 409) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          queryClient.invalidateQueries(["heartList"])

          showFeedbackModalWithContent("상품이 HEART에 추가되었습니다.")
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

  const addHeartListMutateAsync = async () => {
    if (isAddHeartListLoading) return

    const prevHeartProductList: Products =
      queryClient.getQueryData(["heartList"]) ?? []

    if (
      prevHeartProductList.find(
        (prevProduct) => prevProduct.id === productInfo.id
      )
    ) {
      showFeedbackModalWithContent("이미 HEART 리스트에 있는 상품입니다.")

      return
    }

    if (shouldProceedWithRouting(!!session)) {
      mutateAsync()
    }
  }

  return { addHeartListMutateAsync, isAddHeartListLoading }
}
