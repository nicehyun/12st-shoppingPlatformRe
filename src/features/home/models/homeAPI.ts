import { Products } from "@/features/common/types/product"

type IndividualSectionProductList = {
  bestProductList: Products
  arrivalProductList: Products
  topSaleProductList: Products
}

export const homeAPI = {
  getIndividualSectionProductList:
    async (): Promise<IndividualSectionProductList | null> => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/home`,
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
