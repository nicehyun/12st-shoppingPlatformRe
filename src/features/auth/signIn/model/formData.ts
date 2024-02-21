export const parsedEmailAndPasswordFromSignInFormData = (
  formData: FormData
) => {
  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }
}
