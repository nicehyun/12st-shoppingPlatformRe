import { Product } from "@/common/types/product"
import Image from "next/image"
import { MdOutlineClose } from "react-icons/md"
import useRemoveFromCartMutation from "../hooks/useRemoveFromCartMutation"
import Button from "@/common/views/Button"
import {
  discountedProductPrice,
  numberToLocaleString,
} from "@/common/utils/price"
import Loading from "@/common/views/Loading"

interface IProductInCartModalCard {
  productInfo: Product
}

const ProductInCartModalCard = ({ productInfo }: IProductInCartModalCard) => {
  const { name, image, id, price, discount } = productInfo
  const removeMutaion = useRemoveFromCartMutation()

  const onClickRemoveProductFromCart = () => {
    removeMutaion.mutate(id)
  }

  return (
    <li className="relative mb-[10px] mr-[8px] pr-[5px] flex border-[1px] bg-white border-lightGray rounded-[5px]">
      {removeMutaion.isLoading ? (
        <div className="absolute right-[2px] top-[2px] text-border">
          <Loading
            spinnerSize={{ width: "w-[15px]", height: "h-[15px]" }}
            isFrame={false}
          />
        </div>
      ) : (
        <Button
          onClick={onClickRemoveProductFromCart}
          classNames="absolute right-[2px] top-[2px] text-border"
          content={<MdOutlineClose />}
        />
      )}

      <div className="w-[90px] h-[90px] rounded-l-[5px] border-r-[1px] border-border overflow-hidden mr-[8px]">
        <Image
          src={image}
          alt={`상품사진이 준비되지 않았습니다. - ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-black w-[145px] h-[22.6px] text-[8px] truncate-2 leading-[1.2]">
          {name}
        </p>
      </div>

      <div className="absolute bottom-0 left-[98px] text-[10px]">
        <p className="text-border line-through">
          {numberToLocaleString(price)}
        </p>
        <p className="font-bold">
          <span className="text-lightRed mr-[8px] text-[12px]">
            {discount}%
          </span>

          {numberToLocaleString(discountedProductPrice(price, discount))}
        </p>
      </div>
    </li>
  )
}

export default ProductInCartModalCard
