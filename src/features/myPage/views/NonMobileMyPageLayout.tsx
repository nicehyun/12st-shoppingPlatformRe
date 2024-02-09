import MyPageCategory from "./MyPageCategory"
import NameAndHeart from "./NameAndHeart"
import MyPageRewards from "./MyPageRewards"
import { ReactNode } from "react"

interface INonMobileMyPageLayout {
  children: ReactNode
}

const NonMobileMyPageLayout = ({ children }: INonMobileMyPageLayout) => {
  return (
    <div className="flex sm:hidden md:hidden sm:opacity-0 md:opacity-0">
      <div className="w-[200px] h-full mr-[40px]">
        <NameAndHeart />
        <MyPageCategory />
      </div>

      <div className="w-full">
        <MyPageRewards />

        {children}
      </div>
    </div>
  )
}

export default NonMobileMyPageLayout
