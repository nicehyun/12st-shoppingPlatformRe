import CategoryManagement from "@/features/categoryManagement/views/CategoryManagement"
import { Metadata } from "next"

interface ICategoryProductManagementPageProps {
  params: {
    categories: string[]
  }
}

export const metadata: Metadata = {
  title: "카테고리 별 상품 - 쇼핑 플랫폼 12ST",
}

const CategoryProductManagementPage = ({
  params,
}: ICategoryProductManagementPageProps) => {
  return <CategoryManagement categoriesPath={params.categories ?? ""} />
}

export default CategoryProductManagementPage
