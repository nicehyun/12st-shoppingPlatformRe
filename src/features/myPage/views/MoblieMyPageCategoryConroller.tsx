"use client"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"
import { useEffect, useState } from "react"
import { BiCategory } from "react-icons/bi"
import MobileMyPageCategory from "./MobileMyPageCategory"

const MoblieMyPageCategoryConroller = () => {
  const { pathname } = useNavigations()
  const [isShowCategory, setIsShowCategory] = useState(false)

  const handleCatgoryShow = () => {
    setIsShowCategory(true)
  }

  const handleCatgoryHide = () => {
    setIsShowCategory(false)
  }

  useEffect(() => {
    handleCatgoryHide()
  }, [pathname])
  return (
    <>
      <Button
        onClick={handleCatgoryShow}
        content={<BiCategory />}
        classNames="fixed top-[140px] left-[5px] text-black hover:text-lightRed transition-3 text-[30px]"
      />

      {isShowCategory && (
        <MobileMyPageCategory onHideCategory={handleCatgoryHide} />
      )}
    </>
  )
}

export default MoblieMyPageCategoryConroller
