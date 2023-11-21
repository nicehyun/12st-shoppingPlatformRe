import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageInquiryCustomerCounselingAnnouncement from "./MyPageInquiryCustomerCounselingAnnouncement"
import MyPageInquiryCustomerCounselingList from "./MyPageInquiryCustomerCounselingList"

const MyPageInquiryCustomerCounseling = () => {
  return (
    <section>
      <MyPageSectionTitle title="1:1 문의내역" />
      <MyPageInquiryCustomerCounselingAnnouncement />

      <MyPageInquiryCustomerCounselingList />
    </section>
  )
}

export default MyPageInquiryCustomerCounseling
