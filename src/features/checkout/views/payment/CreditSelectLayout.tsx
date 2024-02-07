import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import CreditSelect from "../CreditSelect"
import PeriodSelect from "./PeriodSelect"

const CreditSelectLayout = () => {
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  return (
    <>
      {checkoutPaymentState.value === "credit" && (
        <>
          <CreditSelect />
          <PeriodSelect />
        </>
      )}
    </>
  )
}

export default CreditSelectLayout
