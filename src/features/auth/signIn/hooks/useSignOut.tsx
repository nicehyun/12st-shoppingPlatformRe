import { signOut } from "next-auth/react"

export const useSignOut = () => {
  const handleSignOut = async () => {
    signOut()

    fetch(`/api/auth/signOut`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  return { signOut: handleSignOut }
}
