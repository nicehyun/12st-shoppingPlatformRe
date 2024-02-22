import { getAfterEquals, parseSliceToAnd } from "./text"

interface IDecodeCategoryPaths {
  categories: string[]
}

export const getCategory = (categoryPath: string) => {
  if (categoryPath === undefined) return null

  return getAfterEquals(decodeURIComponent(categoryPath))
}

const getCategoryPath = (categoryPath: string | null) => {
  if (categoryPath === null) return ""

  return categoryPath !== null ? `/${categoryPath}` : ""
}

export const decodeCategoryPaths = ({ categories }: IDecodeCategoryPaths) => {
  const category = categories

  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] = category

  const firstCategory = getCategory(firstCategoryPath)
  const secondCategory = getCategory(secondCategoryPath)
  const thirdCategory = getCategory(thirdCategoryPath)

  const parsedFirstCategoryPath = getCategoryPath(firstCategory)
  const parsedSecondCategoryPath = getCategoryPath(secondCategory)
  const parsedThirdCategoryPath = getCategoryPath(thirdCategory)

  const categoriesPath =
    parsedFirstCategoryPath + parsedSecondCategoryPath + parsedThirdCategoryPath

  return {
    categoriesPath,
    firstCategory: firstCategory ? parseSliceToAnd(firstCategory) : "",
    secondCategory: secondCategory ? parseSliceToAnd(secondCategory) : "",
    thirdCategory: thirdCategory ? parseSliceToAnd(thirdCategory) : "",
  }
}
