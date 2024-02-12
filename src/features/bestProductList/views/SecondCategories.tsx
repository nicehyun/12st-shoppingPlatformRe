"use client"

import { useGetCategoriesQuery } from "@/features/categoryManagement/hooks/useGetCategoriesQuery"
import { Categories } from "@/features/layout/types/category"
import Link from "next/link"
import SkeletonCategoies from "./SkeletonCategoies"
import SecondCategoryLinks from "./SecondCategoryLinks"

interface ISecondCategories {
  linkDefaultHref: string
}

const SecondCategories = ({ linkDefaultHref }: ISecondCategories) => {
  const { categories, isLoading, currentCategory } = useGetCategoriesQuery()

  const { secondCategory: currentSecondCategory } = currentCategory

  if (isLoading) {
    return <SkeletonCategoies />
  }

  const renderSecondCategories = (
    categories: Categories[],
    currentSecondCategory: string
  ) => {
    return categories.map((categoryData: Categories, index) => {
      const firstCategory = Object.keys(categoryData)[0]
      const secondCategories = categoryData[firstCategory]

      return (
        <SecondCategoryLinks
          key={`product-categories-second-${index}`}
          currentSecondCategory={currentSecondCategory}
          firstCategory={firstCategory}
          linkDefaultHref={linkDefaultHref}
          secondCategories={secondCategories}
        />
      )
    })
  }

  return (
    <div className="border-[1px] bg-white mt-[50px] px-[10px] py-[20px]">
      <Link
        rel="preload"
        href={linkDefaultHref}
        className={`inline-block relative text-[14px] ml-[10px] mr-[20px] text-lightBlack ${
          !currentSecondCategory ? "text-lightRed font-semibold" : ""
        } `}
      >
        전체
      </Link>
      {renderSecondCategories(categories, currentSecondCategory)}
    </div>
  )
}

export default SecondCategories
