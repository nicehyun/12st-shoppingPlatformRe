"use client"

import { useNavigations } from "@/common/hooks/useNavigations"
import Link from "next/link"
import { MyPageRoute } from "../types/route"

interface IMyPageCategoryLi {
  id: string
  categoryTitle: string
  categoryList: {
    categoryListContents: string[]
    categoryListRoutes: MyPageRoute[]
  }
  className?: string
}

const MyPageCategoryEl = ({
  id,
  categoryTitle,
  categoryList,
  className,
}: IMyPageCategoryLi) => {
  const { categoryListRoutes, categoryListContents } = categoryList
  const { pathname } = useNavigations()

  return (
    <li className={`${className} list-none`}>
      <h3 className="pb-[14px] font-bold text-[24px] sm:text-[20px] md:text-[20px] lg:text-[22px] border-b-[4px] border-black">
        {categoryTitle}
      </h3>
      <ul>
        {categoryListContents.map((categoryListContent, index) => (
          <li
            key={`${id}-${index}`}
            className={`${index !== 0 && index % 2 === 0 && "border-y-[1px]"} ${
              index === 0 && "border-b-[1px]"
            } border-lightBorder py-[20px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[14px] font-normal lg:font-light xl:font-light  hover:font-semibold cursor-pointer text-black  dark:text-lightborder dark:hover:text-border`}
          >
            <Link
              href={`/myPage${categoryListRoutes[index]}#settings`}
              className={`link active:text-lightRed ${
                pathname === `/myPage${categoryListRoutes[index]}`
                  ? "text-lightRed font-semibold"
                  : ""
              }`}
            >
              {categoryListContent}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default MyPageCategoryEl
