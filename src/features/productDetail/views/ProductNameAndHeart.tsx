"use client"

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { Product } from "../../common/types/product"
import { useGetHeartListQuery } from "../hooks/useGetHeartListQuery"
import LoadingButton from "@/features/common/views/LoadingButton"
import { useHeartMutation } from "../hooks/useHeartMutation"

interface IProductNameAndHeart {
  productDetail: Product
}

const ProductNameAndHeart = ({ productDetail }: IProductNameAndHeart) => {
  const { isInitialLoading } = useGetHeartListQuery()

  const {
    heartMutateAsync,
    isLoading: isHeartMutateAsyncLoading,
    isExsitedHeartProduct,
  } = useHeartMutation(productDetail)

  const isButtonLoading = isInitialLoading || isHeartMutateAsyncLoading

  return (
    <div className="flex justify-between min-h-[100px]">
      <h3 className="font-bold text-[18px] flex items-center sm:text-[14px] md:text-[14px] lg:text-[16px] w-4/5 break-all pr-[10px]">
        {productDetail.name}
      </h3>

      <LoadingButton
        isLoading={isButtonLoading}
        onClick={heartMutateAsync}
        content={
          isExsitedHeartProduct ? (
            <IoMdHeart className={`text-lightRed`} />
          ) : (
            <IoMdHeartEmpty />
          )
        }
        className="block min-h-[100px] w-[100px] flexCenter text-[24px] border-l-border border-l-[1px]"
      />
    </div>
  )
}

export default ProductNameAndHeart
