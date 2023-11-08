"use client"

import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"
import MyPageListLoading from "../MyPageListLoading"

const MyPageUserInfo = () => {
  const { userInfo, isLoading } = useGetUserInfoQuery()

  if (isLoading) {
    return <MyPageListLoading />
  }

  return (
    <div className="pt-[30px] w-[400px]">
      <div className="mb-[30px]">
        <span className="inline-block w-[80px] text-lightBlack">성명</span>
        <span className="font-semibold">{userInfo?.name}</span>
      </div>

      <div className="mb-[30px]">
        <span className="inline-block w-[80px] text-lightBlack">연락처</span>
        <span className="font-semibold">{userInfo?.phone}</span>
      </div>

      <div>
        <span className="inline-block w-[80px] text-lightBlack">이메일</span>
        <span className="font-semibold">{userInfo?.email}</span>
      </div>
    </div>
  )
}

export default MyPageUserInfo
