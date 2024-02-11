import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonCheckoutNumberToCheckoutPairList = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`skeleton-CheckoutPairList__${index}`}
          className={`flex h-[60px] md:h-[50px] border-b-[1px] border-border`}
        >
          <div className={`w-1/4 flexCenter px-[10px]`}>
            <SpanSkeletonUI className="w-full h-[24px]" />
          </div>

          <div className={`w-1/4 flexCenter px-[10px]`}>
            <SpanSkeletonUI className="w-full h-[24px]" />
          </div>

          <div className={`w-1/2 flexCenter px-[10px]`}>
            <SpanSkeletonUI className="w-full h-[40px]" />
          </div>
        </div>
      ))}
    </>
  )
}

export default SkeletonCheckoutNumberToCheckoutPairList
