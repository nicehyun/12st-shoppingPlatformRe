interface IMyPageCheckoutEl {
  headerContent: string
}

const MyPageCheckoutHeaderEl = ({ headerContent }: IMyPageCheckoutEl) => {
  return (
    <span className="block h-[60px] w-1/4 flexCenter text-[14px] font-semibold">
      {headerContent}
    </span>
  )
}

export default MyPageCheckoutHeaderEl
