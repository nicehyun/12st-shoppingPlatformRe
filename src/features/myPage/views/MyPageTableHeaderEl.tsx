interface IMyPageCheckoutEl {
  headerContent: string
  isStart?: boolean
  isEnd?: boolean
  className?: string
}

const MyPageTableHeaderEl = ({
  headerContent,
  isStart = false,
  isEnd = false,
  className,
}: IMyPageCheckoutEl) => {
  return (
    <span
      className={`${className} block ${
        !isStart && !isEnd ? "flexCenter" : "my-auto"
      } ${isEnd ? "text-end" : ""}`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageTableHeaderEl
