import { bestProductListAPI } from "@/features/bestProductList/models/bestProductListAPI"
import BestProductListSection from "@/features/bestProductList/views/BestProductListSection"
import { decodeCategoryPaths } from "@/features/common/models/segment"

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient"
import { dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Best 상품",
}

const BastProductListPage = async ({
  params,
}: {
  params: { categories: string[] | undefined }
}) => {
  const { categoriesPath, firstCategory, secondCategory, thirdCategory } =
    decodeCategoryPaths({
      categories: params.categories ?? [],
    })

  const queryKey = [
    "bestProductListWithCategory",
    "initial",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(queryKey, () =>
    bestProductListAPI.getBestProductListWithCategory(categoriesPath, 1)
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <BestProductListSection />
    </Hydrate>
  )
}

export default BastProductListPage
