import SectionTitle from "../SectionTitle"
import MyPageMileAnnouncement from "./MyPageMileAnnouncement"
import MyPageTotalMileInfo from "./MyPageTotalMileInfo"
import MyPageUseMileAndGetMileInfo from "./MyPageUseMileAndGetMileInfo"

const MyPageMileInfo = () => {
  return (
    <section>
      <SectionTitle title="마일리지" />

      <MyPageTotalMileInfo />

      <MyPageUseMileAndGetMileInfo />

      <MyPageMileAnnouncement />
    </section>
  )
}

export default MyPageMileInfo
