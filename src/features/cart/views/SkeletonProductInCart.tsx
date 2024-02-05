import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonProductInCart = () => {
  return (
    <li className="flex mb-[30px]">
      <SpanSkeletonUI
        className={`mr-[10px] w-[18px] h-[18px] md:w-[16px] md:h-[16px] sm:w-[14px] sm:h-[14px]`}
      />

      <div className="relative flex grow border-[1px] border-border rounded-[5px] overflow-hidden">
        <SpanSkeletonUI className="w-[200px] h-[200px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] mr-[20px] border-r-[1px] border-border" />

        <div className="relative flex-1">
          <SpanSkeletonUI
            className={`w-[120px] h-[18px] absolute top-[10px] mb-[12px]`}
          />

          <SpanSkeletonUI
            className={`w-[120px] h-[50.4px] md:h-[42px] sm:h-[36px] absolute top-[40px] md:top-[35px] sm:top-[30px] mb-[12px]`}
          />

          <SpanSkeletonUI
            className={`w-[60px] h-[14px] absolute right-[10px] bottom-[45px] sm:bottom-[30px] md:bottom-[30px]`}
          />

          <SpanSkeletonUI
            className={`w-[100px] h-[16px] absolute right-[10px] bottom-[20px] sm:bottom-[10px] md:bottom-[10px]`}
          />

          <SpanSkeletonUI
            className={`w-[20px] h-[20px] absolute right-[10px] top-[10px]`}
          />

          <SpanSkeletonUI className="absolute bottom-[20px] sm:bottom-[10px] md:bottom-[10px] w-[80px] h-[28px] md:w-[60px] sm:w-[50px] md:h-[24px] sm:h-[20px]" />
        </div>
      </div>
    </li>
  )
}

export default SkeletonProductInCart
