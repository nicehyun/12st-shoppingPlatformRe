import {
  CustomerCounselingDetail,
  GetCustomerCounselingDetailResponse,
} from "../types/myPage"

export const myPageAPI = {
  modificatieMarketingClause: async (
    isChecked: boolean,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization },
        body: JSON.stringify({
          isChecked,
        }),
      }
    )

    return response.json()
  },
  memberTermination: async (email: string) => {
    // if (email === "") return
    // try {
    //   const userRef = doc(db, "user", email)
    //   const addressRef = doc(db, "address", email)
    //   const cartRef = doc(db, "cart", email)
    //   const checkoutRef = doc(db, "checkout", email)
    //   const defaultDeliveryInfoRef = doc(db, "defaultDeliveryInfo", email)
    //   await deleteDoc(userRef)
    //   await deleteDoc(addressRef)
    //   await deleteDoc(cartRef)
    //   await deleteDoc(checkoutRef)
    //   await deleteDoc(defaultDeliveryInfoRef)
    //   return {
    //     result: "success",
    //   }
    // } catch (error) {
    //   const { response } = error as unknown as AxiosError
    //   if (response) {
    //     throw Error(`🚨 firebase getDocs API : ${error}`)
    //   }
    //   throw Error(`🚨 memberTermination firebase API : ${error}`)
    // }
  },
  writeCoustomerCounseling: async (
    writeDetail: CustomerCounselingDetail,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/customerCounseling`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization },
        body: JSON.stringify({
          writeDetail,
        }),
      }
    )

    return response.json()
  },
  getCoutomerCounselingList: async (
    authorization: string | null | undefined
  ): Promise<GetCustomerCounselingDetailResponse | null> => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/customerCounseling`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
