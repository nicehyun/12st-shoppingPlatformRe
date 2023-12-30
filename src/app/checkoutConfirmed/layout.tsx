import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import { ReactNode } from "react"

const CheckoutConfirmedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout>{children}</PageLayout>

      <Navigation />
    </>
  )
}

export default CheckoutConfirmedLayout
