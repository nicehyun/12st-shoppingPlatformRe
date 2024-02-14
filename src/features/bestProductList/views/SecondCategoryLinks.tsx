import { parseAndToSlice } from "@/features/common/utils/text"
import { Categories } from "@/features/layout/types/category"
import Link from "next/link"

interface ISecondCategoryLinks {
  firstCategory: string
  secondCategories: Categories[string]
  currentSecondCategory: string
  linkDefaultHref: string
}

const SecondCategoryLinks = ({
  currentSecondCategory,
  firstCategory,
  secondCategories,
  linkDefaultHref,
}: ISecondCategoryLinks) => {
  const getClassName = (
    currentSecondCategory: string,
    secondCategory: string
  ) => {
    const baseClass =
      "inline-block relative text-[14px] ml-[10px] mr-[20px] text-lightBlack before:vertical-divider before:-mx-[16px]"
    const activeClass = "text-lightRed font-semibold"
    return currentSecondCategory === parseAndToSlice(secondCategory)
      ? `${baseClass} ${activeClass}`
      : baseClass
  }

  return Object.keys(secondCategories).map((secondCategory) => {
    return (
      <Link
        key={`product-categories-second-${secondCategory}`}
        href={`${linkDefaultHref}/firstCategory=${firstCategory}/secondCategory=${parseAndToSlice(
          secondCategory
        )}`}
        className={getClassName(currentSecondCategory, secondCategory)}
      >
        {secondCategory}
      </Link>
    )
  })
}

export default SecondCategoryLinks
