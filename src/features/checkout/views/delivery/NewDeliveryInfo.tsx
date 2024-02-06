import Checkbox from "@/features/common/views/Checkbox"
import DeliveryMemoSelect from "./DeliveryMemoSelect"
import DeliveryInfoInputs from "./DeliveryInfoInputs"

const NewDeliveryInfo = () => {
  return (
    <>
      <DeliveryInfoInputs />

      <Checkbox
        id="defalutAddressRegistration"
        checkboxLabel="기본배송지로 등록하기"
        peer="peer/defalutAddress"
        peerChecked={{
          borderColor: "peer-checked/defalutAddress:after:border-lightRed",
        }}
        classNames="ml-[100px] mb-[20px] max-w-[500px]"
      />

      <DeliveryMemoSelect />
    </>
  )
}

export default NewDeliveryInfo
