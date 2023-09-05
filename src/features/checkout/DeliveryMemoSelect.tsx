"use client"

import OutlinedInput from "@mui/material/OutlinedInput"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useState } from "react"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  "부재시 문앞에 놓아주세요.",
  "부재시 경비실에 맡겨 주세요.",
  "부재시 전화 또는 문자 주세요.",
  "택배함에 넣어 주세요.",
  "파손위험상품입니다. 배송시 주의해주세요.",
  "배송전에 연락주세요.",
  "직접입력",
]

const DeliveryMemoSelect = () => {
  const [personName, setPersonName] = useState<string[]>([])

  const handleSelectChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }
  return (
    <Select
      multiple
      displayEmpty
      value={personName}
      onChange={handleSelectChange}
      input={<OutlinedInput />}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return "배송시 요청사항을 선택해주세요"
        }

        return selected.join(", ")
      }}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
      sx={{
        width: "500px",
        fontSize: "16px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#333",
        },
      }}
    >
      <MenuItem disabled value="">
        배송시 요청사항을 선택해주세요
      </MenuItem>
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default DeliveryMemoSelect
