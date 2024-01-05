import { showFeedbackModal } from "@/redux/features/modalSlice"
import { homeAPI } from "../models/homeAPI"
import { useAppDispatch } from "@/redux/hooks"
import { useQuery } from "@tanstack/react-query"

export const useGetIndiviualProductListQuery = () => {
  const dispatch = useAppDispatch()
  const { data } = useQuery(
    ["indiviualProductList"],
    () => homeAPI.getIndividualSectionProductList(),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      cacheTime: 60 * 60 * 1000,
    }
  )

  const arrivalProductList = data?.arrivalProductList ?? []
  const bestProductList = data?.bestProductList ?? []
  const topSaleProductList = data?.topSaleProductList ?? []

  return {
    arrivalProductList,
    bestProductList,
    topSaleProductList,
  }
}
