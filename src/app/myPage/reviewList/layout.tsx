import MyPageReviewList from "@/features/myPage/views/MyPageReviewList"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return <MyPageReviewList>{children}</MyPageReviewList>
}

export default layout
