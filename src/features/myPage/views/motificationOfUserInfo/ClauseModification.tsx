"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect, useState } from "react"

import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"
import UpdateButton from "./UpdateButton"
import { useCheckMarketingClauseMutation } from "../../hooks/useCheckMarketingClauseMutation"

const ClauseModification = () => {
  const dispatch = useAppDispatch()
  const { updateMaketingClauseMutateAsync, isLoading } =
    useCheckMarketingClauseMutation()
  const { userInfo } = useGetUserInfoQuery()
  const [isCheckedMarketingClause, setIsCheckedMarketingClause] =
    useState(false)

  const handleMarketingClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-marketing",
        modalTitle: "광고성 정보 수신 및 마케팅 활용 동의",
        modalContent: "MarketingClause",
      })
    )
  }

  const toggleMarketingClause = () => {
    setIsCheckedMarketingClause((prev) => !prev)
  }

  useEffect(() => {
    setIsCheckedMarketingClause(userInfo?.marketingClause ?? false)
  }, [userInfo?.marketingClause])
  return (
    <form
      onSubmit={updateMaketingClauseMutateAsync}
      className="pt-[30px] w-[400px] sm:w-full md:w-full"
    >
      <ClauseCheckbox
        clauseType="marketing"
        label="광고성 정보 수신 및 마케팅 활용 동의"
        isClause={true}
        isChecked={isCheckedMarketingClause}
        isRequired={false}
        peer="peer/marketing"
        peerChecked={{
          borderColor: "peer-checked/marketing:after:border-lightRed",
        }}
        onClickClauseLabel={toggleMarketingClause}
        onClickDetailClause={handleMarketingClauseClick}
        classNames="font-semibold"
      />

      <UpdateButton type="submit" isLoading={isLoading} />
    </form>
  )
}

export default ClauseModification
