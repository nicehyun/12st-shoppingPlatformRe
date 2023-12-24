import { parseSliceToAnd } from "@/features/common/utils/text"
import { FommatedCatefories } from "../types/category"

export const parseCategoriesObject = (
  categoryArr: string[]
): FommatedCatefories => {
  const [firstCategory, secondCategory, thirdCategory] = categoryArr.map(
    (category) => category.split("=")[1].trim()
  )

  const fommatedCategories = {
    firstCategory,
    secondCategory,
    thirdCategory: parseSliceToAnd(thirdCategory),
  }

  return {
    firstCategory: fommatedCategories.firstCategory,
    secondCategory: fommatedCategories.secondCategory,
    thirdCategory: fommatedCategories.thirdCategory,
  }
}
