"use client"

import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageCancelTebPanel from "./MyPageCancelTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"
import { Box, Tab, Tabs } from "@mui/material"

const MyPageCancelList = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const renderTab = () => {
    const tabs = [
      { label: "All", id: "all" },
      { label: "취소", id: "return" },
      { label: "반품", id: "return" },
      { label: "교환", id: "change" },
    ]

    return tabs.map((tab, index) => (
      <Tab
        key={`tab-${index}`}
        label={tab.label}
        id={`cancel-tab-${tab.id}`}
        aria-controls={`cancel-tabpanel-${tab.id}`}
        sx={{
          "&.Mui-selected": {
            color: "#ff4e0a",
          },
          color: "#ccc",
          width: "25%",
        }}
      />
    ))
  }

  return (
    <section>
      <MyPageSectionTitle title="취소/반품/교환 내역" />

      <Box sx={{ width: "100%", padding: 0 }}>
        <Box sx={{ borderColor: "#d2d2d2" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabValueChange}
            aria-label="myPage-cancelList-teps"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff4e0a",
              },
            }}
          >
            {renderTab()}
          </Tabs>
        </Box>

        {tabValue === 0 && <MyPageCancelTebPanel cancelType="cancel__all" />}
        {tabValue === 1 && <MyPageCancelTebPanel cancelType="cancel__cancel" />}
        {tabValue === 2 && <MyPageCancelTebPanel cancelType="cancel__return" />}
        {tabValue === 3 && <MyPageCancelTebPanel cancelType="cancel__change" />}
      </Box>
    </section>
  )
}

export default MyPageCancelList
