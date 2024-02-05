export const isFeedbackError = (
  response: unknown
): response is { status: number; error?: string } => {
  return (
    typeof response === "object" &&
    response !== null &&
    "status" in response &&
    typeof (response as { status: unknown }).status === "number"
  )
}
