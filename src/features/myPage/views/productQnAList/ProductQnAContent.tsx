import { parseISOString } from "@/features/checkout/utils/checkout"
import { CustomerCounselingDetail } from "../../types/myPage"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageTableContentEl from "../MyPageTableContentEl"
interface IProductQnAContent {
  productQnA: CustomerCounselingDetail
}

const ProductQnAContent = ({ productQnA }: IProductQnAContent) => {
  return (
    <MyPageListContentLayout>
      <MyPageTableContentEl
        content={productQnA.productName}
        NoCenter
        className="truncate-2 group-hover:text-lightRed w-1/4 break-words font-semibold pr-[20px]"
      />
      <MyPageTableContentEl
        content={productQnA.counselingTitle}
        NoCenter
        className="truncate-2 group-hover:text-lightRed w-1/4 break-words"
      />
      <MyPageTableContentEl
        className="w-1/4 text-lightBlack"
        content={`${parseISOString(productQnA.writeDate ?? "").year}-${
          parseISOString(productQnA.writeDate ?? "").month
        }-${parseISOString(productQnA.writeDate ?? "").date}`}
      />

      <MyPageTableContentEl className="w-1/4" content={"N"} />
    </MyPageListContentLayout>
  )
}

export default ProductQnAContent
