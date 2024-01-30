import { decodedCategoriesWithPathArray } from "@/features/categoryManagement/utils/category"
import CategoryManagement from "@/features/categoryManagement/views/CategoryManagement"
import { Metadata } from "next"

interface ICategoryProductManagementPageProps {
  params: {
    categories: string[]
  }
}

export async function generateMetadata({
  params,
}: ICategoryProductManagementPageProps): Promise<Metadata> {
  const { decodedSecondCategory, decodedThirdCategory } =
    decodedCategoriesWithPathArray(params.categories)

  const selctedCategory = decodedThirdCategory
    ? decodedThirdCategory
    : decodedSecondCategory
    ? decodedSecondCategory
    : "전체"

  return {
    title: `${selctedCategory} 카테고리 상품 - 12ST`,
    description: `${selctedCategory}에 대한 카테고리 상품`,
  }
}

const CategoryProductManagementPage = ({
  params,
}: ICategoryProductManagementPageProps) => {
  const categoriesPath = params.categories

  return <CategoryManagement categoriesPath={categoriesPath} />
}

export default CategoryProductManagementPage
