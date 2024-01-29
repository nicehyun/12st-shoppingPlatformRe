import SpanSkeletonUI from "./SpanSkeletonUI"

const SkeletonProductCard = () => {
  return (
    <div>
      <div className="relative aspect-w-1 aspect-h-1 ">
        <SpanSkeletonUI className="mb-[15px] w-full h-full" />
      </div>

      <div className="py-[15px] flex flex-col">
        <SpanSkeletonUI className="mb-[15px] w-[80px] h-[24px]" />

        <SpanSkeletonUI className="mb-[15px] w-full h-[34px]" />

        <p className="pt-[10px] border-t-[1px] border-lightBorder">
          <SpanSkeletonUI className="w-[80px] h-[14px]" />
        </p>

        <SpanSkeletonUI className="w-[80px] h-[18px] mb-[20px]" />

        <SpanSkeletonUI className="w-[80px] h-[14px]" />
      </div>
    </div>
  )
}

export default SkeletonProductCard
