import { useSelect } from "@/features/common/hooks/useSelect"

export const useSelectCredit = () => {
  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelect()

  const creditList = [
    "우체국카드",
    "NH카드",
    "KEB하나카드",
    "신한카드",
    "수협카드",
    "제주카드",
    "KB국민카드",
    "삼성카드",
    "우리카드",
    "씨티카드",
    "BC카드",
    "광주카드",
    "전북카드",
    "현대카드",
    "현대카드",
    "롯데카드",
  ]

  return {
    creditList,
    selectedValue,
    isSelectOpen,
    handleSelectChange,
    handleSelectOpen,
    handleSelectClose,
  }
}
