import { Products } from "../types/product"

export const commonAPI = {
  getProductList: async (): Promise<Products | null> => {
    const response = await fetch(`${process.env.BASE_URL}/api`, {
      next: { revalidate: 300 },
    })

    return response.json()
  },
}