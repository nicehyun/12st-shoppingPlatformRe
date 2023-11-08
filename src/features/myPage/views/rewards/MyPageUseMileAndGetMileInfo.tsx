"use client"

import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import MyPageMileTebPanel from "./MyPageUseMileTebPanel"

const MyPageUseMileAndGetMileInfo = () => {
  const [mileTabValue, setMileTabValue] = useState(0)

  const handleMileTabValueChange = (
    event: React.SyntheticEvent,
    newTapValue: number
  ) => {
    setMileTabValue(newTapValue)
  }

  const renderTab = () => {
    const tabs = ["적립 마일리지", "사용 마일리지"]

    return tabs.map((label, index) => (
      <Tab
        key={`tab-${index}`}
        label={label}
        id={`mile-tab-${index === 0 ? "getMile" : "useMile"}`}
        aria-controls={`mile-tabpanel-${index === 0 ? "getMile" : "useMile"}`}
        sx={{
          "&.Mui-selected": {
            color: "#ff4e0a",
          },
          color: "#ccc",
        }}
      />
    ))
  }
  
  return (
    <MyPageSectionSubTitle
      subtitle="마일리지 적립 및 사용"
      className="mt-[80px]"
    >
      <Box sx={{ width: "100%", padding: 0 }}>
        <Box sx={{ borderColor: "#d2d2d2" }}>
          <Tabs
            value={mileTabValue}
            onChange={handleMileTabValueChange}
            aria-label="myPage-useMileAndGetMileInfo-teps"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff4e0a",
              },
            }}
          >
            {renderTab()}
          </Tabs>
        </Box>

        {mileTabValue === 0 && <MyPageMileTebPanel mileType="get" />}
        {mileTabValue === 1 && <MyPageMileTebPanel mileType="use" />}
      </Box>
    </MyPageSectionSubTitle>
  )
}

export default MyPageUseMileAndGetMileInfo
