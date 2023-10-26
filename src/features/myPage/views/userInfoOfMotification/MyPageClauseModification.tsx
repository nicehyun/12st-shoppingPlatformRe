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

  const handleMarketingClauseModification = async () => {
    if (userInfo?.marketingClause === isCheckedMarketingClause || isLoading)
      return

    await mutateAsync(isCheckedMarketingClause)
  }

  const toggleMarketingClause = () => {
    setIsCheckedMarketingClause((prev) => !prev)
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
        classNames="mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
      />
    </>
  )
}

export default MyPageClauseModification
