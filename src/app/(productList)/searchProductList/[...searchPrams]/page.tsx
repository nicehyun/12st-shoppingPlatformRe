import SearchResultSection from "@/features/searchResultList/views/SearchResultSection"
import { Metadata } from "next"

interface ISearchResultPage {
  params: {
    searchPrams: string[]
  }
}

export const metadata: Metadata = {
  title: "검색 - 쇼핑 플랫폼 12ST",
}

const SearchResultPage = ({ params }: ISearchResultPage) => {
  return <SearchResultSection searchPath={params.searchPrams} />
}

export default SearchResultPage
