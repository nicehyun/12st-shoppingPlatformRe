import PageLayout from "@/features/common/views/PageLayout"
import DynamicHeader from "@/features/layout/views/DynamicHeader"
import Navigation from "@/features/layout/views/Navigation"
import { ReactNode } from "react"

const HomeLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DynamicHeader isShowCart={true} />

      <PageLayout classNames="px-0">{children}</PageLayout>

      <Navigation />
    </>
  )
}

export default HomeLayout
