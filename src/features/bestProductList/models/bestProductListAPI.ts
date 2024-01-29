import { Products } from "@/features/common/types/product"

export const bestProductListAPI = {
  getBestProductListWithCategory: async (
    categoriesPath: string
  ): Promise<Products> => {
    console.log(categoriesPath)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bestProductList/${categoriesPath}`,
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
