import { CheckoutList } from "@/common/types/checkout"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

export const checkoutAPI = {
  checkout: async (
    checkoutInfo: CheckoutList,
    email: string,
    isDefalutAddressCheck: boolean,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    deliveryInfoTabValue: "0" | "1"
  ) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          checkoutInfo,
          email,
          isDefalutAddressCheck,
          isClauseCheck,
          deliveryInfoTabValue,
        }),
      })

      return response
    } catch (error) {
      console.error(error)
    }
  },
}
