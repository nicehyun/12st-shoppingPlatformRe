import MyPageCategory from "./MyPageCategory"
import MyPageCheckoutList from "./MyPageCheckoutList"
import MyPageHeartList from "./MyPageHeartList"
import MyPageRewards from "./MyPageRewards"

const MyPageLayout = () => {
  return (
    <section className="flex">
      <MyPageCategory />

      <div className="w-full">
        <MyPageRewards />
        <MyPageCheckoutList />
        <MyPageHeartList />
      </div>
    </section>
  )
}

export default MyPageLayout
