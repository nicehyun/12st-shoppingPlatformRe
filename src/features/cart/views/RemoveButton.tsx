import Button from "@/features/common/views/Button"
import { addToRemovalProduct } from "@/redux/features/cartSlice"
import { showAlertModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { AiOutlineClose } from "react-icons/ai"
import { ProductInCart } from "../types/cart"

interface IRemoveButton {
  productInfo: ProductInCart
}

const RemoveButton = ({ productInfo }: IRemoveButton) => {
  const dispatch = useAppDispatch()

  const onClickRemoveProductFromCart = () => {
    dispatch(addToRemovalProduct(productInfo))

    dispatch(
      showAlertModal({
        modalContent: "상품을 장바구니에서 삭제하시겠습니까?",
        modalId: "cart-remove",
      })
    )
  }

  return (
    <Button
      onClick={onClickRemoveProductFromCart}
      classNames="absolute text-border right-[10px] top-[10px] text-[22px] md:text-[18px] sm:text-[16px] transition-3 hover:text-lightRed"
      content={<AiOutlineClose />}
    />
  )
}

export default RemoveButton
