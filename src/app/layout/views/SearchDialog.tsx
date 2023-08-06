import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { forwardRef } from "react"
import { FiSearch } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

interface ISearchDialog {
  isShow: boolean
  onHide: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SearchDialog = ({ isShow, onHide }: ISearchDialog) => {
  return (
    <Dialog
      fullScreen
      open={isShow}
      onClose={onHide}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Button autoFocus color="inherit" onClick={onHide}>
            <FiSearch />
          </Button>

          <Button autoFocus color="inherit" onClick={onHide}>
            <AiOutlineClose />
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
    </Dialog>
  )
}

export default SearchDialog
