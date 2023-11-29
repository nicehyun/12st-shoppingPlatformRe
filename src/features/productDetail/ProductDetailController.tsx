import Button from "@/features/common/views/Button"

const ProductDetailController = () => {
  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[10px] h-[50px] font-bold">
      <Button content="장바구니 담기" classNames="border-border border-[1px]" />
      <Button
        content="바로 구매하기"
        classNames="bg-black text-white dark:bg-white dark:text-black shadow dark:shadow-whiteShadow"
      />
    </div>
  )
}

export default ProductDetailController
