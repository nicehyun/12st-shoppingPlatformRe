import { Box } from "@mui/material"
import { ReactNode } from "react"

interface ITabPanel {
  children: ReactNode
  value: number
  index: number
}

const TabPanel = ({ children, index, value }: ITabPanel) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}
export default TabPanel
