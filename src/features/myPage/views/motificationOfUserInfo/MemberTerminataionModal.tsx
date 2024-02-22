"use client"

import AlertModal from "@/features/common/views/AlertModal"
import { hideAlertModal, selectAlertModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import React from "react"
import { useMemberTerminationMutation } from "../../hooks/useMemberTerminationMutation"
import TerminationContent from "./TerminationContent"

const MemberTerminataionModal = () => {
  const dispatch = useAppDispatch()
  const { modalId, isShowModal, modalContent } =
    useAppSelector(selectAlertModal)

  const { isLoading, mutateAsync } = useMemberTerminationMutation()

  const handleAlertModalHide = () => {
    if (!isLoading) {
      dispatch(hideAlertModal())
    }
  }

  const handleAlertModalAgree = async () => {
    if (isLoading) return

    await mutateAsync()

    handleAlertModalHide()
  }

  const alertModalProps = {
    isShowModal,
    modalContent,
    modalId,
    onCancelFn: handleAlertModalHide,
    onAgreeFn: handleAlertModalAgree,
    isLoading,
  }

  return (
    <AlertModal {...alertModalProps}>
      <TerminationContent />
    </AlertModal>
  )
}

export default MemberTerminataionModal
