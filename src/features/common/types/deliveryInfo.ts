export type Address = {
  zipcode: string
  address: string
  additionalAddress: string
}

export type DeliveryInfo = {
  deliveryName: string | null
  recipient: string
  zipcode: string
  address: string
  additionalAddress: string
  phone1: string
  phone2: string | null
  [key: string]: string | string | null
}

export type GetDeliveryInfoResponse = {
  id: number
  email: string
  deliveryInfo: DeliveryInfo
}
