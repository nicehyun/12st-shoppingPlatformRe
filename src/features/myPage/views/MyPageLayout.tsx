import MobileViewConditionComponent from "@/features/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/features/common/views/PcConditionComponent"
import { ReactNode } from "react"
import MoblieMyPageLayout from "./MoblieMyPageLayout"
import NonMobileMyPageLayout from "./NonMobileMyPageLayout"

const MyPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex sm:flex-col md:flex-col">
      <PcConditionComponent
        component={<NonMobileMyPageLayout>{children}</NonMobileMyPageLayout>}
      />

      <MobileViewConditionComponent
        component={<MoblieMyPageLayout>{children}</MoblieMyPageLayout>}
      />
    </section>
  )
}

export default MyPageLayout
