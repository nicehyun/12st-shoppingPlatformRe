"use client"

import MyPageSectionTitle from "../MyPageSectionTitle"
import { Box, Tab, Tabs } from "@mui/material"
import MyPageReviewTebPanel from "./MyPageReviewTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"

const MyPageReviewList = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const renderTab = () => {
    const tabs = ["작성 가능한 리뷰", "내 리뷰 (0)"]

    return tabs.map((label, index) => (
      <Tab
        key={`tab-review-${index}`}
        label={label}
        id={`tab-review__${index === 0 ? "availableReview" : "myReview"}`}
        aria-controls={`tabpanel-review__${
          index === 0 ? "availableReview" : "myReview"
        }`}
        sx={{
          "&.Mui-selected": {
            color: "#ff4e0a",
          },
          color: "#ccc",
          width: "50%",
        }}
      />
    ))
  }
  return (
    <section>
      <MyPageSectionTitle title="상품 리뷰" />

      <Box sx={{ width: "100%", padding: 0 }}>
        <Box sx={{ borderColor: "#d2d2d2" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabValueChange}
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

        {tabValue === 0 && (
          <MyPageReviewTebPanel reviewType="review__available" />
        )}
        {tabValue === 1 && <MyPageReviewTebPanel reviewType="review__my" />}
      </Box>
    </section>
  )
}

export default MyPageReviewList
