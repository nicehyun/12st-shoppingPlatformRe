import PageLayout from "@/common/views/PageLayout"
import CheckoutConfirmed from "@/features/checkoutConfirmed/views/CheckoutConfirmed"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"

const CheckoutConfirmedPage = () => {
  return (
    <>
      <Header isShowCart={true} />
      <PageLayout>
        <CheckoutConfirmed />
      </PageLayout>

      <Navigation />
    </>
  )
}

export default CheckoutConfirmedPage
