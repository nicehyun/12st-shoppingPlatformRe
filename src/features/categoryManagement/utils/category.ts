import { getAfterEquals } from "@/features/common/utils/text"

export const decodedCategoriesWithPathArray = (categoriesPath: string[]) => {
  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    categoriesPath ?? []

  const decodedFirstCategory = getAfterEquals(
    decodeURIComponent(firstCategoryPath ?? "")
  )
  const decodedSecondCategory = getAfterEquals(
    decodeURIComponent(secondCategoryPath ?? "")
  )
  const decodedThirdCategory = getAfterEquals(
    decodeURIComponent(thirdCategoryPath ?? "")
  )
  return {
    decodedFirstCategory,
    decodedSecondCategory,
    decodedThirdCategory,
  }
}
