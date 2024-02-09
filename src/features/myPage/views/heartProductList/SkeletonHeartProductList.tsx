import SkeletonProductCard from "@/features/common/views/SkeletonProductCard"
import ThreeGridProductList from "@/features/common/views/ThreeGridProductList"
import SkeletonPagination from "../SkeletonPagination"

const SkeletonHeartProductList = () => {
  return (
    <>
      <ThreeGridProductList className="mt-[50px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonProductCard key={`skeleton-${index}`} />
        ))}
      </ThreeGridProductList>

      <SkeletonPagination />
    </>
  )
}

export default SkeletonHeartProductList
