import { InfinityProductResponse } from "@/features/common/types/product"
import { validatePageParam } from "@/features/common/utils/error"
import { Categories } from "@/features/layout/types/category"

export const categoryAPI = {
  getCategories: async (): Promise<Categories[] | undefined> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
        {
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
  getFiltedProductListWithCategory: async (
    categoriesPath: string,
    pageParam: number
  ): Promise<InfinityProductResponse> => {
    validatePageParam(pageParam)

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryManagement${categoriesPath}`,
        {
          headers: { pageParam: fomattedPageParam },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error) {
      return {
        productList: [],
        totalCount: "0",
      }
    }
  },
}
