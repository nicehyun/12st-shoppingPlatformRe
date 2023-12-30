import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"

import { ReactNode } from "react"

const ArrivalProductListLayout = async ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">{children}</PageLayout>

      <Navigation />
    </>
  )
}

export default ArrivalProductListLayout
