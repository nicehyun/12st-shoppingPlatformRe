import PageLayout from "@/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"

// TODO : checkout에서 데이터 패칭
const page = () => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout>결제완료 페이지</PageLayout>

      <Navigation />
    </>
  )
}

export default page
