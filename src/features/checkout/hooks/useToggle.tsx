import { useState } from "react"

export const useToggle = () => {
  const [isShowDetail, setIsShowDetail] = useState(true)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }
  return { isShowDetail, toggleShowDetail }
}
