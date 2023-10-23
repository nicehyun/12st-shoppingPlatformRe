"use client"

import Button from "@/common/views/Button"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { BsFillSuitHeartFill } from "react-icons/bs"

const MyPageNameAndHeart = () => {
  const { sessionQuery } = useSessionQuery()
  return (
    <section className="flex sm:items-center md:items-center justify-between sm:bg-black md:bg-black sm:text-white md:text-white dark:bg-white dark:text-black h-[120px] w-full sm:px-[20px] md:px-[20px] sm:border-b-[1px] md:border-b-[1px] sm:border-white md:border-white">
      <h3 className="font-bold text-[28px]">{sessionQuery?.user.name}</h3>
      <Button
        classNames="sm:bg-white md:bg-white xl:bg-black lg:bg-black rounded-full w-[40px] h-[40px] flexCenter"
        content={
          <span className="text-lightRed">
            <BsFillSuitHeartFill />
          </span>
        }
      ></Button>
    </section>
  )
}

export default MyPageNameAndHeart
