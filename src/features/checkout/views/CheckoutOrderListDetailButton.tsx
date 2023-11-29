import Button from "@/features/common/views/Button"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

interface ICheckoutOrderListDetailButton {
  isShowDetail: boolean
  onClickDetail: () => void
  orderListAmount: number
}

const CheckoutOrderListDetailButton = ({
  isShowDetail,
  onClickDetail,
  orderListAmount,
}: ICheckoutOrderListDetailButton) => {
  return (
    <Button
      classNames="font-bold text-[16px] flexCenter w-full h-[50px] my-[30px]"
      onClick={onClickDetail}
      content={
        <span className="flexCenter">
          총
          {<span className="text-lightRed mx-[5px]">{orderListAmount}건</span>}{" "}
          전체 {isShowDetail ? " 보기 닫기" : " 보기"}
          {
            <span className="ml-[5px]">
              {isShowDetail ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </span>
          }
        </span>
      }
    />
  )
}

export default CheckoutOrderListDetailButton
