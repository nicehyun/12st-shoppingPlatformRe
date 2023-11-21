import { KeyboardEvent } from "react"

export const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    event.preventDefault()
  }
}
