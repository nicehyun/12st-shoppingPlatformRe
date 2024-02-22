import { useFeedbackModal } from "./useFeedbackModal"

type FetchValidGard = {
  valid: boolean
  message?: string
}

export const useFetchValidGard = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const handleShowFetchGardFeedbackModal = ({
    message,
    valid,
  }: FetchValidGard) => {
    if (!valid && message !== undefined) {
      showFeedbackModalWithContent(message)

      return
    }
  }

  return { handleShowFetchGardFeedbackModal }
}
