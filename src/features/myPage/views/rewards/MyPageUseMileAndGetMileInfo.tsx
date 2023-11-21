"use client"

import { Box } from "@mui/material"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import MyPageMileTebPanel from "./MyPageUseMileTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"
import MyPageTabs from "../MyPageTabs"

const MyPageUseMileAndGetMileInfo = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()
  const tabList = [
    { label: "적립 마일리지", id: "get" },
    { label: "사용 마일리지", id: "use" },
  ]

  return (
    <MyPageSectionSubTitle
      subtitle="마일리지 적립 및 사용"
      className="mt-[80px]"
    >
      <Box sx={{ width: "100%", padding: 0 }}>
        <MyPageTabs
          tabId="mileList"
          onChangeTabValue={handleTabValueChange}
          tabValue={tabValue}
          tabs={tabList}
        />

        {tabValue === 0 && <MyPageMileTebPanel mileType="get" />}
        {tabValue === 1 && <MyPageMileTebPanel mileType="use" />}
      </Box>
    </MyPageSectionSubTitle>
  )
}

export default MyPageUseMileAndGetMileInfo
