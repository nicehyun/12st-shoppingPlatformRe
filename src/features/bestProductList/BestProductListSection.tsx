import SectionTitle from "../myPage/views/SectionTitle"
import BestProductList from "./BestProductList"
import SecondCategories from "./SecondCategories"
import ThirdCategories from "./ThirdCategories"

interface IBestProductList {
  categoriesPath: string[] | undefined
}

const BestProductListSection = ({ categoriesPath }: IBestProductList) => {
  return (
    <section>
      <SectionTitle title="BEST" />

      <SecondCategories
        categoriesPath={categoriesPath}
        linkDefaultHref="/bestProductList"
      />

      {categoriesPath && (
        <ThirdCategories
          categoriesPath={categoriesPath}
          linkDefaultHref="/bestProductList"
        />
      )}

      <BestProductList categoriesPath={categoriesPath} />
    </section>
  )
}

export default BestProductListSection
