import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageListContentLayout from "../MyPageListContentLayout"
import { parseISOString } from "@/features/checkout/utils/checkout"

interface IMyPageUseMileAndGetMileContentEl {
  checkoutDate: string
  mile: string
  checkoutNumber: string
}

const MyPageUseMileAndGetMileContentEl = ({
  mile,
  checkoutNumber,
  checkoutDate,
}: IMyPageUseMileAndGetMileContentEl) => {
  return (
    <MyPageListContentLayout>
      <MyPageTableContentEl
        content={`${parseISOString(checkoutDate).year}/${
          parseISOString(checkoutDate).month
        }/${parseISOString(checkoutDate).date}`}
        className="w-1/3 text-lightBlack"
      />
      <MyPageTableContentEl content={mile} className="w-1/3 font-bold" />
      <MyPageTableContentEl content={checkoutNumber} className="w-1/3" />
    </MyPageListContentLayout>
  )
}

export default MyPageUseMileAndGetMileContentEl
