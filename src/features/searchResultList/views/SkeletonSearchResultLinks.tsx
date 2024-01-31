import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonSearchResultLinks = () => {
  return (
    <div className="border-b-[4px] h-[100px] mt-[50px] flex">
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="w-1/2 flexCenter" key={`skeleton_link_${index}`}>
          <SpanSkeletonUI className="w-[120px] h-[30px]" />
        </div>
      ))}
    </div>
  )
}

export default SkeletonSearchResultLinks
