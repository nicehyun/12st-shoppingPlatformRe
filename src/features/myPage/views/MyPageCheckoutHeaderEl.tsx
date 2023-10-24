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
      className={`flex items-center h-[60px] md:h-[50px] w-1/3 text-[14px] sm:text-[12px] md:text-[12px] font-semibold ${
        isStart ? "justify-start" : isEnd ? "justify-end" : "justify-center"
      }`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageCheckoutHeaderEl
