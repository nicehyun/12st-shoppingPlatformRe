"use client"

import Button from "@/common/views/Button"
import ClauseCheckbox from "@/common/views/ClauseCheckbox"
import Loading from "@/common/views/Loading"
import { useEffect, useState } from "react"
import useCheckMarketingClauseMutation from "../../hooks/useCheckMarketingClauseMutation"
import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"

const MyPageClauseModification = () => {
  const { mutateAsync, isLoading } = useCheckMarketingClauseMutation()
  const { userInfo } = useGetUserInfoQuery()
  const [isCheckedMarketingClause, setIsCheckedMarketingClause] =
    useState(false)
  const [isChagedClauseState, setIsChagedClauseState] = useState(false)

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
    <>
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
        onClickDetailClause={() => console.log(123)}
      />
      <button className="disabled:cursor-not-allowed disabled:bg-border "></button>

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
        classNames={`disabled:cursor-not-allowed disabled:bg-border disabled:text-white disabled:border-border mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]`}
      />
    </>
  )
}

export default MyPageClauseModification
