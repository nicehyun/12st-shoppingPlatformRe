"use client"
import { use } from "react"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { productHeartAPI } from "../common/models/heartAPI"
import useSessionQuery from "../auth/signIn/hooks/useSessionQuery"
import { useHeartOfProductQuery } from "./hooks/useHeartOfProductQuery"

import { Product } from "../common/types/product"
import Button from "../common/views/Button"
import { useAddHeartListMutation } from "./hooks/useAddHeartListMutation"
import { useRemoveHeartListMutation } from "./hooks/useRemoveHeartListMutation"
import Loading from "../common/views/Loading"

interface IProductNameAndHeart {
  productDetail: Product
}

const ProductNameAndHeart = ({ productDetail }: IProductNameAndHeart) => {
  const { heartList, isLoading: isGetHeartListLoading } =
    useHeartOfProductQuery()

  const { addHeartListMutateAsync, isAddHeartListLoading } =
    useAddHeartListMutation(productDetail)

  const { isRemoveHeartListLoading, removeHeartListMutateAsync } =
    useRemoveHeartListMutation(productDetail)

  const isExsitedHeartProduct = !!heartList.find(
    (heartEl) => heartEl.id === productDetail.id
  )

  const handleHeartClick = () => {
    isExsitedHeartProduct
      ? removeHeartListMutateAsync()
      : addHeartListMutateAsync()
  }

  const buttonContent =
    isRemoveHeartListLoading ||
    isGetHeartListLoading ||
    isAddHeartListLoading ? (
      <Loading
        spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
        isFrame={false}
      />
    ) : isExsitedHeartProduct ? (
      <IoMdHeart className={`text-lightRed`} />
    ) : (
      <IoMdHeartEmpty />
    )

  return (
    <div className="flex justify-between min-h-[100px]">
      <h3 className="font-bold text-[18px] flex items-center sm:text-[14px] md:text-[14px] lg:text-[16px] w-4/5 break-all pr-[10px]">
        {productDetail.name}
      </h3>

      <Button
        onClick={handleHeartClick}
        classNames="block min-h-[100px] w-[100px] flexCenter text-[24px] border-l-border border-l-[1px]"
        content={buttonContent}
      />
    </div>
  )
}

export default ProductNameAndHeart
