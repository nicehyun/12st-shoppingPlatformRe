"use client"

import Button from "@/features/common/views/Button"
import { useCheckProductList } from "../hooks/useCheckProductList"
import { ReactNode } from "react"

interface IProductListInCartLayout {
  children: ReactNode
}

const ProductListInCartLayout = ({ children }: IProductListInCartLayout) => {
  const {
    isAllChecked,
    checkedProductList,
    onCheckAllProductList,
    onRemoveCheckedProductList,
  } = useCheckProductList()

  return (
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] shadow rounded-[5px]">
      <div className="relative mb-[30px] pb-[30px] border-b-[1px] border-lightBlack flex items-center">
        <input
          type="checkbox"
          id="cartCheckbox-all"
          checked={isAllChecked}
          onChange={onCheckAllProductList}
          className="mr-[10px] w-[18px] h-[18px] md:w-[16px] md:h-[16px] sm:w-[14px] sm:h-[14px] cursor-pointer"
        />
        <span className="text-[14px] md:text-[12px] sm:text-[10px] text-black">
          선택 {checkedProductList.length}개
        </span>
        <Button
          onClick={onRemoveCheckedProductList}
          classNames="absolute right-0 text-border transition-3 hover:text-lightRed text-[14px] md:text-[12px] sm:text-[10px]"
          content="선택 삭제"
        />
      </div>

      {children}
    </section>
  )
}

export default ProductListInCartLayout
