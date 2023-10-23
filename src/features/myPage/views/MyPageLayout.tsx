import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/common/views/PcConditionComponent"
import MyPageCategory from "./MyPageCategory"
import MyPageCheckoutList from "./MyPageCheckoutList"
import MyPageHeartList from "./MyPageHeartList"
import MyPageRewards from "./MyPageRewards"

const MyPageLayout = () => {
  return (
    <section className="flex">
      <PcConditionComponent component={<MyPageCategory />} />
      <PcConditionComponent
        component={
          <div className="w-full">
            <MyPageRewards />
            <MyPageCheckoutList />
            <MyPageHeartList />
          </div>
        }
      />
    </section>
  )
}

export default MyPageLayout
