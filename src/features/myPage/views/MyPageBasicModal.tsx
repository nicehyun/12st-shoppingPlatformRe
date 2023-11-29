"use client"

import BasicModal from "@/features/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import MyPageModalCheckoutList from "./customerService/MyPageModalCheckoutList"
import { Suspense } from "react"
import Loading from "@/features/common/views/Loading"

const MyPageBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
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
