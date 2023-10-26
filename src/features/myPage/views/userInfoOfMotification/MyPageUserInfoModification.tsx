"use client"

import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"

const MyPageUserInfoModification = () => {
  const { userInfo } = useGetUserInfoQuery()

  return (
    <>
      <div className="mb-[20px] w-[400px]">
        <span className="inline-block w-[80px] text-lightBlack">성명</span>
        <span>{userInfo?.name}</span>
      </div>

      <div>
        <span className="inline-block w-[80px] text-lightBlack">연락처</span>
        <span className="font-semibold">{userInfo?.phone}</span>
      </div>
    </>
  )
}

export default MyPageUserInfoModification
