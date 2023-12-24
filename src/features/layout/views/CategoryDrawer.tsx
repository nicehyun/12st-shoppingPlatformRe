"use client"

import Drawer from "@mui/material/Drawer"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  hideCategory,
  selectCategoryState,
} from "@/redux/features/categorySlice"
import CategoryList from "./CategoryList"

const CategoryDrawer = () => {
  const dispatch = useAppDispatch()
  const { isShowCategory } = useAppSelector(selectCategoryState)

  return (
    <Drawer
      anchor={"left"}
      open={isShowCategory}
      onClose={() => dispatch(hideCategory())}
    >
      <CategoryList />
    </Drawer>
  )
}

export default CategoryDrawer
