import { ReactNode } from "react"
import MyPageCategory from "./MyPageCategory"
import MyPageNameAndHeart from "./MyPageNameAndHeart"
import MyPageRewards from "./MyPageRewards"

interface INonMobileMyPageLayout {
  children: ReactNode
}

const NonMobileMyPageLayout = ({ children }: INonMobileMyPageLayout) => {
  return (
    <>
      <div className="w-[200px] h-full mr-[40px]">
        <MyPageNameAndHeart />
        <MyPageCategory />
      </div>

      <div className="w-full">
        <MyPageRewards />
        {children}
      </div>
    </>
  )
}

export default NonMobileMyPageLayout
