"use client"

import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import MyPageWriteTable from "./MyPageWriteTable"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

const CustomerCounselingWriteUserInfoList = () => {
  const { session, isSessionCheckLoading } = useSessionQuery()
  return (
    <>
      <MyPageWriteTable
        tableTitle="성명"
        tableContent={
          isSessionCheckLoading ? (
            <SpanSkeletonUI className="w-[80px] h-[32px]" />
          ) : (
            session?.user.name
          )
        }
        className="border-border border-t-[1px]"
      />
      <MyPageWriteTable
        tableTitle="이메일"
        tableContent={
          isSessionCheckLoading ? (
            <SpanSkeletonUI className="w-[120px] h-[32px]" />
          ) : (
            session?.user.email
          )
        }
        className="border-border border-t-[1px]"
      />
    </>
  )
}

export default CustomerCounselingWriteUserInfoList
