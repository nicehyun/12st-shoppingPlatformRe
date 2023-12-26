import CategoryManagement from "@/features/categoryManagement/views/CategoryManagement"

interface ICategoryProductManagementPageProps {
  params: {
    categories: string[]
  }
}

const CategoryProductManagementPage = ({
  params,
}: ICategoryProductManagementPageProps) => {
  return <CategoryManagement categoriesPath={params.categories ?? ""} />
}

export default CategoryProductManagementPage
