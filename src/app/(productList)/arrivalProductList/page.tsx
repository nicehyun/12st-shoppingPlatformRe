import ArrivalProductListSection from "@/features/arrivalProductList/views/ArrivalProductListSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const ArrivalProductListPage = () => {
  return <ArrivalProductListSection />
}

export default ArrivalProductListPage
