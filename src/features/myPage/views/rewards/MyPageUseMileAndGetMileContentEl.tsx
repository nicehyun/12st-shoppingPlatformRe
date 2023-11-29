import { CheckoutDate } from "@/features/common/types/checkout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageListContentLayout from "../MyPageListContentLayout"

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
    <MyPageListContentLayout>
      <MyPageTableContentEl
        content={`${year}-${month}-${date}`}
        className="w-1/3 text-lightBlack"
      />
      <MyPageTableContentEl content={mile} className="w-1/3 font-bold" />
      <MyPageTableContentEl
        content={checkoutNumber}
        className="w-1/3 break-words truncate-2"
        NoCenter
      />
    </MyPageListContentLayout>
  )
}

export default MyPageUseMileAndGetMileContentEl
