export const signUpAPI = {
  signUp: async (formData: FormData) => {
    try {
      const response = await fetch("/api/auth/signUp", {
        method: "POST",
        body: formData,
      })

      return response
    } catch (error) {
      console.error(error)
    }
  },
}
