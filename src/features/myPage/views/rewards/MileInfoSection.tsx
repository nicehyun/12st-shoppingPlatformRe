import SectionTitle from "../SectionTitle"
import MileAnnouncement from "./MileAnnouncement"
import TotalMileInfo from "./TotalMileInfo"
import MyPageUseMileAndGetMileInfo from "./MyPageUseMileAndGetMileInfo"

const MileInfoSection = () => {
  return (
    <section>
      <SectionTitle title="마일리지" />

      <TotalMileInfo />

      <MyPageUseMileAndGetMileInfo />

      <MileAnnouncement />
    </section>
  )
}

export default MileInfoSection
