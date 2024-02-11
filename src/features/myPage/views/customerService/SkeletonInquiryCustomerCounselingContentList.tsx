import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import SkeletonPagination from "../SkeletonPagination"

const SkeletonInquiryCustomerCounselingContentList = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`skeleton-inquiryCounseling-${index}`}
          className={`flex h-[60px] md:h-[50px] border-b-[1px] border-border`}
        >
          <div className="w-1/3 flexCenter pr-[10px]">
            <SpanSkeletonUI className={`w-full h-[30px]`} />
          </div>

          <div className="w-1/2 flexCenter pr-[10px]">
            <SpanSkeletonUI className={`w-full h-[30px]`} />
          </div>

          <div className="w-1/3 flexCenter pr-[10px]">
            <SpanSkeletonUI className={`w-[100px] h-[30px]`} />
          </div>

          <div className="w-1/3 flexCenter">
            <SpanSkeletonUI className={`w-[50px] h-[30px]`} />
          </div>
        </div>
      ))}

      <SkeletonPagination />
    </>
  )
}

export default SkeletonInquiryCustomerCounselingContentList
