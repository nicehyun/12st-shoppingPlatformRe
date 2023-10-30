"use client"

import AlertModal from "@/common/views/AlertModal"
import Button from "@/common/views/Button"
import { signOut } from "next-auth/react"
import { useState } from "react"
import { useMemberTerminationMutation } from "../../hooks/useMemberTerminationMutation"
import MyPageTerminationContent from "./MyPageTerminationContent"

const MyPageMemberTermination = () => {
  const { mutateAsync: memberTerminationMutateAsync, isLoading } =
    useMemberTerminationMutation()
  const [isShowAlertModal, setIsShowAlertModal] = useState(false)

  const handleMemberTerminateButtonClick = () => {
    setIsShowAlertModal(true)
  }

  const handleAlertModalHide = () => {
    setIsShowAlertModal(false)
  }

  const handleConfirmedButtonClick = async () => {
    const memberTerminationResult = await memberTerminationMutateAsync()
    console.log(memberTerminationResult)

    if (memberTerminationResult?.result === "success") {
      handleAlertModalHide()
      signOut()
    }
  }

  return (
    <>
      <Button
        onClick={handleMemberTerminateButtonClick}
        content="회원탈퇴"
        classNames="underline"
      />

      {isShowAlertModal && (
        <AlertModal
          isShowModal={isShowAlertModal}
          agreeButtonContent="혜택 포기하고 탈퇴하기"
          cancelButtonContent="혜택 계속 사용하기"
          modalId="memberTermination"
          onClickConfirmedAlertButton={handleConfirmedButtonClick}
          onHideModal={handleAlertModalHide}
        >
          <MyPageTerminationContent />
        </AlertModal>
      )}
    </>
  )
}

export default MyPageMemberTermination
