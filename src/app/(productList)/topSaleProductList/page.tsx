import TopSaleProductListSection from "@/features/topSaleProductList/views/TopSaleProductListSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const TopSaleProductListPage = () => {
  return <TopSaleProductListSection />
}

export default TopSaleProductListPage
