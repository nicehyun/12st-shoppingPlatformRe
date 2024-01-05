import SectionTitle from "../SectionTitle"
import MyPageInquiryCustomerCounselingAnnouncement from "./MyPageInquiryCustomerCounselingAnnouncement"
import MyPageInquiryCustomerCounselingList from "./MyPageInquiryCustomerCounselingList"

const MyPageInquiryCustomerCounseling = () => {
  return (
    <section>
      <SectionTitle title="1:1 문의내역" />
      <MyPageInquiryCustomerCounselingAnnouncement />

      <MyPageInquiryCustomerCounselingList />
    </section>
  )
}

export default MyPageInquiryCustomerCounseling
