import PageLayout from "@/common/views/PageLayout"
import CheckoutBasicModal from "@/features/checkout/views/CheckoutBasicModal"
import CheckoutForm from "@/features/checkout/views/CheckoutForm"

const CheckoutPage = () => {
  return (
    <>
      <PageLayout>
        <CheckoutForm />
      </PageLayout>
      <CheckoutBasicModal />
    </>
  )
}

export default CheckoutPage
