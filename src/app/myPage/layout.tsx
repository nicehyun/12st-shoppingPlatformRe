import PageLayout from "@/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import MyPageLayout from "@/features/myPage/views/MyPageLayout"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout classNames="px-0 relative">
        <MyPageLayout>{children}</MyPageLayout>
      </PageLayout>

      <Navigation />
    </>
  )
}

export default layout
