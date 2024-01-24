import { useQuery } from "@tanstack/react-query"
import { productDeatilAPI } from "../model/productDetailAPI"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"

export const useGetProductDetailQuery = (productId: string) => {
  const dispatch = useAppDispatch()

  const { data, isLoading, isError } = useQuery(
    ["product", productId],
    () => productDeatilAPI.getProductInfo(productId),
    {
      enabled: !!productId,
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      staleTime: 60 * 60 * 1000,
    }
  )

  const productDetail = data

  return {
    productDetail,
    isLoading,
    isError,
  }
}
