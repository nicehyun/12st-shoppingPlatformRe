import MyPageSectionTitle from "@/features/myPage/views/MyPageSectionTitle"

import SecondCategories from "@/features/bestProductList/SecondCategories"
import ThirdCategories from "@/features/bestProductList/ThirdCategories"

import FiltedProcutList from "./FiltedProcutList"
import { decodedCategoriesWithPathArray } from "../utils/category"

interface ICategoryManagement {
  categoriesPath: string[]
}

const CategoryManagement = ({ categoriesPath }: ICategoryManagement) => {
  const { decodedFirstCategory, decodedSecondCategory, decodedThirdCategory } =
    decodedCategoriesWithPathArray(categoriesPath)

  const sectionTitle = decodedFirstCategory
    ? decodedThirdCategory
      ? `${decodedFirstCategory} > ${decodedSecondCategory} > ${decodedThirdCategory}`
      : `${decodedFirstCategory} > ${decodedSecondCategory}`
    : "CATEGORY"

  return (
    <section>
      {/* TODO : MyPageSectionTitle common으로 수정하기 */}
      <MyPageSectionTitle title={sectionTitle} />

      <SecondCategories
        categoriesPath={categoriesPath}
        linkDefaultHref="/categoryManagement"
      />

      {categoriesPath && (
        <ThirdCategories
          categoriesPath={categoriesPath}
          linkDefaultHref="/categoryManagement"
        />
      )}

      <FiltedProcutList categoriesPath={categoriesPath} />
    </section>
  )
}

export default CategoryManagement
