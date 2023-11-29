import { Products } from "@/features/common/types/product"

type IndividualSectionProductList = {
  bestProductList: Products
  arrivalProductList: Products
  topSaleProductList: Products
}

export const homeAPI = {
  getIndividualSectionProductList:
    async (): Promise<IndividualSectionProductList> => {
      const response = await fetch("http://localhost:3000/api/home", {
        next: { revalidate: 300 },
      })

      return response.json()
    },
}
