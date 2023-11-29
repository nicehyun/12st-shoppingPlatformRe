"use client"

import BasicModal from "@/features/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import MarketingClause from "./clause/MarketingClause"
import SignupCollectionOfUserInfoClause from "./clause/SignupCollectionOfUserInfoClause"
import TermClause from "./clause/TermClause"

const SignUpBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
      case "TermClause":
        return <TermClause />
      case "SignupCollectionOfUserInfoClause":
        return <SignupCollectionOfUserInfoClause />
      case "MarketingClause":
        return <MarketingClause />

      default:
        return null
    }
  }

  return <BasicModal>{renderModalContent()}</BasicModal>
}

export default SignUpBasicModal
