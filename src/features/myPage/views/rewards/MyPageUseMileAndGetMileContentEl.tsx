import { CheckoutDate } from "@/common/types/checkout"
import MyPageTableContentEl from "../MyPageTableContentEl"

interface IMyPageUseMileAndGetMileContentEl {
  checkoutDate: CheckoutDate
  mile: string
  checkoutNumber: string
}

const MyPageUseMileAndGetMileContentEl = ({
  mile,
  checkoutNumber,
  checkoutDate,
}: IMyPageUseMileAndGetMileContentEl) => {
  const { date, month, year } = checkoutDate
  return (
    <div className="flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border">
      <MyPageTableContentEl
        content={`${year}-${month}-${date}`}
        equalParts={3}
        className="text-lightBlack"
      />
      <MyPageTableContentEl
        content={mile}
        equalParts={3}
        className="font-bold"
      />
      <MyPageTableContentEl
        content={checkoutNumber}
        equalParts={3}
        NoCenter
        className="text-ellipsis overflow-hidden"
      />
    </div>
  )
}

export default MyPageUseMileAndGetMileContentEl
