import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

export const useFeedbackModalWithError = () => {
  const dispatch = useAppDispatch()

  const showFeedbackModalWithErrorMessage = (errorMessage: string) => {
    dispatch(
      showFeedbackModal({
        modalContent:
          errorMessage ?? "오류가 계속되면 고객센터에 문의해주세요.",
      })
    )
  }

  return { showFeedbackModalWithErrorMessage }
}
