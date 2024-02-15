import { bestProductListAPI } from "@/features/bestProductList/models/bestProductListAPI"
import BestProductListSection from "@/features/bestProductList/views/BestProductListSection"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
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
  const category = params.categories ?? []

  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] = category

  const firstCategory = getAfterEquals(decodeURIComponent(firstCategoryPath))

  const secondCategory = getAfterEquals(decodeURIComponent(secondCategoryPath))
  const thirdCategory = getAfterEquals(decodeURIComponent(thirdCategoryPath))

  const categoriesPath =
    "/" + firstCategory + "/" + secondCategory + "/" + thirdCategory

  const queryKey = [
    "bestProductListWithCategory",
    "initial",
    firstCategory,
    parseSliceToAnd(secondCategory),
    parseSliceToAnd(thirdCategory),
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
