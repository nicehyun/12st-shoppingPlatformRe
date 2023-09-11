import { useState } from "react"

export const useModal = () => {
  const [isShowModal, setIsModal] = useState(false)

  const hideModal = () => {
    setIsModal(false)
  }

  const showModal = () => {
    setIsModal(true)
  }
  return { isShowModal, showModal, hideModal }
}
