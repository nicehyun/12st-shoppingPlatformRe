import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation } from "@tanstack/react-query"
import { CustomerCounselingDetail } from "../types/myPage"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useCustomerCounselingWriteSubmitMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { session } = useSessionQuery()

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
        session?.user.accessToken
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
