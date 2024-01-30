import { Products } from "@/features/common/types/product"

export const bestProductListAPI = {
  getBestProductListWithCategory: async (
    categoriesPath: string,
    pageParam: number
  ): Promise<Products> => {
    if (pageParam === undefined) return []

    const fomattedPageParam = pageParam.toString()

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bestProductList/${categoriesPath}`,
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
