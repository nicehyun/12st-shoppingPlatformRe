import RemoveCheckedProductAlertModal from "@/features/cart/views/RemoveCheckedProductAlertModal"
import RemoveProductAlertModal from "@/features/cart/views/RemoveProductAlertModal"
import PageLayout from "@/features/common/views/PageLayout"
import Header from "@/features/layout/views/Header"
import { ReactNode } from "react"

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>{children}</PageLayout>

      <RemoveProductAlertModal />
      <RemoveCheckedProductAlertModal />
    </>
  )
}

export default CartLayout
