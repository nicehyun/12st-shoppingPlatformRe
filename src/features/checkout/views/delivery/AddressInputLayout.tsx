import RightFetchButton from "@/features/common/views/RightFetchButton"
import Input from "../../../common/views/Input"
import { ChangeEvent } from "react"
import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

interface IAddressInputLayout {
  zipcode: string
  address: string
  additionalAddress: {
    value: string
    isValid: boolean
    hasError: boolean
    handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleInputBlur: () => void
    reset: () => void
  }
  showPostCodeModal: () => void
  postCodeModalComponent: JSX.Element | null
  isLoading?: boolean
}
const AddressInputLayout = ({
  additionalAddress,
  address,
  postCodeModalComponent,
  showPostCodeModal,
  zipcode,
  isLoading = false,
}: IAddressInputLayout) => {
  return (
    <div className={`max-w-[500px] flex flex-col flex-grow`}>
      <div className="flex">
        {isLoading ? (
          <SpanSkeletonUI className="mb-[10px] flex-grow h-[50px] sm:h-[40px] md:h-[44px]" />
        ) : (
          <Input
            type="text"
            name="zipcode"
            id="zipcode"
            isReadOnly={true}
            classNames="mb-[10px] flex-grow h-[50px] sm:h-[40px] md:h-[44px]"
            value={zipcode}
            placeholder="우편번호를 입력해주세요."
          />
        )}

        {isLoading ? (
          <SpanSkeletonUI className="ml-[10px] w-[110px] md:w-[80px] h-[50px] sm:h-[40px] md:h-[44px]" />
        ) : (
          <RightFetchButton content="검색" onClick={showPostCodeModal} />
        )}
      </div>

      {isLoading ? (
        <SpanSkeletonUI className="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]" />
      ) : (
        <Input
          type="text"
          name="address"
          id="address"
          isReadOnly={true}
          classNames="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]"
          value={address}
          placeholder="주소를 입력해주세요."
        />
      )}

      {isLoading ? (
        <SpanSkeletonUI className="h-[50px] w-full sm:h-[40px] md:h-[44px]" />
      ) : (
        <Input
          type="text"
          name="additionalAddress"
          id="additionalAddress"
          placeholder="배송지 상세 주소를 입력해주세요. (최대 50자)"
          {...additionalAddress}
          onBlur={additionalAddress.handleInputBlur}
          onChange={additionalAddress.handleValueChange}
          classNames="h-[50px] w-full sm:h-[40px] md:h-[44px]"
          maxLength={50}
        />
      )}

      {postCodeModalComponent}
    </div>
  )
}

export default AddressInputLayout
