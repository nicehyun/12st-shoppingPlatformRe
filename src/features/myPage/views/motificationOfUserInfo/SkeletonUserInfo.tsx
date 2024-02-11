import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonUserInfo = () => {
  return (
    <div className="pt-[30px] w-[400px] flex flex-col">
      <SpanSkeletonUI className="w-[180px] h-[28px] mb-[30px]" />
      <SpanSkeletonUI className="w-[180px] h-[28px] mb-[30px]" />
      <SpanSkeletonUI className="w-[180px] h-[28px]" />
    </div>
  )
}

export default SkeletonUserInfo
