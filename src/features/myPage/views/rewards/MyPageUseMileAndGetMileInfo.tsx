"use client"

import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import UseMileList from "./UseMileList"
import CustomTabs from "@/features/common/views/CustomTabs"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import GetMileList from "./GetMileList"
import { Fragment } from "react"
import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

const MyPageUseMileAndGetMileInfo = () => {
  const tabs = ["적립 마일리지", "사용 마일리지"]

  const { handleTabValueChange, tabValue } = useTabValueHandler()

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
        <Fragment key={`${modificationEl.key}`}>
          <CustomTabPanel value={tabValue} index={index}>
            {modificationEl}
          </CustomTabPanel>
        </Fragment>
      ))}
    </MyPageSectionSubTitle>
  )
}

export default MyPageUseMileAndGetMileInfo
