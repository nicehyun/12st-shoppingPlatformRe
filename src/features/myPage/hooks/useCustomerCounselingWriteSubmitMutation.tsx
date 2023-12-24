import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useMutation } from "@tanstack/react-query"
import { CustomerCounselingDetail } from "../types/myPage"
import { myPageAPI } from "../models/myPageAPI"

export const useCustomerCounselingWriteSubmitMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { sessionQuery } = useSessionQuery()

  const {
    isLoading: isCustomerCounselingWriteLoading,
    mutateAsync: customerCounselingWriteSubmitMutateAsync,
  } = useMutation<
    Response | undefined,
    unknown,
    {
      writeDetail: CustomerCounselingDetail
    }
  >(
    ({ writeDetail }: { writeDetail: CustomerCounselingDetail }) =>
      myPageAPI.writeCoustomerCounseling(
        writeDetail,
        sessionQuery?.user.accessToken
      ),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "문의 등록을 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return {
    isCustomerCounselingWriteLoading,
    customerCounselingWriteSubmitMutateAsync,
  }
}
