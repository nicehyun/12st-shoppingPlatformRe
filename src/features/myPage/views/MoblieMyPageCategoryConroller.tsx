"use client"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"
import { useEffect } from "react"
import { BiCategory } from "react-icons/bi"
import MobileMyPageCategory from "./MobileMyPageCategory"

interface IMoblieMyPageCategoryConroller {
  isShowCategory: boolean
  onShowCatgory: () => void
  onHideCatgory: () => void
}

const MoblieMyPageCategoryConroller = ({
  isShowCategory,
  onShowCatgory,
  onHideCatgory,
}: IMoblieMyPageCategoryConroller) => {
  const { pathname } = useNavigations()

  useEffect(() => {
    onHideCatgory()
  }, [pathname])

  useEffect(() => {}, [isShowCategory])
  return (
    <>
      <Button
        onClick={onShowCatgory}
        content={<BiCategory />}
        classNames="fixed top-[140px] left-[5px] text-black hover:text-lightRed transition-3 text-[30px]"
      />

      {isShowCategory && (
        <MobileMyPageCategory onHideCategory={onHideCatgory} />
      )}
    </>
  )
}

export default MoblieMyPageCategoryConroller
