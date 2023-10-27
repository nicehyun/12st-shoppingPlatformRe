import { DeliveryInfo } from "@/common/types/address"
import CheckoutPhoneInput from "@/features/checkout/views/CheckoutPhoneInput"
import MyPageDefaultDeliveryInfoEl from "./MyPageDefaultDeliveryInfoEl"

export interface IMyPageDefaultDeliveryPhoneModification {
  phoneInfo: Pick<DeliveryInfo, "phone1" | "phone2">
}

const MyPageDefaultDeliveryPhoneModification = ({
  phoneInfo,
}: IMyPageDefaultDeliveryPhoneModification) => {
  return (
    <MyPageDefaultDeliveryInfoEl subtitle="배송지 연락처" className="mt-[50px]">
      <CheckoutPhoneInput isRequired defaultValue={phoneInfo.phone1} />
      <CheckoutPhoneInput defaultValue={phoneInfo.phone2} />
    </MyPageDefaultDeliveryInfoEl>
  )
}

export default MyPageDefaultDeliveryPhoneModification
