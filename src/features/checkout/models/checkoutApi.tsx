import { CheckoutList } from "@/common/types/checkout"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

export const checkoutAPI = {
  checkout: async (
    checkoutInfo: CheckoutList,
    email: string,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    isUpdateDeliveryInfo: boolean
  ) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          checkoutInfo,
          email,
          isClauseCheck,
          isUpdateDeliveryInfo,
        }),
      })

      return response
    } catch (error) {
      console.error(error)
    }
  },
}
