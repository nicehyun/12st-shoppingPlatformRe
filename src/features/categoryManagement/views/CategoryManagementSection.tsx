import SectionTitle from "@/features/myPage/views/SectionTitle"
import SecondCategories from "@/features/bestProductList/views/SecondCategories"
import ThirdCategories from "@/features/bestProductList/views/ThirdCategories"
import FiltedProcutList from "./FiltedProcutList"
import { decodeCategoryPaths } from "@/features/common/models/segment"

interface ICategoryManagement {
  categoriesPath: string[]
}

const CategoryManagementSection = ({ categoriesPath }: ICategoryManagement) => {
  const { firstCategory, secondCategory, thirdCategory } = decodeCategoryPaths({
    categories: categoriesPath ?? [],
  })

  const sectionTitle = firstCategory
    ? thirdCategory
      ? `${firstCategory} > ${secondCategory} > ${thirdCategory}`
      : `${firstCategory} > ${secondCategory}`
    : "CATEGORY"

  return (
    <section>
      <SectionTitle title={sectionTitle} />

      <SecondCategories linkDefaultHref="/categoryManagement" />

      <ThirdCategories linkDefaultHref="/categoryManagement" />

      <FiltedProcutList />
    </section>
  )
}

export default CategoryManagementSection
