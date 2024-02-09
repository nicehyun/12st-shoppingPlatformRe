import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

export const useReviewListTabs = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["작성 가능한 리뷰", "내 리뷰 (0)"]

  return {
    tabs,
    tabValue,
    handleTabValueChange,
  }
}
