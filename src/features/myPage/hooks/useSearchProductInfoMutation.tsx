import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { productDeatilAPI } from "@/features/productDetail/model/productDetailAPI"

export const useSearchProductInfoMutation = () => {
  const dispatch = useAppDispatch()
  const searchProductInfoMutation = useMutation(
    (productId: string) => productDeatilAPI.getProductInfo(productId),
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
