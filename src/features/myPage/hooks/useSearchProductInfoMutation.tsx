import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { showFeedbackModal } from "@/redux/features/modalSlice"

export const useSearchProductInfoMutation = () => {
  const dispatch = useAppDispatch()
  const searchProductInfoMutation = useMutation(
    (productId: string) => myPageAPI.getProductInfoByProductId(productId),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )
  return searchProductInfoMutation
}
