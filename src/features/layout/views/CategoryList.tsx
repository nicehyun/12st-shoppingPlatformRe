import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaSortDown } from "react-icons/fa"
import { useGetCategoriesQuery } from "../hooks/useGetCategoriesQuery"
import { Fragment } from "react"
import Link from "next/link"
import { Categories } from "../types/category"
import { parseAndToSlice } from "@/features/common/utils/text"

const CategoryList = () => {
  const { categories } = useGetCategoriesQuery()

  const renderCategories = (categories: Categories[]) => {
    return categories.map((categoryData, index) => {
      const firstCategory = Object.keys(categoryData)[0]

      const subCategories = categoryData[firstCategory]

      return (
        <Fragment key={`categories-first-${index}`}>
          <h3 className="font-bold pl-[16px] text-lightRed py-[20px]">
            {firstCategory}
          </h3>

          {Object.keys(subCategories).map((secondCategory, secondIndex) => (
            <Fragment key={`categories-second-${secondCategory}`}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<FaSortDown />}
                  aria-controls={`categoryDrawer-secondCategory-${secondIndex}`}
                >
                  <p className="font-semibold text-[14px]">{secondCategory}</p>
                </AccordionSummary>

                <AccordionDetails>
                  {subCategories[secondCategory].map((thirdCategory) => (
                    <Fragment key={`categories-third-${thirdCategory}`}>
                      <Link
                        href={`/categoryManagement/firstCategory=${firstCategory}/secondCategory=${secondCategory}/thirdCategory=${parseAndToSlice(
                          thirdCategory
                        )}`}
                        className="block text-lightBlack py-[10px] text-[14px] font-medium cursor-pointer hover:text-lightRed"
                      >
                        {thirdCategory}
                      </Link>
                    </Fragment>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Fragment>
          ))}
        </Fragment>
      )
    })
  }

  return <div className="w-[300px]">{renderCategories(categories ?? [])}</div>
}

export default CategoryList
