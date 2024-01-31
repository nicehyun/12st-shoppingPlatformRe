import FourGridProductList from "./FourGridProductList"
import SkeletonProductCard from "./SkeletonProductCard"

interface ISkeletonProductList {
  className?: string
}

const SkeletonProductList = ({ className }: ISkeletonProductList) => {
  return (
    <FourGridProductList className={className}>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonProductCard key={`skeleton-${index}`} />
      ))}
    </FourGridProductList>
  )
}

export default SkeletonProductList
