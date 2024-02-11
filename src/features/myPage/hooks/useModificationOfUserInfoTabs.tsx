import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

export const useModificationOfUserInfoTabs = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["회원정보", "기본배송지 수정", "약관동의", "회원탈퇴"]

  return {
    tabs,
    tabValue,
    handleTabValueChange,
  }
}
