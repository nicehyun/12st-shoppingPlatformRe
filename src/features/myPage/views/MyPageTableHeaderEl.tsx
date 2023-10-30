interface IMyPageCheckoutEl {
  headerContent: string
  isStart?: boolean
  isEnd?: boolean
  equalParts: number
}

const MyPageTableHeaderEl = ({
  headerContent,
  isStart = false,
  isEnd = false,
  equalParts,
}: IMyPageCheckoutEl) => {
  return (
    <span
      className={`flex items-center w-1/${equalParts} ${
        isStart ? "justify-start" : isEnd ? "justify-end" : "justify-center"
      }`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageTableHeaderEl
