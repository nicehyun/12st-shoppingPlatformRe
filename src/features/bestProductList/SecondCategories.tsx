"use client"

import { Fragment, use } from "react"
import { layoutAPI } from "../layout/models/layoutAPI"
import { Categories } from "../layout/types/category"
import Link from "next/link"
import { getAfterEquals, parseAndToSlice } from "../common/utils/text"
import { useGetCategoriesQuery } from "../layout/hooks/useGetCategoriesQuery"

interface ISecondCategories {
  categoriesPath: string[] | undefined
}
// TODO : Link 표시
const SecondCategories = ({ categoriesPath }: ISecondCategories) => {
  const fommatedCategoriesPath = categoriesPath ?? []

  // const categories = use(layoutAPI.getCategories()) ?? []
  const { categories } = useGetCategoriesQuery()

  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    fommatedCategoriesPath

  const firstCategory = getAfterEquals(firstCategoryPath)
  const secondCategory = getAfterEquals(decodeURI(secondCategoryPath))
  const thirdCategory = getAfterEquals(thirdCategoryPath)

  console.log(decodeURI(secondCategoryPath))

  const renderSecondCategories = (categories: Categories[]) => {
    let index = 0
    return categories.map((categoryData) => {
      const firstCategory = Object.keys(categoryData)[0]

      const secondCategories = categoryData[firstCategory]

      return Object.keys(secondCategories).map((secondCategory) => {
        index += 1
        return (
          <Fragment key={`bestProductList-categories-second-${secondCategory}`}>
            <Link
              href={`/bestProductList/firstCategory=${firstCategory}/secondCategory=${parseAndToSlice(
                secondCategory
              )}`}
              className={`inline-block relative text-[14px] ml-[10px] ${
                index !== 1 ? "before:vertical-divider before:-mx-[16px]" : ""
              }  mr-[20px] text-lightBlack`}
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
      {renderSecondCategories(categories)}
    </div>
  )
}

export default SecondCategories
