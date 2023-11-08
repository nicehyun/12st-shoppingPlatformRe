"use client"

import MyPageListNoneContents from "../MyPageListNoneContents"

interface IMyPageReviewTebPanel {
  reviewType: "review__available" | "review__my"
}

const MyPageReviewTebPanel = ({ reviewType }: IMyPageReviewTebPanel) => {
  const renderAvailableReviewContent = () => {
    return (
      <MyPageListNoneContents content="아직 리뷰를 작성할 수 있는 주문내역이 없습니다" />
    )
  }

  const renderMyReviewContent = () => {
    return <MyPageListNoneContents content="작성한 리뷰가 없습니다" />
  }

  return (
    <>
      {reviewType === "review__available" && renderAvailableReviewContent()}
      {reviewType === "review__my" && renderMyReviewContent()}
    </>
  )
}

export default MyPageReviewTebPanel
