import BestProductListSection from "@/features/bestProductList/BestProductListSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "베스트 - 쇼핑 플랫폼 12ST",
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
