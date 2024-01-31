import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonShadowProductCard = () => {
  return (
    <div className="flex overflow-hidden gap-[35px]">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div className="skeleton-slide shrink-0" key={index}>
            <div className="mb-[20px] aspect-w-1 aspect-h-1 cardShadow rounded-[8px]">
              <SpanSkeletonUI className="mb-[15px] w-full h-full" />
            </div>

            <div className="h-[80px] flex flex-col">
              <SpanSkeletonUI className="mb-[5px] w-[80px] h-[16px]" />
              <SpanSkeletonUI className="mb-[5px] w-[120px] h-[16px]" />
            </div>

            <div>
              <SpanSkeletonUI className="mb-[5px] w-[80px] h-[16px] mr-[5px]" />
              <SpanSkeletonUI className="mb-[5px] w-[80px] h-[16px]" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SkeletonShadowProductCard
