import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import CheckoutPhoneInput from "@/features/checkout/views/CheckoutPhoneInput"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"

export interface IMyPageDefaultDeliveryPhoneModification {
  phoneInfo: Pick<DeliveryInfo, "phone1" | "phone2">
}

const MyPageDefaultDeliveryPhoneModification = ({
  phoneInfo,
}: IMyPageDefaultDeliveryPhoneModification) => {
  return (
    <MyPageSectionSubTitle subtitle="배송지 연락처" className="mt-[50px]">
      <CheckoutPhoneInput isRequired defaultValue={phoneInfo.phone1} />
      <CheckoutPhoneInput defaultValue={phoneInfo.phone2} />
    </MyPageSectionSubTitle>
  )
}

export default MyPageDefaultDeliveryPhoneModification
