import Image from "next/image"
import { MdOutlineClose } from "react-icons/md"

interface IProductInCartModalCard {
  imageUrl: string
  productName: string
}

const ProductInCartModalCard = ({
  imageUrl,
  productName,
}: IProductInCartModalCard) => {
  return (
    <li className="relative mb-[10px] mr-[8px] pr-[5px] flex border-[1px] border-lightGray rounded-[5px]">
      <button className="absolute right-[2x] top-[2px] text-border">
        <MdOutlineClose />
      </button>

      <div className="w-[90px] h-[90px] rounded-l-[5px] border-r-[1px] border-border overflow-hidden mr-[8px]">
        <Image
          src={imageUrl}
          alt={productName}
          className="w-full h-full"
          width={90}
          height={90}
        />
      </div>
      <div className="mt-[20px]">
        <p className="w-[145px] h-[33.6px] text-[8px] leading-[1.2]">
          {productName}
        </p>
      </div>
    </li>
  )
}

export default ProductInCartModalCard
