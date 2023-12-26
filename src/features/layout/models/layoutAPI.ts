import { Products } from "@/features/common/types/product"
import { Categories } from "../types/category"

type getSearchResultResponse = {
  filteredProductsMatchingName: Products
  filteredProductsMatchingBrand: Products
}

export const layoutAPI = {
  getFiltedProductListWithThridCategory: async (
    categoriesPath: string
  ): Promise<Products> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryManagement${categoriesPath}`,
      {
        next: { revalidate: 10000 },
      }
    )

    return response.json()
  },

  getCategories: async (): Promise<Categories[] | undefined> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
      {
        next: { revalidate: 10000 },
      }
    )

    return response.json()
  },

  getSearchResult: async (
    SearchPath: string
  ): Promise<getSearchResultResponse> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchProductList/${SearchPath}`,
      {
        next: { revalidate: 10000 },
      }
    )

    return response.json()
  },
}
