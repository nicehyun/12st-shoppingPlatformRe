import { useSelectCredit } from "../hooks/useSelectCredit"
import CutstomSelect from "@/features/common/views/CutstomSelect"

const CreditSelect = () => {
  const {
    creditList,
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelectCredit()

  const creditSelectProps = {
    id: "credit",
    isSelectOpen,
    onCloseSelect: handleSelectClose,
    onOpenSelect: handleSelectOpen,
    selectedValue: selectedValue,
    onChangeSelect: handleSelectChange,
    noSelectedRenderValue: "카드사를 선택해주세요.",
    selectArray: creditList.map((credit) => {
      return { renderValue: credit }
    }),
  }

  return <CutstomSelect {...creditSelectProps} className="mb-[20px]" />
}

export default CreditSelect
