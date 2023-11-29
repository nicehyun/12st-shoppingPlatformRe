"use client"

import Button from "@/features/common/views/Button"
import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import Loading from "@/features/common/views/Loading"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect, useState } from "react"
import useCheckMarketingClauseMutation from "../../hooks/useCheckMarketingClauseMutation"
import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"

const MyPageClauseModification = () => {
  const dispatch = useAppDispatch()
  const { mutateAsync, isLoading } = useCheckMarketingClauseMutation()
  const { userInfo } = useGetUserInfoQuery()
  const [isCheckedMarketingClause, setIsCheckedMarketingClause] =
    useState(false)
  const [isChagedClauseState, setIsChagedClauseState] = useState(false)

  const handleMarketingClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-marketing",
        modalTitle: "광고성 정보 수신 및 마케팅 활용 동의",
        modalContent: "MarketingClause",
      })
    )
  }

  const handleMarketingClauseModification = async () => {
    if (userInfo?.marketingClause === isCheckedMarketingClause || isLoading)
      return

    await mutateAsync(isCheckedMarketingClause)
    setIsChagedClauseState(false)
  }

  const toggleMarketingClause = () => {
    setIsCheckedMarketingClause((prev) => !prev)
    setIsChagedClauseState(true)
  }

  useEffect(() => {
    setIsCheckedMarketingClause(userInfo?.marketingClause ?? false)
  }, [userInfo?.marketingClause])
  return (
    <div className="pt-[30px] w-[400px] sm:w-full md:w-full">
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

      <Button
        onClick={handleMarketingClauseModification}
        content={
          isLoading ? (
            <Loading
              spinnerSize={{ width: "w-[15px]", height: "h-[15px]" }}
              isFrame={false}
            />
          ) : (
            "저장하기"
          )
        }
        isDisabled={!isChagedClauseState}
        classNames={`mt-[30px] h-[50px] w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]`}
      />
    </div>
  )
}

export default MyPageClauseModification
