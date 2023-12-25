import {
  getAfterEquals,
  parseAndToSlice,
  parseSliceToAnd,
} from "../common/utils/text"
import Link from "next/link"
import { use } from "react"
import { layoutAPI } from "../layout/models/layoutAPI"

interface IThirdCategories {
  categoriesPath: string[]
}

const ThirdCategories = ({ categoriesPath }: IThirdCategories) => {
  const categories = use(layoutAPI.getCategories()) ?? []

  const firstCategory = getAfterEquals(decodeURIComponent(categoriesPath[0]))
  const seconCategory = parseSliceToAnd(
    getAfterEquals(decodeURIComponent(categoriesPath[1]))
  )

  if (!firstCategory || !seconCategory) return <></>

  const firstCategoryObj =
    categories.find((category) => firstCategory in category) ?? {}

  const secondCtegoryObj = Object.values(firstCategoryObj)

  const thirdCategories = secondCtegoryObj
    ? secondCtegoryObj[0][seconCategory]
    : []

  if (thirdCategories.length === 0) return <></>

  return (
    <div className="border-[1px] bg-white mt-[50px] px-[10px] py-[20px]">
      {thirdCategories.map((thirdCategory, secondIndex) => (
        <Link
          key={`bestProductList-categories-thrid-${thirdCategory}`}
          href={`/bestProductList/firstCategory=${firstCategory}/secondCategory=${parseAndToSlice(
            seconCategory
          )}/thirdCategory=${parseAndToSlice(thirdCategory)}`}
          className={`inline-block relative text-[14px] ml-[10px] ${
            secondIndex !== 0 ? "before:vertical-divider before:-mx-[16px]" : ""
          }  mr-[20px] text-lightBlack`}
        >
          {thirdCategory}
        </Link>
      ))}
    </div>
  )
}

export default ThirdCategories
