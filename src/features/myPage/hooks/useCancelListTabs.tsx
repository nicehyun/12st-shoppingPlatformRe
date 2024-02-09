import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

export const useCancelListTabs = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["All", "취소", "반품", "교환"]
  return {
    tabs,
    tabValue,
    handleTabValueChange,
  }
}
