import ProductCard from "@/features/common/views/ProductCard"
import MyPageSectionTitle from "@/features/myPage/views/MyPageSectionTitle"
import { use } from "react"
import { layoutAPI } from "@/features/layout/models/layoutAPI"
import { combineStrings, getAfterEquals } from "@/features/common/utils/text"
import SecondCategories from "@/features/bestProductList/SecondCategories"
import ThirdCategories from "@/features/bestProductList/ThirdCategories"

interface ICategoryManagement {
  categoriesPath: string[]
}

const CategoryManagement = ({ categoriesPath }: ICategoryManagement) => {
  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    categoriesPath ?? []

  const decodedFirstCategory = getAfterEquals(
    decodeURIComponent(firstCategoryPath ?? "")
  )
  const decodedSecondCategory = getAfterEquals(
    decodeURIComponent(secondCategoryPath ?? "")
  )
  const decodedThirdCategory = getAfterEquals(
    decodeURIComponent(thirdCategoryPath ?? "")
  )

  const filtedProductList =
    use(
      layoutAPI.getFiltedProductListWithThridCategory(
        firstCategoryPath ? `/${combineStrings(categoriesPath.join(","))}` : ""
      )
    ) ?? []

  const sectionTitle = decodedFirstCategory
    ? decodedThirdCategory
      ? `${decodedFirstCategory} > ${decodedSecondCategory} > ${decodedThirdCategory}`
      : `${decodedFirstCategory} > ${decodedSecondCategory}`
    : "CATEGORY"

  return (
    <section>
      {/* TODO : MyPageSectionTitle common으로 수정하기 */}
      <MyPageSectionTitle title={sectionTitle} />

      <SecondCategories
        categoriesPath={categoriesPath}
        linkDefaultHref="/categoryManagement"
      />

      {categoriesPath && (
        <ThirdCategories
          categoriesPath={categoriesPath}
          linkDefaultHref="/categoryManagement"
        />
      )}

      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {filtedProductList.map((product, index) => (
          <ProductCard
            productInfo={product}
            key={`product-categogy-${product.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryManagement
