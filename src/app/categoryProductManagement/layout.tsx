import PageLayout from "@/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import { ReactNode } from "react"

const CategoryProductManagementlayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">{children}</PageLayout>

      <Navigation />
    </div>
  )
}

export default CategoryProductManagementlayout
