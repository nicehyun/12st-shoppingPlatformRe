import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useMemberTerminationMutation = () => {
  const { session } = useSessionQuery()

  const dispatch = useAppDispatch()

  const memberTerminationMutation = useMutation(
    () => myPageAPI.memberTermination(session?.user.accessToken),
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
