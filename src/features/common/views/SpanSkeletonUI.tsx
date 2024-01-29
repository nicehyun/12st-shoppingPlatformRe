interface ISpanSkeletonUI {
  className?: string
}

const SpanSkeletonUI = ({ className }: ISpanSkeletonUI) => {
  return (
    <span
      className={`${className} inline-block bg-lightGray animate-pulse rounded-[5px]`}
    ></span>
  )
}

export default SpanSkeletonUI
