import PageLayout from "@/features/common/views/PageLayout"
import CheckoutBasicModal from "@/features/checkout/views/CheckoutBasicModal"
import Header from "@/features/layout/views/Header"
import { ReactNode } from "react"

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>{children}</PageLayout>
      <CheckoutBasicModal />
    </>
  )
}

export default CheckoutLayout
