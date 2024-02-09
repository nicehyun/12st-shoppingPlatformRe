"use client"

import SectionTitle from "../SectionTitle"
import { useReviewListTabs } from "../../hooks/useReviewListTabs"
import CustomTabs from "@/features/common/views/CustomTabs"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import MyPageListNoneContents from "../MyPageListNoneContents"

const ReviewListSection = () => {
  const { handleTabValueChange, tabValue, tabs } = useReviewListTabs()

  const reviewListComponents = [
    <MyPageListNoneContents
      key="mypae_cancelList_all"
      content="아직 리뷰를 작성할 수 있는 주문내역이 없습니다"
    />,
    <MyPageListNoneContents
      key="mypae_cancelList_cancel"
      content="작성한 리뷰가 없습니다"
    />,
  ]

  return (
    <section>
      <SectionTitle title="상품 리뷰" />

      <CustomTabs
        id="reviewList"
        onChangeTabs={handleTabValueChange}
        tabs={tabs}
        tabsValue={tabValue}
      />

      {reviewListComponents.map((reviewEl, index) => (
        <>
          <CustomTabPanel value={tabValue} index={index}>
            {reviewEl}
          </CustomTabPanel>
        </>
      ))}
    </section>
  )
}

export default ReviewListSection
