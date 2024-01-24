import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

const useCheckMarketingClauseMutation = () => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()

  const dispatch = useAppDispatch()

  const checkMarketingClauseMutaion = useMutation(
    (isChecked: boolean) =>
      myPageAPI.modificatieMarketingClause(
        isChecked,
        session?.user.accessToken
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

export default useCheckMarketingClauseMutation
