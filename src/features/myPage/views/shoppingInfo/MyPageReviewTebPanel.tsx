"use client"

interface IMyPageReviewTebPanel {
  reviewType: "available-review" | "my-review"
}

const MyPageReviewTebPanel = ({ reviewType }: IMyPageReviewTebPanel) => {
  const renderAvailableReviewContent = () => {
    return (
      <div className="h-[400px] flexCenter border-border border-b-[1px]">
        아직 리뷰를 작성할 수 있는 주문내역이 없습니다.
      </div>
    )
  }

  const renderMyReviewContent = () => {
    return (
      <div className="h-[400px] flexCenter border-border border-b-[1px]">
        작성한 리뷰가 없습니다
      </div>
    )
  }

  return (
    <>
      {reviewType === "available-review" && renderAvailableReviewContent()}
      {reviewType === "my-review" && renderMyReviewContent()}
    </>
  )
}

export default MyPageReviewTebPanel
