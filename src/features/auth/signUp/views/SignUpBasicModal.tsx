"use client"

import BasicModal from "@/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import MarketingClause from "./MarketingClause"
import SignupCollectionOfUserInfoClause from "./SignupCollectionOfUserInfoClause"
import TermClause from "./TermClause"

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
