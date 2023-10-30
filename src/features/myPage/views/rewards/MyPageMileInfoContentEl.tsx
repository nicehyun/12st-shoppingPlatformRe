import { numberToLocaleString } from "@/common/utils/price"

interface IMyPageMileInfoContentEl {
  mile: number
}

const MyPageMileInfoContentEl = ({ mile }: IMyPageMileInfoContentEl) => {
  return (
    <span className="flexCenter w-1/3">{numberToLocaleString(mile)} mile</span>
  )
}

export default MyPageMileInfoContentEl
