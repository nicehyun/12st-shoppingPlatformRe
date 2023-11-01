"use client"

import BasicModal from "@/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import MyPageModalCheckoutList from "./customerService/MyPageModalCheckoutList"
import MyPageModalProductInfo from "./customerService/MyPageModalProductInfo"

const MyPageBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
      case "productInfoSearch":
        return <MyPageModalProductInfo />
      case "checkoutInfoSearch":
        return <MyPageModalCheckoutList />

      default:
        return null
    }
  }

  return <BasicModal>{renderModalContent()}</BasicModal>
}

export default MyPageBasicModal
