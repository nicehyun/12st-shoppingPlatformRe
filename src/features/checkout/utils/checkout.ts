import { FormEvent, FormEventHandler } from "react"

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

export const parseCheckoutForm = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)

  const deliveryName = formData.get("deliveryName")
    ? (formData.get("deliveryName") as string)
    : null
  const recipient = formData.get("recipient") as string
  const zipcode = formData.get("zipcode") as string
  const address = formData.get("address") as string
  const additionalAddress = formData.get("additionalAddress") as string
  const phone1 = formData.get("phone1") as string
  const phone2 = formData.get("phone2")
    ? (formData.get("phone2") as string)
    : null
  const deliveryMemo = handleDeliveryMemo()

  const creditName = formData.get("credit-select") as string
  const period = formData.get("period-select") as string

  const defalutAddressRegistration = formData.get(
    "defalutAddressRegistration"
  ) as "on" | null

  const deliveryInfoTab = formData.get("deliveryInfo-tab") as "0" | "1"

  function handleDeliveryMemo() {
    const selectedDeliveryMemo = formData.get("deliveryMemo-select")
      ? (formData.get("deliveryMemo-select") as string)
      : null

    const DirectDeliveryMemo = formData.get("deliveryMemo-direct") as string

    if (!selectedDeliveryMemo) return null

    if (selectedDeliveryMemo === "직접입력") return DirectDeliveryMemo

    return selectedDeliveryMemo
  }

  const collectionOfUserInfo = formData.get("collectionOfUserInfo") as string
  const provisionOfUserInfo = formData.get("provisionOfUserInfo") as string
  const paymentAgencyClause = formData.get("paymentAgencyClause") as string

  const useMile = formData.get("useMile") as string

  return {
    deliveryName,
    additionalAddress,
    address,
    creditName,
    defalutAddressRegistration,
    deliveryInfoTab,
    recipient,
    zipcode,
    phone1,
    phone2,
    deliveryMemo,
    period,
    collectionOfUserInfo,
    provisionOfUserInfo,
    paymentAgencyClause,
    useMile,
  }
}
