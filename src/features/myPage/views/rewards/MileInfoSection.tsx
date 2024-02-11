import SectionTitle from "../SectionTitle"
import MyPageMileAnnouncement from "./MyPageMileAnnouncement"
import TotalMileInfo from "./TotalMileInfo"
import MyPageUseMileAndGetMileInfo from "./MyPageUseMileAndGetMileInfo"

const MileInfoSection = () => {
  return (
    <section>
      <SectionTitle title="마일리지" />

      <TotalMileInfo />

      <MyPageUseMileAndGetMileInfo />

      <MyPageMileAnnouncement />
    </section>
  )
}

export default MileInfoSection
