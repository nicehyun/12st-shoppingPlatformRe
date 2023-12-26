import { Fragment, use } from "react"
import { layoutAPI } from "../layout/models/layoutAPI"
import { Categories } from "../layout/types/category"
import Link from "next/link"
import { getAfterEquals, parseAndToSlice } from "../common/utils/text"

interface ISecondCategories {
  categoriesPath: string[] | undefined
  linkDefaultHref: string
}

const SecondCategories = ({
  categoriesPath,
  linkDefaultHref,
}: ISecondCategories) => {
  const fommatedCategoriesPath = categoriesPath ?? []

  const categories = use(layoutAPI.getCategories()) ?? []

  const [, secondCategoryPath] = fommatedCategoriesPath

  const selectedSecondCategory = getAfterEquals(
    decodeURIComponent(secondCategoryPath)
  )

  const renderSecondCategories = (categories: Categories[]) => {
    let index = 0
    return categories.map((categoryData: Categories) => {
      const firstCategory = Object.keys(categoryData)[0]

      const secondCategories = categoryData[firstCategory]

      return Object.keys(secondCategories).map((secondCategory) => {
        index += 1

        return (
          <Fragment key={`product-categories-second-${secondCategory}`}>
            <Link
              href={`${linkDefaultHref}/firstCategory=${firstCategory}/secondCategory=${parseAndToSlice(
                secondCategory
              )}`}
              className={`inline-block relative text-[14px] ml-[10px] mr-[20px] text-lightBlack  before:vertical-divider before:-mx-[16px]
               ${
                 selectedSecondCategory === parseAndToSlice(secondCategory)
                   ? "text-lightRed font-semibold"
                   : ""
               } `}
            >
              {secondCategory}
            </Link>
          </Fragment>
        )
      })
    })
  }

  return (
    <div className="border-[1px] bg-white mt-[50px] px-[10px] py-[20px]">
      <Link
        href={linkDefaultHref}
        className={`inline-block relative text-[14px] ml-[10px] mr-[20px] text-lightBlack ${
          fommatedCategoriesPath.length === 0
            ? "text-lightRed font-semibold"
            : ""
        } `}
      >
        전체
      </Link>
      {renderSecondCategories(categories)}
    </div>
  )
}

export default SecondCategories
