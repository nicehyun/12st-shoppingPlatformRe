import { Box, Tab, Tabs } from "@mui/material"

interface ICustomTabs {
  tabs: string[]
  tabsValue: number
  onChangeTabs: (event: React.SyntheticEvent, newValue: number) => void
  id: string
}

const CustomTabs = ({ onChangeTabs, tabs, tabsValue, id }: ICustomTabs) => {
  const renderTab = () => {
    return tabs.map((label, index) => (
      <Tab
        key={`${id}-tab-${index}`}
        label={label}
        id={`${id}-tab-${index}`}
        aria-controls={`${id}-tabpanel-${index}`}
        sx={{
          "&.Mui-selected": {
            color: "#ff4e0a",
          },
          color: "#ccc",
          width: `${100 / tabs.length}%`,
        }}
      />
    ))
  }

  return (
    <Box sx={{ borderColor: "#d2d2d2" }}>
      <Tabs
        value={tabsValue}
        onChange={onChangeTabs}
        aria-label={`${id} tabs`}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#ff4e0a",
          },
        }}
      >
        {renderTab()}
      </Tabs>
    </Box>
  )
}

export default CustomTabs
