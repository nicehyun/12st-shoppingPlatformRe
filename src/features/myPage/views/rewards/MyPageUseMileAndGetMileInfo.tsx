"use client"

import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import { useGetMileAndUseMileTabs } from "../../hooks/useGetMileAndUseMileTabs"
import UseMileList from "./UseMileList"
import CustomTabs from "@/features/common/views/CustomTabs"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import GetMileList from "./GetMileList"

const MyPageUseMileAndGetMileInfo = () => {
  const { handleTabValueChange, tabValue, tabs } = useGetMileAndUseMileTabs()

  const useMileAndGetMileComponents = [
    <GetMileList key="mypage-mile-info__get" />,
    <UseMileList key="mypage-mile-info__use" />,
  ]

  return (
    <MyPageSectionSubTitle
      subtitle="마일리지 적립 및 사용"
      className="mt-[80px]"
    >
      <CustomTabs
        id="mileList"
        onChangeTabs={handleTabValueChange}
        tabs={tabs}
        tabsValue={tabValue}
      />

      {useMileAndGetMileComponents.map((modificationEl, index) => (
        <>
          <CustomTabPanel value={tabValue} index={index}>
            {modificationEl}
          </CustomTabPanel>
        </>
      ))}
    </MyPageSectionSubTitle>
  )
}

export default MyPageUseMileAndGetMileInfo
