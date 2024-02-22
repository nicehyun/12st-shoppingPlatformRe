import { ProductInCart } from "../types/cart"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import Button from "@/features/common/views/Button"
import { useDecreaseAmountMutation } from "../hooks/useDecreaseAmountMutation"
import { validCheckDecreaseProductAmountToCart } from "../models/validateCheck"
import { HiMinus } from "react-icons/hi"
import { useFetchValidGard } from "@/features/common/hooks/useFetchValidGard"

interface IDecreaseButton {
  productInfo: ProductInCart
}

const DecreaseButton = ({ productInfo }: IDecreaseButton) => {
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { session } = useSessionQuery()
  const { handleShowFetchGardFeedbackModal } = useFetchValidGard()

  const {
    mutateAsync: decreaseMutateAsync,
    isLoading: isDecreaseMutateLoading,
  } = useDecreaseAmountMutation(productInfo)

  const handleDecreaseAmount = async () => {
    if (isDecreaseMutateLoading) return

    handleShowFetchGardFeedbackModal(
      validCheckDecreaseProductAmountToCart(productInfo)
    )

    if (shouldProceedWithRouting(!!session)) {
      await decreaseMutateAsync()
    }
  }

  return (
    <Button
      onClick={handleDecreaseAmount}
      isDisabled={isDecreaseMutateLoading}
      classNames="text-[14px] md:text-[12px] sm:text-[10px] text-lightGray"
      content={<HiMinus />}
    />
  )
}

export default DecreaseButton
