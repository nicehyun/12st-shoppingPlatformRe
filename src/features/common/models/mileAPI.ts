export const mileAPI = {
  getUserMile: async (authorization: string | null | undefined) => {
    if (!authorization) return null

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/mile`, {
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
      next: { revalidate: 0 },
    })

    return response.json()
  },
}
