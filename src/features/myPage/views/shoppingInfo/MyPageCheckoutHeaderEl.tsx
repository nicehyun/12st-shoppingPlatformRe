interface IMyPageCheckoutEl {
  headerContent: string
  isStart?: boolean
  isEnd?: boolean
}

const MyPageCheckoutHeaderEl = ({
  headerContent,
  isStart = false,
  isEnd = false,
}: IMyPageCheckoutEl) => {
  return (
    <span
      className={`flex items-center w-1/3 ${
        isStart ? "justify-start" : isEnd ? "justify-end" : "justify-center"
      }`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageCheckoutHeaderEl
