import MyPageInquiryCustomerCounselingContentList from "./InquiryCustomerCounselingContentList"
import InquiryCustomerCounselingListHeader from "./InquiryCustomerCounselingListHeader"
import InquiryCustomerCounselingWriteButton from "./InquiryCustomerCounselingWriteButton"

const InquiryCustomerCounselingList = () => {
  return (
    <div className="mt-[50px]">
      <InquiryCustomerCounselingWriteButton />

      <InquiryCustomerCounselingListHeader />

      <MyPageInquiryCustomerCounselingContentList />
    </div>
  )
}

export default InquiryCustomerCounselingList
