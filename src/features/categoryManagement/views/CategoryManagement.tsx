import SectionTitle from "@/features/myPage/views/SectionTitle"
import SecondCategories from "@/features/bestProductList/views/SecondCategories"
import ThirdCategories from "@/features/bestProductList/views/ThirdCategories"
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
      <SectionTitle title={sectionTitle} />

      <SecondCategories linkDefaultHref="/categoryManagement" />

      <ThirdCategories linkDefaultHref="/categoryManagement" />

      <FiltedProcutList />
    </section>
  )
}

export default CategoryManagement
