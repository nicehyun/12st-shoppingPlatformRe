import PageLayout from "@/features/common/views/PageLayout"

import Header from "@/features/layout/views/Header"
import NavigationAndCategory from "@/features/layout/views/NavigationAndCategory"

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

      <NavigationAndCategory />
    </>
  )
}

export default ArrivalProductListLayout
