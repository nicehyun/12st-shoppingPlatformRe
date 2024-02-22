"use client"

import CutstomSelect from "@/features/common/views/CutstomSelect"
import { useSelect } from "@/features/common/hooks/useSelect"

const DeliveryMemoSelect = () => {
  const {
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    selectedValue,
  } = useSelect()

  const memos = [
    "부재시 문앞에 놓아주세요.",
    "부재시 경비실에 맡겨 주세요.",
    "부재시 전화 또는 문자 주세요.",
    "택배함에 넣어 주세요.",
    "파손위험상품입니다. 배송시 주의해주세요.",
    "배송전에 연락주세요.",
    "직접입력",
  ]

  console.log(selectedValue)

  const deliveryMemoSelectProps = {
    id: "deliveryMemo",
    isSelectOpen,
    onCloseSelect: handleSelectClose,
    onOpenSelect: handleSelectOpen,
    selectedValue: selectedValue,
    onChangeSelect: handleSelectChange,
    noSelectedRenderValue: "배송시 요청사항을 선택해주세요",
    selectArray: memos.map((memo) => {
      return { renderValue: memo }
    }),
  }
  return (
    <div className="flex flex-col items-start max-w-[500px] ml-[100px]">
      <CutstomSelect {...deliveryMemoSelectProps} className="mb-[20px]" />

      {selectedValue === "직접입력" && (
        <textarea
          id="deliveryMemo-direct"
          name="deliveryMemo-direct"
          cols={30}
          rows={5}
          maxLength={50}
          placeholder="요청사항을 입력해주세요. (최대 50자)"
          className="w-full h-[150px] overflow-auto py-[19px] px-[14px] border-inputBorder mt-[10px] text-[14px] sm:text-[12px] leading-[20px] appearance-none resize-none rounded-[5px]"
        />
      )}
    </div>
  )
}

export default DeliveryMemoSelect
