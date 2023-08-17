import { AiOutlineSearch } from "react-icons/ai"

interface ISearchButton {
  onClick: () => void
}

const SearchButton = ({ onClick }: ISearchButton) => {
  return (
    <form className="absolute bottom-[5px] right-[30px] h-[34px]">
      <input className="w-[100px] focus:w-[300px] sm:focus:w-[220px] md:focus:w-[250px] h-full px-[10px] py-[4px] border-border rounded-[5px] focus:border-lightRed text-lightBlack text-[12px] transition-3 peer" />
      <button type="submit" className="absolute top-0 bottom-0 right-[8px]">
        <AiOutlineSearch className="text-[20px]" />
      </button>
    </form>
  )
}

export default SearchButton
