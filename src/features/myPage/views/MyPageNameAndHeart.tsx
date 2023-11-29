"use client"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { BsFillSuitHeartFill } from "react-icons/bs"

const MyPageNameAndHeart = () => {
  const { sessionQuery } = useSessionQuery()
  const { routeTo } = useNavigations()

  return (
    <section className="flex sm:items-center md:items-center justify-between dark:bg-white sm:bg-black md:bg-black lg:dark:bg-black xl:dark:bg-black sm:text-white md:text-white dark:text-black h-[120px] w-full sm:px-[20px] md:px-[20px] sm:border-b-[1px] md:border-b-[1px] sm:border-border md:border-border">
      <h3 className="font-bold text-[28px] dark:lg:text-white dark:xl:text-white">
        {sessionQuery?.user.name}
      </h3>
      <Button
        onClick={() => routeTo(ROUTE.HEARTPRODUCTLIST)}
        classNames="bg-black dark:bg-white sm:bg-white md:bg-white dark:sm:bg-black dark:md:bg-black rounded-full w-[40px] h-[40px] flexCenter"
        content={
          <span className="text-lightRed">
            <BsFillSuitHeartFill />
          </span>
        }
      />
    </section>
  )
}

export default MyPageNameAndHeart
