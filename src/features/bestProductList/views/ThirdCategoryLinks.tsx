import { parseAndToSlice } from "@/features/common/models/text"
import Link from "next/link"

interface IThirdCategoryLinks {
  thirdCategories: string[]
  linkDefaultHref: string
  firstCategory: string
  secondCategory: string
  currentThirdCategory: string
}

const ThirdCategoryLinks = ({
  currentThirdCategory,
  firstCategory,
  linkDefaultHref,
  secondCategory,
  thirdCategories,
}: IThirdCategoryLinks) => {
  const getClassName = (
    thirdCategory: string,
    currentThirdCategory: string,
    index: number
  ) => {
    const baseClass =
      "inline-block relative text-[14px] ml-[10px] mr-[20px] text-lightBlack"
    const activeClass = "text-lightRed font-semibold"
    const dividerClass = "before:vertical-divider before:-mx-[16px]"
    const classes = [baseClass]

    if (thirdCategory === currentThirdCategory) {
      classes.push(activeClass)
    }
    if (index !== 0) {
      classes.push(dividerClass)
    }
    return classes.join(" ")
  }

  return thirdCategories.map((thirdCategory, index) => (
    <Link
      key={`product-categories-thrid-${thirdCategory}`}
      href={`${linkDefaultHref}/firstCategory=${firstCategory}/secondCategory=${parseAndToSlice(
        secondCategory
      )}/thirdCategory=${parseAndToSlice(thirdCategory)}`}
      className={getClassName(thirdCategory, currentThirdCategory, index)}
    >
      {thirdCategory}
    </Link>
  ))
}

export default ThirdCategoryLinks
