import PageLayout from "@/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import MyPageLayout from "@/features/myPage/MyPageLayout"

const MyPagePage = () => {
  return (
    <>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">
        <MyPageLayout />
      </PageLayout>

      <Navigation />
    </>
  )
}

export default MyPagePage
