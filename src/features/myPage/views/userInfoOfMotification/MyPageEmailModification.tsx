"use client"

import Button from "@/common/views/Button"
import { useGetUserInfoQuery } from "../../hooks/useGetUserInfoQuery"

const MyPageEmailModification = () => {
  const { userInfo } = useGetUserInfoQuery()
  return (
    <>
      <span>{userInfo?.email}</span>
    </>
  )
}

export default MyPageEmailModification
