import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaSortDown } from "react-icons/fa"
import { useGetCategoriesQuery } from "../hooks/useGetCategoriesQuery"
import React from "react"

const CategoryList = () => {
  const { categories } = useGetCategoriesQuery()

  return (
    <div className="w-[300px]">
      {categories?.map((firstCategoies) => (
        <React.Fragment
          key={`categories-first-${Object.keys(firstCategoies)[0]}`}
        >
          <h3 className="font-bold pl-[16px] text-lightRed py-[20px]">
            {Object.keys(firstCategoies)[0]}
          </h3>

          {Object.entries(firstCategoies[Object.keys(firstCategoies)[0]]).map(
            ([secondCategory, secondCategoryList], secondIndex) => (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<FaSortDown />}
                    aria-controls={`categoryDrawer-secondCategory-${secondIndex}`}
                    id={`categoryDrawer-secondCategory-${secondIndex}`}
                  >
                    <p className="font-semibold text-[14px]">
                      {secondCategory}
                    </p>
                  </AccordionSummary>

                  <AccordionDetails>
                    {Array.isArray(secondCategoryList) &&
                      secondCategoryList.map((thirdCategory) => (
                        <>
                          <p className="text-lightBlack py-[10px] text-[14px] font-medium cursor-pointer hover:text-lightRed">
                            {thirdCategory}
                          </p>
                        </>
                      ))}
                  </AccordionDetails>
                </Accordion>
              </>
            )
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CategoryList
