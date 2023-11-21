import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageMileAnnouncement from "./MyPageMileAnnouncement"
import MyPageTotalMileInfo from "./MyPageTotalMileInfo"
import MyPageUseMileAndGetMileInfo from "./MyPageUseMileAndGetMileInfo"

const MyPageMileInfo = () => {
  return (
    <section>
      <MyPageSectionTitle title="마일리지" />

      <MyPageTotalMileInfo />

      <MyPageUseMileAndGetMileInfo />

      <MyPageMileAnnouncement />
    </section>
  )
}

export default MyPageMileInfo
