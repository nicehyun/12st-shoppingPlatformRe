import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import MyPageTableContentEl from "../MyPageTableContentEl"

const SkeletonCheckListTableContent = () => {
  return (
    <div
      className={`flex items-center justify-between h-[60px] md:h-[50px] border-b-[1px] border-border`}
    >
      <MyPageTableContentEl
        content={<SpanSkeletonUI className="w-full h-[24px]" />}
        NoCenter
        className="w-3/12"
      />

      <MyPageTableContentEl
        content={<SpanSkeletonUI className="w-full h-[24px]" />}
        NoCenter
        className="truncate-2 w-1/5 break-words mx-[20px]"
      />

      <MyPageTableContentEl
        content={<SpanSkeletonUI className="w-full h-[24px]" />}
        NoCenter
        className="w-2/3 md:w-1/3 sm:w-1/4 mr-[10px]"
      />

      <MyPageTableContentEl
        content={<SpanSkeletonUI className="w-full h-[24px]" />}
        NoCenter
        className="text-end w-3/12"
      />
    </div>
  )
}

export default SkeletonCheckListTableContent
