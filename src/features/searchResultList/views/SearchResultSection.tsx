import SearchProductList from "./SearchProductList"
import SearchResultInfo from "./SearchResultInfo"
import SuspenseIncludingFallback from "@/features/common/views/SuspenseIncludingFallback"

interface ISearchResultSection {
  searchParams: string[]
}

const SearchResultSection = ({ searchParams }: ISearchResultSection) => {
  return (
    <section>
      <SearchResultInfo searchPath={searchParams} />

      <SuspenseIncludingFallback>
        <SearchProductList searchPath={searchParams} />
      </SuspenseIncludingFallback>
    </section>
  )
}

export default SearchResultSection
