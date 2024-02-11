import SectionTitle from "../SectionTitle"
import InquiryCustomerCounselingWriteAnnouncement from "./InquiryCustomerCounselingWriteAnnouncement"
import InquiryCustomerCounselingWriteForm from "./InquiryCustomerCounselingWriteForm"

const InquiryCustomerCounselingWriteSection = () => {
  return (
    <section>
      <SectionTitle title="1:1 문의작성" />
      <InquiryCustomerCounselingWriteAnnouncement />

      <InquiryCustomerCounselingWriteForm />
    </section>
  )
}

export default InquiryCustomerCounselingWriteSection
