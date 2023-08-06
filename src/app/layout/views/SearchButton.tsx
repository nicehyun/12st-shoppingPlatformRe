import { FiSearch } from "react-icons/fi"

interface ISearchButton {
  onClick: () => void
}

const SearchButton = ({ onClick }: ISearchButton) => {
  return (
    <button
      className="w-full h-full flexCenter inset-0 hover:text-lightRed transition-3"
      onClick={onClick}
    >
      <FiSearch />
    </button>
  )
}

export default SearchButton
