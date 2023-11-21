import { useState } from "react"

export const useTabValueHandler = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabValueChange = (
    event: React.SyntheticEvent,
    clickedTapValue: number
  ) => {
    setTabValue(clickedTapValue)
  }

  return { tabValue, handleTabValueChange }
}
