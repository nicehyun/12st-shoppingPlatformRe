import { InfinityProductResponse } from "@/features/common/types/product"
import { validatePageParam } from "@/features/common/utils/error"

export const bestProductListAPI = {
  getBestProductListWithCategory: async (
    categoriesPath: string | undefined,
    pageParam: number
  ): Promise<InfinityProductResponse> => {
    validatePageParam(pageParam)

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bestProductList${categoriesPath}`,
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
