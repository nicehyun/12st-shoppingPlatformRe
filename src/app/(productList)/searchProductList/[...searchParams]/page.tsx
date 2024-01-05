import SearchResultSection from "@/features/searchResultList/views/SearchResultSection"
import { Metadata } from "next"

interface ISearchResultPage {
  params: {
    searchParams: string[]
  }
}

export async function generateMetadata({
  params,
}: ISearchResultPage): Promise<Metadata> {
  const [, searchPrams] = params.searchParams
  const decodedSearchPrams = decodeURIComponent(searchPrams)

  return {
    title: `${decodedSearchPrams} 검색 - 12ST`,
    description: `${decodedSearchPrams}에 대한 검색 결과`,
  }
}

const SearchResultPage = ({ params }: ISearchResultPage) => {
  return <SearchResultSection searchParams={params.searchParams} />
}

export default SearchResultPage
