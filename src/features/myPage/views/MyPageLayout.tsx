import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/common/views/PcConditionComponent"
import MoblieMyPageLayout from "./MoblieMyPageLayout"
import NonMobileMyPageLayout from "./NonMobileMyPageLayout"

const MyPageLayout = () => {
  return (
    <section className="flex sm:flex-col md:flex-col">
      <PcConditionComponent component={<NonMobileMyPageLayout />} />

      <MobileViewConditionComponent component={<MoblieMyPageLayout />} />
    </section>
  )
}

export default MyPageLayout
