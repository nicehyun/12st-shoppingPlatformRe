import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { useState } from "react"
import { FaSortDown } from "react-icons/fa"

type SubCategory = {
  [key: string]: string[]
}

type MajorCategory = {
  [key: string]: SubCategory
}

type DummyCategories = MajorCategory[]

const dummyCategories: DummyCategories = [
  {
    패션의류: {
      남성의류: [
        "바지",
        "티셔츠",
        "셔츠/남방",
        "트레이닝복",
        "정장세트",
        "청바지",
        "니트/스웨터",
        "재킷",
        "카디건",
        "레인코트",
        "점퍼",
        "유니폼/단체복",
        "한복",
      ],
      여성언더웨어: [
        "러닝/캐미솔",
        "브라",
        "브라팬티세트",
        "팬티",
        "잠옷/홈웨어",
        "속치마/속바지",
        "언더웨어소품",
      ],
      여성의류: [
        "바지",
        "카디건",
        "원피스",
        "스커트",
        "티셔츠",
        "레깅스",
        "블라우스/셔츠",
        "점퍼",
        "니트/스웨터",
        "트레이닝복",
        "재킷",
        "청바지",
        "점프슈트",
        "코트",
        "코디세트",
        "한복",
      ],
    },
  },

  {
    패션의류2: {
      남성의류: [
        "바지",
        "티셔츠",
        "셔츠/남방",
        "트레이닝복",
        "정장세트",
        "청바지",
        "니트/스웨터",
        "재킷",
        "카디건",
        "레인코트",
        "점퍼",
        "유니폼/단체복",
        "한복",
      ],
      여성언더웨어: [
        "러닝/캐미솔",
        "브라",
        "브라팬티세트",
        "팬티",
        "잠옷/홈웨어",
        "속치마/속바지",
        "언더웨어소품",
      ],
      여성의류: [
        "바지",
        "카디건",
        "원피스",
        "스커트",
        "티셔츠",
        "레깅스",
        "블라우스/셔츠",
        "점퍼",
        "니트/스웨터",
        "트레이닝복",
        "재킷",
        "청바지",
        "점프슈트",
        "코트",
        "코디세트",
        "한복",
      ],
    },
  },
]

const CategoryList = () => {
  return (
    <div className="w-[300px]">
      {dummyCategories.map((firstCategoies) => (
        <>
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
        </>
      ))}
    </div>
  )
}

export default CategoryList
