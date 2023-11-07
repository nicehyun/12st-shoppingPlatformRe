import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageInquiryCustomerCounselingContentList from "./MyPageInquiryCustomerCounselingContentList"
import MyPageInquiryCustomerCounselingWriteButton from "./MyPageInquiryCustomerCounselingWriteButton"

const MyPageInquiryCustomerCounselingList = () => {
  return (
    <div className="mt-[50px]">
      <MyPageInquiryCustomerCounselingWriteButton />

      <div className="flex border-t-[1px] font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]">
        <MyPageTableHeaderEl headerContent="CS구분" equalParts={4} isStart />
        <MyPageTableHeaderEl
          headerContent="제목"
          equalParts={2}
          isStart
          className="ml-[10px]"
        />

        <MyPageTableHeaderEl headerContent="작성일" equalParts={4} />
        <MyPageTableHeaderEl headerContent="답변유무" equalParts={4} />
      </div>

      <MyPageInquiryCustomerCounselingContentList />
    </div>
  )
}

export default MyPageInquiryCustomerCounselingList
