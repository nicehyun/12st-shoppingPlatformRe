import { CheckoutList } from "@/common/types/checkout"
import { numberToLocaleString } from "@/common/utils/price"
import { checkoutTotalPrice } from "../utils/price"

interface IMyPageCheckoutEl {
  checkoutList: CheckoutList

  className?: string
}

const MyPageCheckoutEl = ({ checkoutList, className }: IMyPageCheckoutEl) => {
  const {
    checkoutDate: checkoutDateInfo,
    prductList,
    checkoutNumber,
  } = checkoutList

  const checkoutDate = `${checkoutDateInfo?.year}/${checkoutDateInfo?.month}/${checkoutDateInfo?.date}`
  const checkoutTime = ` ${checkoutDateInfo?.hour} : ${checkoutDateInfo?.minute}`
  return (
    <div
      className={`${className} flex items-center h-[60px] text-[14px] sm:text-[12px] md:text-[12px] font-normal group cursor-pointer`}
    >
      <div className="flex justify-start flex-col xl:flex-row w-1/4 text-lightBlack group-hover:text-black group-hover:dark:text-white  ">
        <span className="xl:mr-[10px]">{checkoutDate}</span>

        <span>{checkoutTime}</span>
      </div>

      <div
        className={`flex justify-start w-1/2 cursor-pointer  group-hover:text-lightRed `}
      >
        <span
          className={`block sm:h-[34.8px] md:h-[34.8px] sm:truncate-2 md:truncate-2 lg:truncate-2 xl:mr-[10px]`}
        >
          {prductList[0].name}
        </span>
        <span className="flex items-end font-bold whitespace-nowrap">
          외 {prductList.length}개
        </span>
      </div>

      <div className="w-1/4 flex justify-end font-semibold text-lightRed">
        {numberToLocaleString(checkoutTotalPrice(checkoutList))}
      </div>
    </div>
  )
}

export default MyPageCheckoutEl
