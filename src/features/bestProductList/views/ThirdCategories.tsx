"use client"

import { useGetCategoriesQuery } from "@/features/layout/hooks/useGetCategoriesQuery"
import SkeletonCategoies from "./SkeletonCategoies"
import ThirdCategoryLinks from "./ThirdCategoryLinks"

interface IThirdCategories {
  linkDefaultHref: string
}

const ThirdCategories = ({ linkDefaultHref }: IThirdCategories) => {
  const { categories, isLoading, currentCategory } = useGetCategoriesQuery()

  const {
    firstCategory: currentFirstCategory,
    secondCategory: currentSecondCategory,
    thirdCategory: currentThirdCategory,
  } = currentCategory

  if (isLoading) {
    return <SkeletonCategoies />
  }

  if (!currentSecondCategory) return <></>

  const thirdCategories =
    categories
      .filter((category) => currentFirstCategory in category)
      .map((category) => category[currentFirstCategory][currentSecondCategory])
      .flat() || []

  const renderThirdCategoryLinks = (
    thirdCategories: string[],
    linkDefaultHref: string,
    firstCategory: string,
    seconCategory: string,
    currentThirdCategory: string
  ) => {
    return (
      <ThirdCategoryLinks
        currentThirdCategory={currentThirdCategory}
        firstCategory={firstCategory}
        linkDefaultHref={linkDefaultHref}
        secondCategory={seconCategory}
        thirdCategories={thirdCategories}
      />
    )
  }

  return (
    <div className="border-[1px] bg-white mt-[20px] px-[10px] py-[20px]">
      {renderThirdCategoryLinks(
        thirdCategories,
        linkDefaultHref,
        currentFirstCategory,
        currentSecondCategory,
        currentThirdCategory
      )}
    </div>
  )
}

export default ThirdCategories
