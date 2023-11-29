import { DeliveryInfo } from "@/features/common/types/address"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"

const useDefaultDeliveryinfoModificaitionMutation = () => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()

  const dispatch = useAppDispatch()

  const checkMarketingClauseMutaion = useMutation(
    (deliveryInfo: DeliveryInfo) =>
      myPageAPI.modificatieDefaultAddress(
        sessionQuery?.user.email ?? "",
        deliveryInfo
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userInfo"])
      },
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )

  return checkMarketingClauseMutaion
}

export default useDefaultDeliveryinfoModificaitionMutation
