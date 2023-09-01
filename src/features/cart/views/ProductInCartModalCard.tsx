import { Product } from "@/common/types/product"
import Image from "next/image"
import { MdOutlineClose } from "react-icons/md"
import useRemoveFromCartMutation from "../hooks/useRemoveFromCartMutation"

interface IProductInCartModalCard {
  productInfo: Product
}

const ProductInCartModalCard = ({ productInfo }: IProductInCartModalCard) => {
  const { name, image } = productInfo
  const removeMutaion = useRemoveFromCartMutation(productInfo)

  const onClickRemoveProductFromCart = () => {
    removeMutaion.mutate()
  }

  return (
    <li className="relative mb-[10px] mr-[8px] pr-[5px] flex border-[1px] border-lightGray rounded-[5px]">
      <button
        onClick={onClickRemoveProductFromCart}
        className="absolute right-[2px] top-[2px] text-border"
      >
        <MdOutlineClose />
      </button>

      <div className="w-[90px] h-[90px] rounded-l-[5px] border-r-[1px] border-border overflow-hidden mr-[8px]">
        <Image src={image} alt={name} width={90} height={90} />
      </div>
      <div className="mt-[20px]">
        <p className="text-black dark:text-white w-[145px] h-[33.6px] text-[8px] leading-[1.2]">
          {name}
        </p>
      </div>
    </li>
  )
}

export default ProductInCartModalCard
