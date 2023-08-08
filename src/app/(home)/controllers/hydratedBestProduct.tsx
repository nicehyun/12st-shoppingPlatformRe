import getQueryClient from "@/reactQuery/utils/getQueryClient"
import { dehydrate, Hydrate } from "@tanstack/react-query"
import getBestSellingProducts from "../models/bestProducts"
import HomeBestProducts from "../views/HomeBestProducts"

const hydratedBestProduct = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["bestProducts"], getBestSellingProducts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <HomeBestProducts />
    </Hydrate>
  )
}

export default hydratedBestProduct
