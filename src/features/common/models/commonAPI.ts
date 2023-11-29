import { Products } from "../types/product"

// TODO : revalidate 300으로 수정하기 (최종)
export const commonAPI = {
  getProductList: async (): Promise<Products | null> => {
    const response = await fetch("http://localhost:3000/api/", {
      next: { revalidate: 300000 },
    })

    return response.json()
  },
}
