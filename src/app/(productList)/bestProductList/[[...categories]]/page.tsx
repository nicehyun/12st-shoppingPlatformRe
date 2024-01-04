import BestProductListSection from "@/features/bestProductList/BestProductListSection"
import { bestProductListAPI } from "@/features/bestProductList/models/bestProductListAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Best 상품",
}
interface IBastProductListPageProps {
  params: {
    categories: string[] | undefined
  }
}

const BastProductListPage = async ({ params }: IBastProductListPageProps) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    ["bestProductListWithCategory", params.categories ?? []],
    () =>
      bestProductListAPI.getBestProductListWithCategory(params.categories ?? [])
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <BestProductListSection categoriesPath={params.categories} />
    </Hydrate>
  )
}

export default BastProductListPage
