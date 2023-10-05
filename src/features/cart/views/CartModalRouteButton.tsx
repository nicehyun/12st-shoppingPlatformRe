import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import Button from "@/common/views/Button"
import { hideCartModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

interface ICartModalRouteButton {
  content: string
  route: ROUTE.CART | ROUTE.SIGNIN
}

const CartModalRouteButton = ({ content, route }: ICartModalRouteButton) => {
  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()

  const onhideCartModal = () => {
    dispatch(hideCartModal())
  }

  const handleRoute = () => {
    onhideCartModal()

    if (route === ROUTE.CART) return routeTo(ROUTE.CART)
    if (route === ROUTE.SIGNIN) return routeTo(ROUTE.SIGNIN)
  }
  return (
    <Button
      onClick={handleRoute}
      classNames="text-center text-[14px] md:text-[12px] sm:text-[12px] rounded-[5px] border-[1px] border-black dark:border-white my-[20px] p-[8px] transition-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      content={content}
    />
  )
}

export default CartModalRouteButton
