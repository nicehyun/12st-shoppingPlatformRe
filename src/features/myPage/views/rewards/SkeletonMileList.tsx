import SkeletonMileContent from "./SkeletonMileContent"

interface ISkeletonMileList {
  count: number
}

const SkeletonMileList = ({ count }: ISkeletonMileList) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonMileContent
          key={`skeleton-mile-content__${count}__${index}`}
        />
      ))}
    </>
  )
}

export default SkeletonMileList
