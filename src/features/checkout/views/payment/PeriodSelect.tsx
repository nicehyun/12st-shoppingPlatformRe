import CutstomSelect from "@/features/common/views/CutstomSelect"
import { useSelectPeriod } from "../../hooks/useSelectPeriod"

const PeriodSelect = () => {
  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    periodList,
    selectedValue,
  } = useSelectPeriod()

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
