export const checkoutNumber = () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()

  const formattedMonth = String(month).padStart(2, "0")
  const formattedDay = String(day).padStart(2, "0")
  const formattedHours = String(hours).padStart(2, "0")
  const formattedMinutes = String(minutes).padStart(2, "0")

  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const charactersLength = characters.length

  const randomString = Array.from({ length: 20 }, () =>
    characters.charAt(Math.floor(Math.random() * charactersLength))
  ).join("")

  const orderNumber = `${year}${formattedMonth}${formattedDay}${formattedHours}${formattedMinutes}${randomString}`

  return orderNumber
}
