import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"

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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCredit, setSelectedCredit] = useState("")

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedCredit(event.target.value)
    handleClose()
  }

  return (
    <Select
      id="credit-select"
      name="credit-select"
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      displayEmpty
      value={selectedCredit ? selectedCredit : ""}
      onChange={handleSelectChange}
      input={<OutlinedInput />}
      renderValue={(selected: string) => {
        if (selected.length === 0) {
          return "카드사를 선택해주세요."
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
        fontSize: "14px",
        border: "1px solid rgb(180, 180, 180)",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "rgb(180, 180, 180)",
        },
      }}
      className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] w-full mb-[20px] bg-white dark:bg-lightBorder`}
    >
      {creditList?.map((credit, index) => (
        <MenuItem
          key={`credit-${index}`}
          value={credit}
          sx={{ fontSize: "14px" }}
        >
          {credit}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CreditSelect
