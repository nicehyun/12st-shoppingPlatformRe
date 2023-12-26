interface INoneSearchResult {
  searchContent: string
}

const NoneSearchResult = ({ searchContent }: INoneSearchResult) => {
  return (
    <p className="flexCenter h-[400px] text-[20px]">
      <span className="text-lightRed">{searchContent}</span>에 대한 검색결과가
      없습니다.
    </p>
  )
}

export default NoneSearchResult
