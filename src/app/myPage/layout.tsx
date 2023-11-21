import FeedbackModal from "@/common/views/FeedbackModal"
import PageLayout from "@/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import MyPageLayout from "@/features/myPage/views/MyPageLayout"
import { ReactNode } from "react"

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout classNames="px-0 relative">
        <MyPageLayout>{children}</MyPageLayout>
      </PageLayout>

      <Navigation />
      <FeedbackModal />
    </>
  )
}

export default MypageLayout
