import { useState } from "react"
import { Address } from "react-daum-postcode"
import PostCodeModal from "../views/PostCodeModal"

export const usePostCodeModal = () => {
  const [isShowPostCodeModal, setIsShowPostCodeModal] = useState(false)
  const [addressValue, setAddressValue] = useState("")

  const handleAddressSearch = (address: Address) => {
    setAddressValue(address.address)
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
    resetAddressValue,
  }
}
