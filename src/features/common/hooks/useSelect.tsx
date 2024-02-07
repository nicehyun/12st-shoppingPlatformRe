import { SelectChangeEvent } from "@mui/material"
import { useState } from "react"

export const useSelect = (defaultSelectValue?: string) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultSelectValue ?? ""
  )

  const handleSelectClose = () => {
    setIsSelectOpen(false)
  }

  const handleSelectOpen = () => {
    setIsSelectOpen(true)
  }

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string)

    handleSelectClose()
  }

  return {
    isSelectOpen,
    handleSelectClose,
    handleSelectOpen,
    handleSelectChange,
    selectedValue,
  }
}
