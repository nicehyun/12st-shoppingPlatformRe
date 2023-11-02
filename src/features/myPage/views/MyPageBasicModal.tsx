"use client"

import BasicModal from "@/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import MyPageModalCheckoutList from "./customerService/MyPageModalCheckoutList"
import MyPageModalProductInfo from "./customerService/MyPageModalProductInfo"
import { Suspense } from "react"
import Loading from "@/common/views/Loading"

const MyPageBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
      case "productInfoSearch":
        return <MyPageModalProductInfo />
      case "checkoutInfoSearch":
        return (
          <Suspense
            fallback={
              <Loading
                spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
                height="h-[400px]"
                isFrame={false}
              />
            }
          >
            <MyPageModalCheckoutList />
          </Suspense>
        )

      default:
        return null
    }
  }

  return <BasicModal>{renderModalContent()}</BasicModal>
}

export default MyPageBasicModal
