import FeedbackModal from "@/features/common/views/FeedbackModal"
import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import MoblieMyPageLayout from "@/features/myPage/views/MoblieMyPageLayout"
import NonMobileMyPageLayout from "@/features/myPage/views/NonMobileMyPageLayout"
import { ReactNode } from "react"

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout classNames="px-0 relative">
        <NonMobileMyPageLayout>{children}</NonMobileMyPageLayout>

        <MoblieMyPageLayout>{children}</MoblieMyPageLayout>
      </PageLayout>

      <Navigation />
      <FeedbackModal />
    </>
  )
}

export default MypageLayout
