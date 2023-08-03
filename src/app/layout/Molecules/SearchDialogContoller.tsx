import Button from "@mui/material/Button"

import { FiSearch } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

interface ISearchDialogContoller {
  onClickCloseButton: () => void
}

const SearchDialogContoller = ({
  onClickCloseButton,
}: ISearchDialogContoller) => {
  return (
    <>
      <Button color="inherit">
        <FiSearch />
      </Button>
      <Button color="inherit" onClick={onClickCloseButton}>
        <AiOutlineClose />
      </Button>
    </>
  )
}

export default SearchDialogContoller
