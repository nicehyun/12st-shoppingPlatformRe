import MyPageCategory from "./MyPageCategory"
import MyPageCheckoutList from "./MyPageCheckoutList"
import MyPageHeartList from "./MyPageHeartList"
import MyPageNameAndHeart from "./MyPageNameAndHeart"
import MyPageRewards from "./MyPageRewards"

const NonMobileMyPageLayout = () => {
  return (
    <>
      <div className="w-[200px] h-full mr-[40px]">
        <MyPageNameAndHeart />
        <MyPageCategory />
      </div>

      <div className="w-full">
        <MyPageRewards />
        <MyPageCheckoutList />
        <MyPageHeartList />
      </div>
    </>
  )
}

export default NonMobileMyPageLayout
