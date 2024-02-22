"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { FormEvent, useEffect, useState } from "react"
import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"
import UpdateButton from "./UpdateButton"
import { useCheckMarketingClauseMutation } from "../../hooks/useCheckMarketingClauseMutation"
import { validCheckMarketingClaustUpdate } from "../../models/validCheck"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"

const ClauseModification = () => {
  const dispatch = useAppDispatch()
  const { mutateAsync, isLoading } = useCheckMarketingClauseMutation()
  const { userInfo, isLoading: isGetUserInfoLoading } = useGetUserInfoQuery()
  const [isCheckedMarketingClause, setIsCheckedMarketingClause] =
    useState(false)

  const { showFeedbackModalWithContent } = useFeedbackModal()

  const handleMarketingClauseSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isLoading || isGetUserInfoLoading) return

    const formData = new FormData(event.currentTarget)

    formData.append(
      "prevMarketingClause",
      JSON.stringify(userInfo?.marketingClause)
    )

    const { valid, message } = validCheckMarketingClaustUpdate(formData)

    if (!valid && message !== undefined) {
      showFeedbackModalWithContent(message)
      return
    }

    await mutateAsync(formData)
  }

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
      onSubmit={handleMarketingClauseSubmit}
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
