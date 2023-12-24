import { Products } from "@/features/common/types/product"
import { Categories } from "../types/category"

export const layoutAPI = {
  getFiltedProductListWithThridCategory: async (
    categoriesPath: string
  ): Promise<Products> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryManagement/${categoriesPath}`,
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
}
