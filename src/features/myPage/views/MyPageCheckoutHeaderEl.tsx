interface IMyPageCheckoutEl {
  headerContent: string
  isStart?: boolean
  isEnd?: boolean
}

const MyPageCheckoutHeaderEl = ({
  headerContent,
  isEnd = false,
  isStart = false,
}: IMyPageCheckoutEl) => {
  return (
    <span
      className={`${
        isStart && "text-start"
      } block h-[60px] w-1/3 flexCenter text-[14px] sm:text-[10px] md:text-[10px] font-semibold`}
    >
      {headerContent}
    </span>
  )
}

export default MyPageCheckoutHeaderEl
