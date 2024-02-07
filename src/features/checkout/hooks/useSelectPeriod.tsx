import { useSelect } from "@/features/common/hooks/useSelect"

export const useSelectPeriod = () => {
  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelect("일시불")

  const periodList = [
    "일시불",
    "2개월",
    "3개월",
    "4개월",
    "5개월",
    "6개월",
    "7개월",
    "8개월",
    "9개월",
    "10개월",
    "11개월",
    "12개월",
  ]

  return {
    periodList,
    selectedValue,
    isSelectOpen,
    handleSelectChange,
    handleSelectOpen,
    handleSelectClose,
  }
}
