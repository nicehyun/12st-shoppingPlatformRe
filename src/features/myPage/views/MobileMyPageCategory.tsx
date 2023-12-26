import Button from "@/features/common/views/Button"
import MyPageCategory from "./MyPageCategory"

interface IMobileMyPageCategory {
  onHideCategory: () => void
}

const MobileMyPageCategory = ({ onHideCategory }: IMobileMyPageCategory) => {
  return (
    <div className="bg-white fixed top-0 left-0 z-50 h-screen w-screen px-[20px] overflow-y-auto">
      <MyPageCategory />

      <Button
        onClick={onHideCategory}
        classNames="absolute top-[50px] right-[30px] text-black font-bold"
        content="CLOSE"
      />
    </div>
  )
}

export default MobileMyPageCategory
