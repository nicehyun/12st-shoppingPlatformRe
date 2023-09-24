import { CheckoutList } from "@/common/types/checkout"

export const checkoutAPI = {
  checkout: async (
    checkoutInfo: CheckoutList,
    email: string,
    isDefalutAddressCheck: boolean
  ) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          checkoutInfo,
          email,
          isDefalutAddressCheck,
        }),
      })

      return response
    } catch (error) {
      console.error(error)
    }
  },
}
