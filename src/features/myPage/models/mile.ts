import { CheckoutList } from "@/features/checkout/types/checkout"
import { UseMileAndGetMile } from "../types/mile"

export const getUseMileAndGetMile = (checkoutList: CheckoutList[]) => {
  const milesList: UseMileAndGetMile[] = checkoutList.map(
    (checkoutEl: CheckoutList) => {
      const { getMile, useMile, checkoutNumber, checkoutDate } = checkoutEl
      return { getMile, useMile, checkoutNumber, checkoutDate }
    }
  )

  return milesList
}
