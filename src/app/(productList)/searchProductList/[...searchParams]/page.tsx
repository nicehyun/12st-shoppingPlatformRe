import { layoutAPI } from "@/features/layout/models/layoutAPI"
import SearchResultSection from "@/features/searchResultList/views/SearchResultSection"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
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

const SearchResultPage = async ({ params }: ISearchResultPage) => {
  const [, searchPrams] = params.searchParams

  const decodedsearchPrams = decodeURIComponent(searchPrams)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    ["searchResult", decodedsearchPrams],
    () => layoutAPI.getSearchResult(decodedsearchPrams),
    {
      cacheTime: 60 * 60 * 1000,
    }
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <SearchResultSection searchParams={params.searchParams} />
    </Hydrate>
  )
}

export default SearchResultPage
