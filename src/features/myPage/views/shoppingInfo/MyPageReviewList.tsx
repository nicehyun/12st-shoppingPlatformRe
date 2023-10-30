import { ReactNode } from "react"
import MyPageReviewRouteList from "./MyPageReviewRouteList"
import MyPageSectionTitle from "../MyPageSectionTitle"

interface IMyPageReviewList {
  children: ReactNode
}

const MyPageReviewList = ({ children }: IMyPageReviewList) => {
  return (
    <section>
      <MyPageSectionTitle title="상품 리뷰"></MyPageSectionTitle>

      <div className="border-b-border border-b-[1px] dark:border-b-lightBlack">
        <MyPageReviewRouteList />

        {children}
      </div>
    </section>
  )
}

export default MyPageReviewList
