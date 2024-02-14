"use client"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Link from "next/link"

interface IMyPageCategoryLi {
  id: string
  categoryTitle: string
  categoryList: {
    categoryListContents: string[]
    categoryListRoutes: ROUTE[]
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
      <h3 className="pb-[14px] font-bold text-[24px] sm:text-[20px] md:text-[20px] lg:text-[22px] border-b-[4px]">
        {categoryTitle}
      </h3>
      <ul>
        {categoryListContents.map((categoryListContent, index) => (
          <li
            key={`${id}-${index}`}
            className={`${
              index !== 0 && "border-t-[1px]"
            }  border-lightBorder text-[16px] sm:text-[18px] md:text-[18px] lg:text-[14px] font-normal lg:font-light xl:font-light hover:font-semibold text-black dark:text-border dark:text-lightborder dark:hover:text-border`}
          >
            <Link
              href={`${categoryListRoutes[index]}`}
              className={`block link active:text-lightRed py-[20px] cursor-pointer ${
                pathname === `${categoryListRoutes[index]}`
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
