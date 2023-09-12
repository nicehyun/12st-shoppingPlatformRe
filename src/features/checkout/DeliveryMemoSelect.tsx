"use client"

import OutlinedInput from "@mui/material/OutlinedInput"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useState } from "react"

const memos = [
  "부재시 문앞에 놓아주세요.",
  "부재시 경비실에 맡겨 주세요.",
  "부재시 전화 또는 문자 주세요.",
  "택배함에 넣어 주세요.",
  "파손위험상품입니다. 배송시 주의해주세요.",
  "배송전에 연락주세요.",
  "직접입력",
]

const DeliveryMemoSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMemo, setSelectedMemo] = useState("")

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelectChange = (
    event: SelectChangeEvent<typeof selectedMemo>
  ) => {
    setSelectedMemo(event.target.value)
    handleClose()
  }
  return (
    <div className="w-full max-w-[500px]">
      <Select
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        displayEmpty
        value={selectedMemo}
        onChange={handleSelectChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return "배송시 요청사항을 선택해주세요"
          }

          return selected
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: "200px",
            },
          },
        }}
        sx={{
          width: "500px",
          height: "50px",
          fontSize: "16px",
          border: "1px solid rgb(180, 180, 180)",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "rgb(180, 180, 180)",
          },
        }}
        className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] dark:text-white w-full`}
      >
        <MenuItem disabled value="" className="sm:text-[12px] md:text-[14px]">
          배송시 요청사항을 선택해주세요
        </MenuItem>
        {memos.map((memo, index) => (
          <MenuItem
            key={`deliveyMemo-${index}`}
            value={memo}
            className="sm:text-[12px] md:text-[14px]"
          >
            {memo}
          </MenuItem>
        ))}
      </Select>
      {/* TODO api에서 selectedMemo=== "직접입력일경우 deliveryMemo-direct 가져오기" */}
      {selectedMemo === "직접입력" && (
        <textarea
          id="deliveryMemo-direct"
          cols={30}
          rows={5}
          maxLength={50}
          placeholder="요청사항을 입력해주세요. (최대 50자)"
          className="w-full h-[150px] overflow-auto py-[19px] px-[14px] border-inputBorder mt-[10px] text-[14px] sm:text-[12px] leading-[20px] appearance-none resize-none rounded-[5px]"
        ></textarea>
      )}
    </div>
  )
}

export default DeliveryMemoSelect
