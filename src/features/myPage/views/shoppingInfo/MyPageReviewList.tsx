"use client"

import { useState } from "react"
import MyPageSectionTitle from "../MyPageSectionTitle"
import { Box, Tab, Tabs } from "@mui/material"
import MyPageReviewTebPanel from "./MyPageReviewTebPanel"

const MyPageReviewList = () => {
  const [reviewTabValue, setReviewTabValue] = useState(0)

  const handleReviewTabValueChange = (
    event: React.SyntheticEvent,
    newTapValue: number
  ) => {
    setReviewTabValue(newTapValue)
  }

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
          width: "200px",
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
            value={reviewTabValue}
            onChange={handleReviewTabValueChange}
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

        {reviewTabValue === 0 && (
          <MyPageReviewTebPanel reviewType="available-review" />
        )}
        {reviewTabValue === 1 && (
          <MyPageReviewTebPanel reviewType="my-review" />
        )}
      </Box>
    </section>
  )
}

export default MyPageReviewList
