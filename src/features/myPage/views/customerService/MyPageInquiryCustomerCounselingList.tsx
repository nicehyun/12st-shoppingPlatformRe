import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageInquiryCustomerCounselingContent from "./MyPageInquiryCustomerCounselingContent"
import MyPageInquiryCustomerCounselingWriteButton from "./MyPageInquiryCustomerCounselingWriteButton"

const MyPageInquiryCustomerCounselingList = () => {
  return (
    <div className="mt-[50px]">
      <MyPageInquiryCustomerCounselingWriteButton />

      <div className="flex border-t-[1px] font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]">
        <MyPageTableContentEl content="CS구분" equalParts={4} />
        <MyPageTableContentEl content="제목" equalParts={4} />
        <MyPageTableContentEl content="" equalParts={2} />
        <MyPageTableContentEl content="작성일" equalParts={4} />
        <MyPageTableContentEl content="답변유무" equalParts={4} />
      </div>

      <MyPageInquiryCustomerCounselingContent />
    </div>
  )
}

export default MyPageInquiryCustomerCounselingList
