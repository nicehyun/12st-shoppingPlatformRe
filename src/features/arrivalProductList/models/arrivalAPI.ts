import { InfinityProductResponse } from "@/features/common/types/product"

export const arrivalAPI = {
  getArrivalProductList: async (
    pageParam: number
  ): Promise<InfinityProductResponse> => {
    if (
      pageParam === undefined ||
      pageParam === null ||
      typeof pageParam !== "number" ||
      pageParam < 1
    ) {
      return {
        productList: [],
        totalCount: "0",
      }
    }

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/arrivalProductList`,
        {
          headers: { pageParam: fomattedPageParam },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
