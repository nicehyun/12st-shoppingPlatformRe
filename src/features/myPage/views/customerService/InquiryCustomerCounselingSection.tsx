import SectionTitle from "../SectionTitle"
import InquiryCustomerCounselingAnnouncement from "./InquiryCustomerCounselingAnnouncement"
import InquiryCustomerCounselingList from "./InquiryCustomerCounselingList"

const InquiryCustomerCounselingSection = () => {
  return (
    <section>
      <SectionTitle title="1:1 문의내역" />
      <InquiryCustomerCounselingAnnouncement />

      <InquiryCustomerCounselingList />
    </section>
  )
}

export default InquiryCustomerCounselingSection
