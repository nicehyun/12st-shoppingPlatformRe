type SignInResponse = {
  accessToken: string
  email: string
  name: string
  phone: string
  marketingClause: boolean
  mile: number
}

export const signInAPI = {
  signIn: async (
    email: string,
    passwordValue: string
  ): Promise<SignInResponse | null> => {
    const response = await fetch(`${process.env.BASE_URL}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, passwordValue }),
      next: { revalidate: 600 },
    })

    return response.json()
  },
}
