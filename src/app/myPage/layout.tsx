import FeedbackModal from "@/features/common/views/FeedbackModal"
import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import NavigationAndCategory from "@/features/layout/views/NavigationAndCategory"
import MyPageLayout from "@/features/myPage/views/MyPageLayout"
import { ReactNode } from "react"

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout classNames="px-0 relative">
        <MyPageLayout>{children}</MyPageLayout>
      </PageLayout>

      <NavigationAndCategory />
      <FeedbackModal />
    </>
  )
}

export default MypageLayout
