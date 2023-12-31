import { Products } from "@/features/common/types/product"

type IndividualSectionProductList = {
  bestProductList: Products
  arrivalProductList: Products
  topSaleProductList: Products
}

export const homeAPI = {
  getIndividualSectionProductList:
    async (): Promise<IndividualSectionProductList> => {
      const response = await fetch(`${process.env.NEXTAUTH_URL}/api/home`, {
        next: { revalidate: 10000 },
      })

      return response.json()
    },
}
