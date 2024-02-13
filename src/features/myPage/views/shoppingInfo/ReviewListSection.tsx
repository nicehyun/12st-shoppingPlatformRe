"use client"

import SectionTitle from "../SectionTitle"
import { useReviewListTabs } from "../../hooks/useReviewListTabs"
import CustomTabs from "@/features/common/views/CustomTabs"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import MyPageListNoneContents from "../MyPageListNoneContents"
import { Fragment } from "react"

const ReviewListSection = () => {
  const { handleTabValueChange, tabValue, tabs } = useReviewListTabs()

  const reviewListComponents = [
    <MyPageListNoneContents
      key="mypage-review__available"
      content="아직 리뷰를 작성할 수 있는 주문내역이 없습니다"
    />,
    <MyPageListNoneContents
      key="mypage-review__previous"
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
        <Fragment key={reviewEl.key}>
          <CustomTabPanel value={tabValue} index={index}>
            {reviewEl}
          </CustomTabPanel>
        </Fragment>
      ))}
    </section>
  )
}

export default ReviewListSection
