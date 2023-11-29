"use client"

import AlertModal from "@/features/common/views/AlertModal"
import Button from "@/features/common/views/Button"
import Loading from "@/features/common/views/Loading"
import { signOut } from "next-auth/react"
import { useState } from "react"
import { useMemberTerminationMutation } from "../../hooks/useMemberTerminationMutation"
import MyPageTerminationContent from "./MyPageTerminationContent"

const MyPageMemberTermination = () => {
  const {
    mutateAsync: memberTerminationMutateAsync,
    isLoading: isMemberTerminationLoading,
  } = useMemberTerminationMutation()
  const [isShowAlertModal, setIsShowAlertModal] = useState(false)

  const handleMemberTerminateButtonClick = () => {
    setIsShowAlertModal(true)
  }

  const handleAlertModalHide = () => {
    setIsShowAlertModal(false)
  }

  const handleConfirmedButtonClick = async () => {
    if (isMemberTerminationLoading) return

    const memberTerminationResult = await memberTerminationMutateAsync()

    if (memberTerminationResult?.result === "success") {
      handleAlertModalHide()
      signOut()
    }
  }

  return (
    <div className="pt-[30px]">
      <Button
        onClick={handleMemberTerminateButtonClick}
        content="회원탈퇴"
        classNames="underline text-lightBlack hover:text-black hover:font-semibold"
      />

      {isShowAlertModal && (
        <AlertModal
          isDisabledAgreeButton={isMemberTerminationLoading}
          isShowModal={isShowAlertModal}
          agreeButtonContent={
            <span className="w-[200px]">
              {isMemberTerminationLoading ? (
                <Loading
                  spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
                  isFrame={false}
                />
              ) : (
                "혜택 포기하고 탈퇴하기"
              )}
            </span>
          }
          cancelButtonContent="혜택 계속 사용하기"
          modalId="memberTermination"
          onClickConfirmedAlertButton={handleConfirmedButtonClick}
          onHideModal={handleAlertModalHide}
        >
          <MyPageTerminationContent />
        </AlertModal>
      )}
    </div>
  )
}

export default MyPageMemberTermination
