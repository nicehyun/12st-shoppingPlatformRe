"use client"

import Drawer from "@mui/material/Drawer"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaSortDown } from "react-icons/fa"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetCategoriesQuery } from "../hooks/useGetCategoriesQuery"
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
