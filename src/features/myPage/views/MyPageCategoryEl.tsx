interface IMyPageCategoryLi {
  id: string
  categoryTitle: string
  categoryList: {
    categoryListContents: string[]
    categoryListRoutes?: (() => void)[]
  }
  className?: string
}

const MyPageCategoryEl = ({
  id,
  categoryTitle,
  categoryList,
  className,
}: IMyPageCategoryLi) => {
  const { categoryListRoutes, categoryListContents } = categoryList
  return (
    <li className={`${className} list-none`}>
      <h3 className="pb-[14px] font-bold text-[24px] sm:text-[20px] md:text-[20px] lg:text-[22px] border-b-[4px] border-black">
        {categoryTitle}
      </h3>
      <ul>
        {categoryListContents.map((categoryListContent, index) => (
          <li
            key={`${id}-${index}`}
            className={`${index !== 0 && index % 2 === 0 && "border-y-[1px]"} ${
              index === 0 && "border-b-[1px]"
            } border-lightBorder py-[20px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[14px] font-extralight hover:font-medium cursor-pointer text-black  dark:text-lightborder dark:hover:text-border`}
          >
            {categoryListContent}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default MyPageCategoryEl
