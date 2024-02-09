import SkeletonCheckListTableContent from "./SkeletonCheckListTableContent"
import SkeletonPagination from "../SkeletonPagination"

const SkeletonCheckoutList = () => {
  return (
    <>
      <div className="mb-[30px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonCheckListTableContent key={`skeleton-checkout-${index}`} />
        ))}
      </div>

      <SkeletonPagination />
    </>
  )
}

export default SkeletonCheckoutList
