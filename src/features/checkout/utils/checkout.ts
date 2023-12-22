export const formatCheckoutNumber = (inputISOString: string) => {
  if (inputISOString === null || inputISOString === undefined) {
    throw new Error(
      "🚨 Invalid input: inputISOString cannot be null or undefined"
    )
  }

  const isValidInput = inputISOString === new Date(inputISOString).toISOString()

  if (!isValidInput) {
    throw new Error(
      "🚨 Invalid input: inputISOString must be generated using new Date().toISOString()"
    )
  }

  const date = new Date(inputISOString)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")

  const formattedDateTime = `${year}${month}${day}-${hours}${minutes}${seconds}`

  return formattedDateTime
}

export const parseISOString = (inputISOString: string) => {
  if (inputISOString === null || inputISOString === undefined) {
    throw new Error(
      "🚨 Invalid input: inputISOString cannot be null or undefined"
    )
  }

  const dateObject = new Date(inputISOString)

  const year = dateObject.getFullYear()

  const month = dateObject.getMonth() + 1
  const date = dateObject.getDate()

  return { year, month, date }
}
