"use client"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"

const MyPageInquiryCustomerCounselingWriteButton = () => {
  const { routeTo } = useNavigations()
  return (
    <div className="mb-[20px] text-end">
      <Button
        onClick={() => routeTo(ROUTE.COUNSELINGWRITE)}
        content="1:1 문의 작성"
        classNames="border-[1px] border-lightRed text-lightRed py-[10px] px-[20px] rounded-[5px] dark:text-white dark:bg-black"
      />
    </div>
  )
}

export default MyPageInquiryCustomerCounselingWriteButton
