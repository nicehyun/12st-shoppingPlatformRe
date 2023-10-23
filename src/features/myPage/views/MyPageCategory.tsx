"use client"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import MyPageCategoryList from "./MyPageCategoryList"

const MyPageCategory = () => {
  const { sessionQuery } = useSessionQuery()

  return (
    <div className="w-[200px] h-full mr-[20px]">
      <section className="flex flex-col">
        <h3 className="font-bold text-[28px] sm:text-[20px] md:text-[22px] mb-[20px]">
          {sessionQuery?.user.name}
        </h3>
        <span className="text-[18px] sm:text-[16px] md:text-[16px] font-semibold cursor-pointer">
          좋아요 2
        </span>
      </section>

      <MyPageCategoryList />
    </div>
  )
}

export default MyPageCategory
