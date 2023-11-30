// {
//     next: { revalidate: 300 },
//   }

import { Products } from "@/features/common/types/product"

export const bestProductListAPI = {
  getBestProductList: async (): Promise<Products> => {
    const response = await fetch(
      `${process.env.BASE_URL}/api/bestProductList`,
      {
        cache: "no-cache",
      }
    )

    return response.json()
  },
}
