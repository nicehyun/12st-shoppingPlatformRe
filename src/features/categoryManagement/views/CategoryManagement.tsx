import SectionTitle from "@/features/myPage/views/SectionTitle"

import SecondCategories from "@/features/bestProductList/SecondCategories"
import ThirdCategories from "@/features/bestProductList/ThirdCategories"

import FiltedProcutList from "./FiltedProcutList"
import { decodedCategoriesWithPathArray } from "../utils/category"
import SectionSuspense from "@/features/common/views/SuspenseIncludingFallback"

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
      <SectionTitle title={sectionTitle} />

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

      <SectionSuspense errorMessage="상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.">
        <FiltedProcutList categoriesPath={categoriesPath} />
      </SectionSuspense>
    </section>
  )
}

export default CategoryManagement
