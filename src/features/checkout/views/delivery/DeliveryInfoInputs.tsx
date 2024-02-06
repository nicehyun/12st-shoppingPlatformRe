import AddressInput from "./AddressInput"
import DeliveryNameInput from "./DeliveryNameInput"
import PhoneInput from "./PhoneInput"
import RecipientInput from "./RecipientInput"

const DeliveryInfoInputs = () => {
  return (
    <>
      <DeliveryNameInput />
      <RecipientInput />
      <AddressInput />
      <PhoneInput isRequired />
      <PhoneInput />
    </>
  )
}

export default DeliveryInfoInputs
