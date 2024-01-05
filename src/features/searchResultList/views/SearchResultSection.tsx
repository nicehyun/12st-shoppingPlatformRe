import SectionSuspense from "@/features/common/views/SectionSuspense"
import SearchProductList from "./SearchProductList"
import SearchResultInfo from "./SearchResultInfo"

interface ISearchResultSection {
  searchParams: string[]
}

const SearchResultSection = ({ searchParams }: ISearchResultSection) => {
  return (
    <section>
      <SearchResultInfo searchPath={searchParams} />

      <SectionSuspense>
        <SearchProductList searchPath={searchParams} />
      </SectionSuspense>
    </section>
  )
}

export default SearchResultSection
