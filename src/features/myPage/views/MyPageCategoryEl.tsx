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
      <h3 className="font-bold text-[24px] sm:text-[18px] md:text-[20px]">
        {categoryTitle}
      </h3>
      <ul>
        {categoryListContents.map((categoryListContent, index) => (
          <li
            key={`${id}-${index}`}
            className="mt-[14px] text-[16px] sm:text-[12px] md:text-[14px] cursor-pointer text-lightBlack hover:text-black dark:text-lightborder dark:hover:text-border"
          >
            {categoryListContent}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default MyPageCategoryEl
