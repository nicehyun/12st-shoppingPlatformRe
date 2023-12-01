import { Products } from "@/features/common/types/product"

type IndividualSectionProductList = {
  bestProductList: Products | null
  arrivalProductList: Products | null
  topSaleProductList: Products | null
}

export const homeAPI = {
  getIndividualSectionProductList:
    async (): Promise<IndividualSectionProductList> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/home`,
        {
          next: { revalidate: 300 },
        }
      )

      return response.json()
    },
}
