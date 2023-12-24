import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageInquiryCustomerCounselingContentList from "./MyPageInquiryCustomerCounselingContentList"
import MyPageInquiryCustomerCounselingWriteButton from "./MyPageInquiryCustomerCounselingWriteButton"

const MyPageInquiryCustomerCounselingList = () => {
  return (
    <section className="mt-[50px]">
      <MyPageInquiryCustomerCounselingWriteButton />

      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl headerContent="CS구분" className="w-1/3" isStart />
        <MyPageTableHeaderEl
          headerContent="문의내용"
          className="w-1/2"
          isStart
        />

        <MyPageTableHeaderEl headerContent="작성일" className="w-1/3" />
        <MyPageTableHeaderEl headerContent="답변유무" className="w-1/3" />
      </MyPageListHeaderLayout>

      <MyPageInquiryCustomerCounselingContentList />
    </section>
  )
}

export default MyPageInquiryCustomerCounselingList
