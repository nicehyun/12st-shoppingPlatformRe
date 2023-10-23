import MyPageCategoryList from "./MyPageCategoryList"

const MyPageCategory = () => {
  return (
    <div className="w-[200px] h-full mr-[20px]">
      <section className="flex flex-col">
        <h3 className="font-bold text-[28px] mb-[20px]">이승현</h3>
        <span className="text-[18px] font-semibold cursor-pointer">
          좋아요 2
        </span>
      </section>

      <MyPageCategoryList />
    </div>
  )
}

export default MyPageCategory
