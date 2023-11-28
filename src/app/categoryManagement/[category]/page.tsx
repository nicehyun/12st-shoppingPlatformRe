import CategoryManagement from "@/features/categoryManagement/views/CategoryManagement"

interface ICategoryProductManagementPageProps {
  params: {
    category: string
  }
}

const CategoryProductManagementPage = ({
  params,
}: ICategoryProductManagementPageProps) => {
  return <CategoryManagement thirdCategory={params.category} />
}

export default CategoryProductManagementPage
