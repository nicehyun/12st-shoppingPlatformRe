import { InfinityProductResponse } from "@/features/common/types/product"
import { validatePageParam } from "@/features/common/utils/error"

export const searchAPI = {
  getSearchResultMatchingName: async (
    searchParam: string,
    pageParam: number
  ): Promise<InfinityProductResponse> => {
    validatePageParam(pageParam)

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchProductList/product/${searchParam}`,
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
  getSearchResultMatchingBrand: async (
    searchParam: string,
    pageParam: number
  ): Promise<InfinityProductResponse> => {
    validatePageParam(pageParam)
    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchProductList/brand/${searchParam}`,
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
