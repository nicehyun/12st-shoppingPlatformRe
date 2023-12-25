import MyPageSectionTitle from "../myPage/views/MyPageSectionTitle"
import BestProductList from "./BestProductList"
import SecondCategories from "./SecondCategories"
import ThirdCategories from "./ThirdCategories"

interface IBestProductList {
  categoriesPath: string[] | undefined
}

const BestProductListSection = ({ categoriesPath }: IBestProductList) => {
  return (
    <section>
      <MyPageSectionTitle title="BEST" />

      <SecondCategories categoriesPath={categoriesPath} />

      {categoriesPath && <ThirdCategories categoriesPath={categoriesPath} />}

      <BestProductList categoriesPath={categoriesPath} />
    </section>
  )
}

export default BestProductListSection
