import { Products } from "@/features/common/types/product"

export const bestProductListAPI = {
  getBestProductListWithCategory: async (
    categoriesPath: string[]
  ): Promise<Products> => {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/bestProductList/${categoriesPath}`,
      {
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
