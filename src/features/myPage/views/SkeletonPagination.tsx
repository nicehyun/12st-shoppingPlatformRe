import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonPagination = () => {
  return (
    <div className="flexCenter py-[15px] mt-[30px]">
      <SpanSkeletonUI className="w-[120px] h-[32px]" />
    </div>
  )
}

export default SkeletonPagination
