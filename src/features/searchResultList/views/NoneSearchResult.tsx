"use client"

import { useNavigations } from "@/features/common/hooks/useNavigations"

const NoneSearchResult = () => {
  const { pathname } = useNavigations()

  const [, , , searchParam] = pathname.split("/")
  const decodedSearchParam = decodeURIComponent(searchParam)

  return (
    <p className="flexCenter h-[400px] text-[20px]">
      <span className="text-lightRed">{decodedSearchParam}</span>에 대한
      검색결과가 없습니다.
    </p>
  )
}

export default NoneSearchResult
