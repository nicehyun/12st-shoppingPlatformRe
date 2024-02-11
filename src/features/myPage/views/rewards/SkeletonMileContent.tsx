import React from "react"

import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const SkeletonMileContent = () => {
  return (
    <div className={`flex h-[60px] md:h-[50px]  border-b-[1px] border-border`}>
      <div className="h-full w-1/3 flexCenter">
        <SpanSkeletonUI className="w-[80px] h-[24px]" />
      </div>
      <div className="h-full w-1/3 flexCenter">
        <SpanSkeletonUI className="w-[80px] h-[24px]" />
      </div>
      <div className="h-full w-1/3 flexCenter">
        <SpanSkeletonUI className="w-[80px] h-[24px]" />
      </div>
    </div>
  )
}

export default SkeletonMileContent
