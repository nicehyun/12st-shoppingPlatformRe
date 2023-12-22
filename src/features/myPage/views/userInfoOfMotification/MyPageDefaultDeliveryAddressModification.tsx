import { useUserInput } from "@/features/common/hooks/useUserInput"
import { Address } from "@/features/common/types/deliveryInfo"
import AddressInfo from "@/features/common/views/AddressInfo"
import { additionalAddressValidator } from "@/features/auth/signUp/utils/validation"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"

export interface IMyPageDefaultDeliveryAddressModification {
  addressInfo: Address
}

const MyPageDefaultDeliveryAddressModification = ({
  addressInfo,
}: IMyPageDefaultDeliveryAddressModification) => {
  const { additionalAddress, address, zipcode } = addressInfo
  const additionalAddressInput = useUserInput(
    additionalAddressValidator,
    additionalAddress
  )
  return (
    <MyPageSectionSubTitle subtitle="주소" className="mt-[50px]">
      <AddressInfo
        zipcode={zipcode}
        address={address}
        additionalAddress={additionalAddressInput}
        className="w-[400px] md:w-full sm:w-full"
      />
    </MyPageSectionSubTitle>
  )
}

export default MyPageDefaultDeliveryAddressModification
