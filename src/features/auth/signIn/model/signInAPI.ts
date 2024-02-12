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
    try {
      const response = await fetch(`/api/auth/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, passwordValue }),
      })

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
