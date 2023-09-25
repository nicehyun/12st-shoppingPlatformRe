import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"

const InstallmentPeriodSelect = () => {
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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("일시불")

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedPeriod(event.target.value)
    handleClose()
  }

  return (
    <Select
      id="period-select"
      name="period-select"
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      displayEmpty
      value={selectedPeriod}
      onChange={handleSelectChange}
      input={<OutlinedInput />}
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
      className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] bg-white dark:bg-lightBorder w-full mb-[20px]`}
    >
      {periodList?.map((period, index) => (
        <MenuItem
          key={`period-${index}`}
          value={period}
          sx={{ fontSize: "14px" }}
        >
          {period}
        </MenuItem>
      ))}
    </Select>
  )
}

export default InstallmentPeriodSelect
