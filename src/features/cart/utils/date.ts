export const addDaysToCurrentDate = (daysToAdd: number) => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + daysToAdd)

  const month = String(currentDate.getMonth() + 1).padStart(2, "0")
  const day = String(currentDate.getDate()).padStart(2, "0")

  return `${month}/${day}`
}
