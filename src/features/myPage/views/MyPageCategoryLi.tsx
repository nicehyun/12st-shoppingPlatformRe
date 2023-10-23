interface IMyPageCategoryLi {
  id: string
  categoryTitle: string
  categoryList: {
    categoryListContents: string[]
    categoryListRoutes?: (() => void)[]
  }
  className?: string
}

const MyPageCategoryLi = ({
  id,
  categoryTitle,
  categoryList,
  className,
}: IMyPageCategoryLi) => {
  const { categoryListRoutes, categoryListContents } = categoryList
  return (
    <li className={`${className} list-none`}>
      <h3 className="font-bold text-[28px]">{categoryTitle}</h3>
      <ul>
        {categoryListContents.map((categoryListContent) => (
          <li
            key={`myPage-categoryList__${id}`}
            className="mt-[14px] text-[16px] cursor-pointer"
          >
            {categoryListContent}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default MyPageCategoryLi
