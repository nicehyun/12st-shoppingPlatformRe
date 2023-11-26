interface ICategoryProductManagementPageProps {
  params: {
    category: string[]
  }
}

const CategoryProductManagementPage = ({
  params,
}: ICategoryProductManagementPageProps) => {
  const category = params.category?.[0] ?? null

  return !category ? (
    <div>전체 카테고리 페이지</div>
  ) : (
    <div>카테고리별 상품 페이지</div>
  )
}

export default CategoryProductManagementPage
