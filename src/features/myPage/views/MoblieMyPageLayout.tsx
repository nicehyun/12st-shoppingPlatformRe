import MyPageCouponSection from "@/app/myPage/[email]/page"
import MyPageCategory from "./MyPageCategory"
import MyPageNameAndHeart from "./MyPageNameAndHeart"
import MyPageRewards from "./MyPageRewards"

const MoblieMyPageLayout = () => {
  return (
    <>
      <MyPageNameAndHeart />
      <MyPageRewards />
      <MyPageCategory />
      {/* <MyPageCouponSection /> */}
    </>
  )
}

export default MoblieMyPageLayout
