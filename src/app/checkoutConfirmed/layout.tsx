import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import NavigationAndCategory from "@/features/layout/views/NavigationAndCategory"
import { ReactNode } from "react"

const CheckoutConfirmedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout>{children}</PageLayout>

      <NavigationAndCategory />
    </>
  )
}

export default CheckoutConfirmedLayout
