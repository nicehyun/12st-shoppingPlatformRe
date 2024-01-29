import BestProductListSection from "@/features/bestProductList/views/BestProductListSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Best 상품",
}

const BastProductListPage = () => {
  return <BestProductListSection />
}

export default BastProductListPage
