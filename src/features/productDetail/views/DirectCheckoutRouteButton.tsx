import { useAuthenticate } from "@/features/auth/signIn/hooks/useAuthenticate"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { Product } from "@/features/common/types/product"
import Button from "@/features/common/views/Button"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"
import { useAppDispatch } from "@/redux/hooks"

interface IDirectCheckoutRouteButton {
  productDetail: Product
}

const DirectCheckoutRouteButton = ({
  productDetail,
}: IDirectCheckoutRouteButton) => {
  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()
  const { authentication } = useAuthenticate()

  const handleCheckoutClick = async () => {
    await authentication()

    dispatch(addCheckoutPendingProductList([{ ...productDetail, amount: 1 }]))
    routeTo(ROUTE.CHECKOUT)
  }

  return (
    <Button
      onClick={handleCheckoutClick}
      content="바로 구매하기"
      classNames="bg-black text-white dark:bg-white dark:text-black shadow dark:shadow-whiteShadow"
    />
  )
}

export default DirectCheckoutRouteButton
