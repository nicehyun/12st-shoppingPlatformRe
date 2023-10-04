import Button from "@/common/views/Button"
import { FormEventHandler, useEffect, useRef } from "react"
import { AiOutlineSearch } from "react-icons/ai"

interface ISearchButton {
  onHideSearchForm: () => void
}

const HeaderSearchForm = ({ onHideSearchForm }: ISearchButton) => {
  const handleHeaderSearchSubmit: FormEventHandler<HTMLFormElement> = (
    event
  ) => {}

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <form
        onSubmit={handleHeaderSearchSubmit}
        className={`absolute flex justify-center top-0 h-screen w-screen bg-transparentWhite`}
      >
        <div
          className={`absolute w-10/12 top-[180px] h-[80px] pr-[80px] border-black border-b-[5px] dark:focus:bg-white transition-3 peer`}
        >
          <input
            id="search"
            ref={inputRef}
            placeholder="상품명 또는 브랜드를 검색해주세요"
            className="w-full h-full border-none text-[50px] md:text-[36px] sm:text-[30px] px-[10px] font-bold bg-opacity0 text-black placeholder:text-[30px] md:placeholder:text-[20px] sm:placeholder:text-[16px]"
          />

          <Button
            type="submit"
            classNames="absolute top-[8px] text-[60px] md:text-[50px] sm:text-[40px] right-0 text-black"
            content={<AiOutlineSearch />}
            onClick={onHideSearchForm}
          />
        </div>

        <Button
          onClick={onHideSearchForm}
          classNames="absolute top-[50px] right-[50px] text-black font-bold"
          content="CLOSE"
        />
      </form>
    </>
  )
}

export default HeaderSearchForm
