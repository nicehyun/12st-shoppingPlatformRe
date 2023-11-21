"use client"

import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageTabs from "../MyPageTabs"
import MyPageCancelTebPanel from "./MyPageCancelTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"
import { Box } from "@mui/material"

const MyPageCancelList = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()
  const tabList = [
    { label: "All", id: "all" },
    { label: "취소", id: "return" },
    { label: "반품", id: "return" },
    { label: "교환", id: "change" },
  ]

  return (
    <section>
      <MyPageSectionTitle title="취소/반품/교환 내역" />

      <Box sx={{ width: "100%" }}>
        <MyPageTabs
          tabId="cancelList"
          onChangeTabValue={handleTabValueChange}
          tabValue={tabValue}
          tabs={tabList}
        />

        {tabValue === 0 && <MyPageCancelTebPanel cancelType="cancel__all" />}
        {tabValue === 1 && <MyPageCancelTebPanel cancelType="cancel__cancel" />}
        {tabValue === 2 && <MyPageCancelTebPanel cancelType="cancel__return" />}
        {tabValue === 3 && <MyPageCancelTebPanel cancelType="cancel__change" />}
      </Box>
    </section>
  )
}

export default MyPageCancelList
