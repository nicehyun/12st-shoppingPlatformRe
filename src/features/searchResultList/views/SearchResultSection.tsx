import SearchProductListMatchingBrand from "./SearchProductListMatchingBrand"
import SearchProductListMatchingName from "./SearchProductListMatchingName"
import SearchResultLinks from "./SearchResultLinks"

interface ISearchResultSection {
  searchParams: string[]
}

const SearchResultSection = ({ searchParams }: ISearchResultSection) => {
  const [classification] = searchParams

  return (
    <section>
      <SearchResultLinks searchPath={searchParams} />

      {classification === "product" && <SearchProductListMatchingName />}
      {classification === "brand" && <SearchProductListMatchingBrand />}
    </section>
  )
}

export default SearchResultSection
