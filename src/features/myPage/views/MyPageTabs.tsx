import { Box, Tab, Tabs } from "@mui/material"
import { SyntheticEvent } from "react"

type Tabs = {
  id: string
  label: string
}

interface IMyPageTabs {
  tabId: string
  tabs: Tabs[]
  tabValue: number
  onChangeTabValue: (
    event: SyntheticEvent<Element, Event>,
    clickedTapValue: number
  ) => void
}

const MyPageTabs = ({
  tabId,
  tabs,
  onChangeTabValue,
  tabValue,
}: IMyPageTabs) => {
  const renderTab = () => {
    return tabs.map((tab) => (
      <Tab
        key={`tab-${tabId}-${tab.id}`}
        label={tab.label}
        id={`tab-${tabId}-${tab.id}`}
        aria-controls={`${tabId}-tabpanel-${tab.id}`}
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
        value={tabValue}
        onChange={onChangeTabValue}
        aria-label="myPage-useMileAndGetMileInfo-teps"
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

export default MyPageTabs
