import { useSelect } from "@/features/common/hooks/useSelect"

import CutstomSelect from "@/features/common/views/CutstomSelect"

const CreditSelect = () => {
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

  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelect()

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
