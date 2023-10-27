import { useUserInput } from "@/common/hooks/useUserInput"
import { Address } from "@/common/types/address"
import AddressInfo from "@/common/views/AddressInfo"
import { additionalAddressValidator } from "@/features/auth/signUp/utils/validation"
import MyPageDefaultDeliveryInfoEl from "./MyPageDefaultDeliveryInfoEl"

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
    <MyPageDefaultDeliveryInfoEl subtitle="주소" className="mt-[50px]">
      <AddressInfo
        zipcode={zipcode}
        address={address}
        additionalAddress={additionalAddressInput}
        className="w-[400px] md:w-full sm:w-full"
      />
    </MyPageDefaultDeliveryInfoEl>
  )
}

export default MyPageDefaultDeliveryAddressModification
