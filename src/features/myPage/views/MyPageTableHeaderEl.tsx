interface IMyPageCheckoutEl {
  headerContent: string
  isStart?: boolean
  isEnd?: boolean
  equalParts: number
  className?: string
}

const MyPageTableHeaderEl = ({
  headerContent,
  isStart = false,
  isEnd = false,
  equalParts,
  className,
}: IMyPageCheckoutEl) => {
  return (
    <span
      className={`${className} ${
        isStart || isEnd ? "my-auto" : "flexCenter"
      } w-1/${equalParts} ${isStart ? "" : isEnd ? "text-end" : ""}`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageTableHeaderEl
