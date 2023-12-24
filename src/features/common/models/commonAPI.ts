import { Products } from "../types/product"

export const commonAPI = {
  getProductList: async (): Promise<Products | null> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
      next: { revalidate: 10000 },
    })

    return response.json()
  },
}
