import { categoryAPI } from "@/features/categoryManagement/models/categoryAPI"
import CategoryManagementSection from "@/features/categoryManagement/views/CategoryManagementSection"
import { decodeCategoryPaths } from "@/features/common/models/segment"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient"
import { dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

interface ICategoryProductManagementPageProps {
  params: {
    categories: string[]
  }
}

export async function generateMetadata({
  params,
}: ICategoryProductManagementPageProps): Promise<Metadata> {
  const { secondCategory, thirdCategory } = decodeCategoryPaths({
    categories: params.categories ?? [],
  })

  const selctedCategory = thirdCategory
    ? thirdCategory
    : secondCategory
    ? secondCategory
    : "전체"

  return {
    title: `${selctedCategory} 카테고리 상품 - 12ST`,
    description: `${selctedCategory}에 대한 카테고리 상품`,
  }
}

const CategoryProductManagementPage = async ({
  params,
}: ICategoryProductManagementPageProps) => {
  const queryClient = getQueryClient()

  const { categoriesPath, firstCategory, secondCategory, thirdCategory } =
    decodeCategoryPaths({
      categories: params.categories ?? [],
    })

  const queryKey = [
    "filtedProductListWithCategory",
    "initial",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  await queryClient.prefetchQuery(queryKey, () =>
    categoryAPI.getFiltedProductListWithCategory(categoriesPath, 1)
  )

  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <CategoryManagementSection categoriesPath={params.categories} />
    </Hydrate>
  )
}

export default CategoryProductManagementPage
