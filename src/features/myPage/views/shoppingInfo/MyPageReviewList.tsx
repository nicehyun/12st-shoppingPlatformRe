"use client"

import MyPageSectionTitle from "../MyPageSectionTitle"
import { Box } from "@mui/material"
import MyPageReviewTebPanel from "./MyPageReviewTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"
import MyPageTabs from "../MyPageTabs"

const MyPageReviewList = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()
  const tabList = [
    { label: "작성 가능한 리뷰", id: "available" },
    { label: "내 리뷰 (0)", id: "my" },
  ]

  return (
    <section>
      <MyPageSectionTitle title="상품 리뷰" />

      <Box sx={{ width: "100%", padding: 0 }}>
        <MyPageTabs
          tabId="reviewList"
          onChangeTabValue={handleTabValueChange}
          tabValue={tabValue}
          tabs={tabList}
        />

        {tabValue === 0 && (
          <MyPageReviewTebPanel reviewType="review__available" />
        )}
        {tabValue === 1 && <MyPageReviewTebPanel reviewType="review__my" />}
      </Box>
    </section>
  )
}

export default MyPageReviewList
