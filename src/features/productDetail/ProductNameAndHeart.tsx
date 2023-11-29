import { IoMdHeartEmpty } from "react-icons/io"

interface IProductNameAndHeart {
  name: string
}

const ProductNameAndHeart = ({ name }: IProductNameAndHeart) => {
  return (
    <div className="flex justify-between min-h-[100px]">
      <h3 className="font-bold text-[18px] flex items-center sm:text-[14px] md:text-[14px] lg:text-[16px] w-4/5 break-all pr-[10px]">
        {name}
      </h3>

      <span className="block min-h-[100px] w-[100px] flexCenter text-[24px] border-l-border border-l-[1px]">
        <IoMdHeartEmpty />
      </span>
    </div>
  )
}

export default ProductNameAndHeart
