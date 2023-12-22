import { NextResponse } from "next/server"

export const mileAPI = {
  checkoutMile: async (
    useMile: number,
    getMile: number,
    authorization: string | null | undefined
  ): Promise<NextResponse | null> => {
    if (!authorization) return null

    if (useMile < 0 || getMile < 0) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/mile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({
          useMile,
          getMile,
        }),
      }
    )

    return response.json()
  },
  getUserMile: async (authorization: string | null | undefined) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/mile`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
