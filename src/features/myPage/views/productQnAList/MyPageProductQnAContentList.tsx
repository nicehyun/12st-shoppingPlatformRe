"use client"

import { useGetCustomerCounselingListQuery } from "../../hooks/useGetCustomerCounselingListQuery"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { parseISOString } from "@/features/checkout/utils/checkout"
import { usePagination } from "@/features/common/hooks/usePagination"

const MyPageProductQnAContentList = () => {
  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  const productQnAList = customerCounselingList.filter(
    (productQnA) => productQnA.csType === "product"
  )

  const perPage = 10
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    productQnAList.length
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (productQnAList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {productQnAList
        ?.slice(listPagination.indexOfFirst, listPagination.indexOfLast)
        .map((productQnAEl, index) => (
          <MyPageListContentLayout
            key={`customerCounselingList-${productQnAEl.csType}-${productQnAEl.writeDate}-${index}`}
          >
            <MyPageTableContentEl
              content={productQnAEl.productName}
              NoCenter
              className="truncate-2 group-hover:text-lightRed w-1/4 break-words font-semibold pr-[20px]"
            />
            <MyPageTableContentEl
              content={productQnAEl.counselingTitle}
              NoCenter
              className="truncate-2 group-hover:text-lightRed w-1/4 break-words"
            />
            <MyPageTableContentEl
              className="w-1/4 text-lightBlack"
              content={`${parseISOString(productQnAEl.writeDate ?? "").year}-${
                parseISOString(productQnAEl.writeDate ?? "").month
              }-${parseISOString(productQnAEl.writeDate ?? "").date}`}
            />

            <MyPageTableContentEl className="w-1/4" content={"N"} />
          </MyPageListContentLayout>
        ))}

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default MyPageProductQnAContentList
