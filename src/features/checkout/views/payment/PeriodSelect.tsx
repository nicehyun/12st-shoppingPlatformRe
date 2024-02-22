import CutstomSelect from "@/features/common/views/CutstomSelect"
import { useSelect } from "@/features/common/hooks/useSelect"

const PeriodSelect = () => {
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

  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelect("일시불")

  const priodSelectProps = {
    id: "period",
    isSelectOpen,
    onCloseSelect: handleSelectClose,
    onOpenSelect: handleSelectOpen,
    selectedValue: selectedValue,
    onChangeSelect: handleSelectChange,
    noSelectedRenderValue: "",
    selectArray: periodList.map((period) => {
      return { renderValue: period }
    }),
    isShowNoneSelectItem: false,
  }

  return <CutstomSelect {...priodSelectProps} className="mb-[20px]" />
}

export default PeriodSelect
