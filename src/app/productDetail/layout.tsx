import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import NavigationAndCategory from "@/features/layout/views/NavigationAndCategory"
import { ReactNode } from "react"

const ProductInfolayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">{children}</PageLayout>

      <NavigationAndCategory />
    </div>
  )
}

export default ProductInfolayout
