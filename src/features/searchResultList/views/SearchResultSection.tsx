import SearchProductList from "./SearchProductList"
import SearchResultInfo from "./SearchResultInfo"

interface ISearchResultSection {
  searchPath: string[]
}

const SearchResultSection = ({ searchPath }: ISearchResultSection) => {
  return (
    <section>
      <SearchResultInfo searchPath={searchPath} />
      <SearchProductList searchPath={searchPath} />
    </section>
  )
}

export default SearchResultSection
