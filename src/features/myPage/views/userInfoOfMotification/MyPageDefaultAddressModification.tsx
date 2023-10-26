"use client"

import AddressInfo from "@/common/views/AddressInfo"
import Button from "@/common/views/Button"

const MyPageDefaultAddressModification = () => {
  return (
    <>
      <AddressInfo className="w-[400px] md:w-full sm:w-full" />
      <Button
        content="저장하기"
        classNames="mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
      />
    </>
  )
}

export default MyPageDefaultAddressModification
