"use client"

import Button from "@/features/common/views/Button"
import { useAppDispatch } from "@/redux/hooks"
import { showAlertModal } from "@/redux/features/modalSlice"

const MemberTermination = () => {
  const dispatch = useAppDispatch()

  const handleMemberTerminateButtonClick = () => {
    dispatch(
      showAlertModal({
        modalContent: "",
        modalId: "memberTermination",
      })
    )
  }

  return (
    <>
      <Button
        onClick={handleMemberTerminateButtonClick}
        content="회원탈퇴"
        classNames="underline text-lightBlack hover:text-black hover:font-semibold pt-[30px]"
      />
    </>
  )
}

export default MemberTermination
