import { AiOutlineSearch } from "react-icons/ai"

//TODO : 타입수정
interface ISearchButton {
  onClick?: () => void
}

const HeaderSearchForm = ({}: ISearchButton) => {
  return (
    <form className="absolute bottom-[5px] right-[26px] lg:right-[35px] xl:right-[38px] h-[34px]">
      <input
        id="search"
        className="w-[100px] focus:w-[300px] sm:focus:w-[220px] md:focus:w-[250px] h-full px-[10px] pl-[4px] pr-[30px] border-border rounded-[5px] focus:border-lightRed text-lightBlack text-[12px] dark:focus:bg-white transition-3 peer"
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 right-[8px] peer-focus:hover:text-lightRed transition-3 peer-focus:text-lightBlack"
      >
        <AiOutlineSearch className="text-[20px]" />
      </button>
    </form>
  )
}

export default HeaderSearchForm
