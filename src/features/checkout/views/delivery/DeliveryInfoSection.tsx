import DeliverySectionHeader from "./DeliverySectionHeader"
import CheckoutSection from "../CheckoutSection"
import DeliveryInfoTabs from "./DeliveryInfoTabs"

const DeliveryInfoSection = () => {
  return (
    <CheckoutSection>
      <DeliverySectionHeader />

      <DeliveryInfoTabs />
    </CheckoutSection>
  )
}

export default DeliveryInfoSection
