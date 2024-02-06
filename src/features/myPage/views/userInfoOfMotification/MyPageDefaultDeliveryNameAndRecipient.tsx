import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import CheckoutDeliveryNameInput from "@/features/checkout/views/delivery/DeliveryNameInput"
import CheckoutRecipientInput from "@/features/checkout/views/delivery/RecipientInput"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
export interface IMyPageDefaultDeliveryNameAndRecipient {
  deliveryInfo: Pick<DeliveryInfo, "deliveryName"> &
    Pick<DeliveryInfo, "recipient">
}

const MyPageDefaultDeliveryNameAndRecipient = ({
  deliveryInfo,
}: IMyPageDefaultDeliveryNameAndRecipient) => {
  const { deliveryName, recipient } = deliveryInfo
  return (
    <MyPageSectionSubTitle subtitle="배송지 정보" className="mt-[30px]">
      <CheckoutDeliveryNameInput defaultValue={deliveryName} />
      <CheckoutRecipientInput defaultValue={recipient} />
    </MyPageSectionSubTitle>
  )
}

export default MyPageDefaultDeliveryNameAndRecipient
