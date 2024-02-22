import Button from "@/features/common/views/Button"
import { HiPlus } from "react-icons/hi"
import { useIncreaseAmountMutation } from "../hooks/useIncreaseAmountMutation"
import { ProductInCart } from "../types/cart"
import { validCheckIncreaseProductAmountToCart } from "../models/validateCheck"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFetchValidGard } from "@/features/common/hooks/useFetchValidGard"

interface IIncreaseButton {
  productInfo: ProductInCart
}

const IncreaseButton = ({ productInfo }: IIncreaseButton) => {
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { session } = useSessionQuery()
  const { handleShowFetchGardFeedbackModal } = useFetchValidGard()

  const {
    mutateAsync: increaseAmountMutateAsync,
    isLoading: isIncreaseMutateLoading,
  } = useIncreaseAmountMutation(productInfo)

  const handleIncreaseAmount = async () => {
    if (isIncreaseMutateLoading) return

    handleShowFetchGardFeedbackModal(
      validCheckIncreaseProductAmountToCart(productInfo)
    )

    if (shouldProceedWithRouting(!!session)) {
      await increaseAmountMutateAsync()
    }
  }

  return (
    <Button
      onClick={handleIncreaseAmount}
      isDisabled={isIncreaseMutateLoading}
      classNames="text-[14px] md:text-[12px] sm:text-[10px]"
      content={<HiPlus />}
    />
  )
}

export default IncreaseButton
