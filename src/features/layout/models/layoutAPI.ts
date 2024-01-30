import { Products } from "@/features/common/types/product"
import { Categories } from "../types/category"

type getSearchResultResponse = {
  filteredProductsMatchingName: Products
  filteredProductsMatchingBrand: Products
}

export const layoutAPI = {
  getCategories: async (): Promise<Categories[] | undefined> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
        {
          next: { revalidate: 10000 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
  getSearchResult: async (
    SearchPath: string
  ): Promise<getSearchResultResponse> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchProductList/${SearchPath}`,
        {
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
