import { DeliveryInfo } from "@/common/types/address"
import CheckoutDeliveryNameInput from "@/features/checkout/views/CheckoutDeliveryNameInput"
import CheckoutRecipientInput from "@/features/checkout/views/CheckoutRecipientInput"
import MyPageDefaultDeliveryInfoEl from "./MyPageDefaultDeliveryInfoEl"
export interface IMyPageDefaultDeliveryNameAndRecipient {
  deliveryInfo: Pick<DeliveryInfo, "deliveryName"> &
    Pick<DeliveryInfo, "recipient">
}

const MyPageDefaultDeliveryNameAndRecipient = ({
  deliveryInfo,
}: IMyPageDefaultDeliveryNameAndRecipient) => {
  const { deliveryName, recipient } = deliveryInfo
  return (
    <MyPageDefaultDeliveryInfoEl subtitle="배송지 정보" className="mt-[30px]">
      <CheckoutDeliveryNameInput defaultValue={deliveryName} />
      <CheckoutRecipientInput defaultValue={recipient} />
    </MyPageDefaultDeliveryInfoEl>
  )
}

export default MyPageDefaultDeliveryNameAndRecipient
