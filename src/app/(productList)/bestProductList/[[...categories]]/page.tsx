import BestProductListSection from "@/features/bestProductList/BestProductListSection"
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

const BastProductListPage = ({ params }: IBastProductListPageProps) => {
  return <BestProductListSection categoriesPath={params.categories} />
}

export default BastProductListPage
