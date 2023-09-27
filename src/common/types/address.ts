export type Address = {
  zipcode: string
  address: string
  additionalAddress: string
}

export type DeliveryInfo = {
  delivertName: string | null
  recipient: string
  zipcode: string
  address: string
  additionalAddress: string
  phone1: string
  phone2: string | null
}
