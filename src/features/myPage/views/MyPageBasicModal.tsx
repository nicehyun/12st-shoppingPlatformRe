"use client"

import BasicModal from "@/features/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import CheckoutListInModal from "./customerService/CheckoutListInModal"

const MyPageBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
      case "checkoutInfoSearch":
        return <CheckoutListInModal />

      default:
        return null
    }
  }

  return <BasicModal>{renderModalContent()}</BasicModal>
}

export default MyPageBasicModal
