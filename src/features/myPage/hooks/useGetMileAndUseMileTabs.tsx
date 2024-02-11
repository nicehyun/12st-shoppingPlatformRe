import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

export const useGetMileAndUseMileTabs = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["적립 마일리지", "사용 마일리지"]

  return {
    tabs,
    tabValue,
    handleTabValueChange,
  }
}
