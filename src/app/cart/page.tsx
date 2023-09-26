import PageLayout from "@/common/views/PageLayout"
import CartLayout from "@/features/cart/views/CartLayout"
import Header from "@/features/layout/views/Header"

const CartPage = () => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>
        <CartLayout />
      </PageLayout>
    </>
  )
}

export default CartPage
