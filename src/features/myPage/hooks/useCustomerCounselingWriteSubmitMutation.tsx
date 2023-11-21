import { useFeedbackModal } from "@/common/hooks/useFeedbackModal"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useMutation } from "@tanstack/react-query"
import { CustomerCounselingDetail } from "../types/myPage"

export const useCustomerCounselingWriteSubmitMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { sessionQuery } = useSessionQuery()

  const userInfo = {
    name: sessionQuery?.user.name,
    email: sessionQuery?.user.email,
  }

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
      fetch("/api/myPage/inquireCustomerCounseling", {
        method: "POST",
        body: JSON.stringify({
          userInfo,
          writeDetail,
        }),
      }),
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
