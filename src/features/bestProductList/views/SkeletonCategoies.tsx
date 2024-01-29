import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonCategoies = () => {
  return (
    <div className="border-[1px] bg-white mt-[50px] px-[10px] py-[20px] flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <SpanSkeletonUI
          key={`skeleton-${index}`}
          className={`relative w-[80px] h-[24px] ml-[10px] mr-[20px] ${
            index !== 0 ? "before:vertical-divider before:-mx-[16px]" : ""
          }`}
        />
      ))}
    </div>
  )
}

export default SkeletonCategoies
