"use client"

import { useNavigations } from "@/common/hooks/useNavigations"
import Link from "next/link"
import { MyPageRoute } from "../types/route"

const MyPageReviewRouteList = () => {
  const { pathname } = useNavigations()

  const reviewListRouteList = [
    {
      id: "writeableReviews",
      categoryListContent: "작성 가능한 리뷰",
      categoryListRoute: MyPageRoute.WRITEABLEREVIEWS,
    },
    {
      id: "myReview",
      categoryListContent: "내 리뷰 (0)",
      categoryListRoute: MyPageRoute.MYREVIEW,
    },
  ]

  return (
    <div className="flex h-[50px] max-w-[400px] text-[14px] sm:text-[12px]">
      {reviewListRouteList.map((reiviewListRouteEl, index) => (
        <Link
          key={`reviewList-${reiviewListRouteEl.id}`}
          href={`/myPage${reiviewListRouteEl.categoryListRoute}`}
          className={`flexCenter w-1/2  ${
            pathname === `/myPage${reiviewListRouteEl.categoryListRoute}` ||
            (index === 0 &&
              pathname === `/myPage${MyPageRoute.CHECKOUTREVIEWLIST}`)
              ? "bg-black text-white border-black border-[1px] border-t-0"
              : "bg-white text-black border-border border-[1px] border-t-0"
          }}`}
        >
          {reiviewListRouteEl.categoryListContent}
        </Link>
      ))}
    </div>
  )
}

export default MyPageReviewRouteList
