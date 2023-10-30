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
      className={`${className} flex items-center w-1/${equalParts} ${
        isStart ? "justify-start" : isEnd ? "justify-end" : "justify-center"
      }`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageTableHeaderEl
