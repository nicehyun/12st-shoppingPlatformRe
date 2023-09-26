import PageLayout from "@/common/views/PageLayout"
import CheckoutBasicModal from "@/features/checkout/views/CheckoutBasicModal"
import CheckoutForm from "@/features/checkout/views/CheckoutForm"
import Header from "@/features/layout/views/Header"

const CheckoutPage = () => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>
        <CheckoutForm />
      </PageLayout>
      <CheckoutBasicModal />
    </>
  )
}

export default CheckoutPage
