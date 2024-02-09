import SectionTitle from "../SectionTitle"

import CheckoutListContentList from "./CheckoutListContentList"
import CheckoutListTableHeader from "./CheckoutListTableHeader"

const CheckoutListSection = () => {
  return (
    <section>
      <SectionTitle title="주문내역" />
      <CheckoutListTableHeader />

      <CheckoutListContentList />
    </section>
  )
}

export default CheckoutListSection
