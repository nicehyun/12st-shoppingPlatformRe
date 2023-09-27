import { useState } from "react"
import { Address } from "react-daum-postcode"
import PostCodeModal from "../views/PostCodeModal"

export const usePostCodeModal = () => {
  const [isShowPostCodeModal, setIsShowPostCodeModal] = useState(false)
  const [addressValue, setAddressValue] = useState("")
  const [zipcodeValue, setZipcodeValue] = useState("")

  const handleAddressSearch = (address: Address) => {
    setAddressValue(address.address)
    setZipcodeValue(address.zonecode)
    setIsShowPostCodeModal(false)
  }

  const showPostCodeModal = () => {
    setIsShowPostCodeModal(true)
  }

  const hidePostCodeModal = () => {
    setIsShowPostCodeModal(false)
  }

  const resetAddressValue = () => {
    setAddressValue("")
  }

  return {
    postCodeModalComponent: isShowPostCodeModal ? (
      <PostCodeModal
        isShow={isShowPostCodeModal}
        onComplete={handleAddressSearch}
        onHide={hidePostCodeModal}
      />
    ) : null,
    showPostCodeModal,
    addressValue,
    zipcodeValue,
    resetAddressValue,
    changeZipcodeValue: setZipcodeValue,
    changeAddreddValue: setAddressValue,
  }
}
