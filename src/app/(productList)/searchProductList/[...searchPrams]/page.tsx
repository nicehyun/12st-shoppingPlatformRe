import SearchResultSection from "@/features/searchResultList/views/SearchResultSection"

interface ISearchResultPage {
  params: {
    searchPrams: string[]
  }
}

const SearchResultPage = ({ params }: ISearchResultPage) => {
  return <SearchResultSection searchPath={params.searchPrams} />
}

export default SearchResultPage
