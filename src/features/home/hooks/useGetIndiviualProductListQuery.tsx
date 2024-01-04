import { showFeedbackModal } from "@/redux/features/modalSlice"
import { homeAPI } from "../models/homeAPI"
import { useQuery } from "@tanstack/react-query"
import { useAppDispatch } from "@/redux/hooks"

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
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      cacheTime: Infinity,
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
