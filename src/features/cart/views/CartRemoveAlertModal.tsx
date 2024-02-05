import AlertModal from "@/features/common/views/AlertModal"
import { hideAlertModal, selectAlertModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

interface ICartRemoveAlertModal {
  classification: "cart-remove" | "cart-checked-remove"
  removeMutateAsync: () => Promise<void>
  isLoading: boolean
}

const CartRemoveAlertModal = ({
  isLoading,
  removeMutateAsync,
  classification,
}: ICartRemoveAlertModal) => {
  const dispatch = useAppDispatch()
  const { modalId, isShowModal, modalContent } =
    useAppSelector(selectAlertModal)

  const handleAlertModalHide = () => {
    if (!isLoading) {
      dispatch(hideAlertModal())
    }
  }

  const handleAlertModalAgree = async () => {
    await removeMutateAsync()

    if (!isLoading) {
      handleAlertModalHide()
    }
  }

  const alertCheckedRemoveModalProps = {
    isShowModal,
    modalContent,
    modalId,
    onCancelFn: handleAlertModalHide,
    onAgreeFn: handleAlertModalAgree,
    isLoading,
  }

  return (
    <>
      {modalId === classification && (
        <AlertModal {...alertCheckedRemoveModalProps} />
      )}
    </>
  )
}

export default CartRemoveAlertModal
