"use client"

import Button from "@/common/views/Button"

const MyPageEmailModification = () => {
  return (
    <>
      <span>test@test.com</span>

      <Button
        content="변경"
        classNames="border-[1px] border-border absolute right-0 top-1/2  transform -translate-y-1/2 py-[6px] px-[30px] text-[14px] font-semibold bordr-[1px] text-lightRed border-lightRed dark:bg-lightRed dark:text-white rounded-[5px]"
      />
    </>
  )
}

export default MyPageEmailModification
