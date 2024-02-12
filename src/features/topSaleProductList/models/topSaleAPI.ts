import { validatePageParam } from "@/features/common/utils/error"

export const topSaleAPI = {
  getTopSaleProductList: async (pageParam: number) => {
    validatePageParam(pageParam)

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/topSale`,
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
