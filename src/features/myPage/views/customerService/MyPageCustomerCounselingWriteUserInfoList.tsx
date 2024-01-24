"use client"

import MyPageWriteTable from "./MyPageWriteTable"
import PcConditionComponent from "@/features/common/views/PcConditionComponent"
import MobileViewConditionComponent from "@/features/common/views/MobileViewConditionComponent"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

const MyPageCutsomerCounselingWriteUserInfoList = () => {
  const { session } = useSessionQuery()
  return (
    <>
      <MobileViewConditionComponent
        component={
          <>
            <MyPageWriteTable
              tableTitle="성명"
              tableContent={session?.user.name}
              className="border-border border-t-[1px]"
            />
            <MyPageWriteTable
              tableTitle="이메일"
              tableContent={session?.user.email}
              className="border-border border-t-[1px]"
            />
          </>
        }
      />

      <PcConditionComponent
        component={
          <>
            <MyPageWriteTable
              tableTitle="성명"
              tableContent={session?.user.name}
              className="border-border border-t-[1px]"
            />
            <MyPageWriteTable
              tableTitle="이메일"
              tableContent={session?.user.email}
              className="border-border border-t-[1px]"
            />
          </>
        }
      />
    </>
  )
}

export default MyPageCutsomerCounselingWriteUserInfoList
