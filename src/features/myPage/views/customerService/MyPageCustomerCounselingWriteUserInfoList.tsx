"use client"

import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import MyPageWriteTable from "./MyPageWriteTable"
import PcConditionComponent from "@/features/common/views/PcConditionComponent"
import MobileViewConditionComponent from "@/features/common/views/MobileViewConditionComponent"

const MyPageCutsomerCounselingWriteUserInfoList = () => {
  const { sessionQuery } = useSessionQuery()
  return (
    <>
      <MobileViewConditionComponent
        component={
          <>
            <MyPageWriteTable
              tableTitle="성명"
              tableContent={sessionQuery?.user.name}
              className="border-border border-t-[1px]"
            />
            <MyPageWriteTable
              tableTitle="이메일"
              tableContent={sessionQuery?.user.email}
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
              tableContent={sessionQuery?.user.name}
              className="border-border border-t-[1px]"
            />
            <MyPageWriteTable
              tableTitle="이메일"
              tableContent={sessionQuery?.user.email}
              className="border-border border-t-[1px]"
            />
          </>
        }
      />
    </>
  )
}

export default MyPageCutsomerCounselingWriteUserInfoList
