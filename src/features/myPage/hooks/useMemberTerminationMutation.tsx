import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"

export const useMemberTerminationMutation = () => {
  const { sessionQuery } = useSessionQuery()

  const dispatch = useAppDispatch()

  const memberTerminationMutation = useMutation(
    () => myPageAPI.memberTermination(sessionQuery?.user.email ?? ""),
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

  return memberTerminationMutation
}
