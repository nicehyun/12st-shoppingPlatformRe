import { decodedCategoriesWithPathArray } from "@/features/categoryManagement/utils/category"
import CategoryManagement from "@/features/categoryManagement/views/CategoryManagement"
import { combineStrings } from "@/features/common/utils/text"
import { layoutAPI } from "@/features/layout/models/layoutAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
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

const CategoryProductManagementPage = async ({
  params,
}: ICategoryProductManagementPageProps) => {
  const categoriesPath = params.categories
  const { decodedSecondCategory, decodedThirdCategory } =
    decodedCategoriesWithPathArray(categoriesPath)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    [
      "filtedProductListWithCategory",
      decodedSecondCategory,
      decodedThirdCategory,
    ],
    () =>
      layoutAPI.getFiltedProductListWithThridCategory(
        categoriesPath.length !== 0
          ? `/${combineStrings(categoriesPath.join(","))}`
          : ""
      ),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: Infinity,
    }
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <CategoryManagement categoriesPath={params.categories ?? ""} />
    </Hydrate>
  )
}

export default CategoryProductManagementPage
