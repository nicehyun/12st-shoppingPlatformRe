import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"

const useDefaultDeliveryinfoModificaitionMutation = () => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()

  const dispatch = useAppDispatch()

  const checkMarketingClauseMutaion = useMutation(
    (deliveryInfo: DeliveryInfo) =>
      deliveryInfoAPI.updateDeliveryInfo(
        deliveryInfo,
        sessionQuery?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["deliveryInfo"])
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
