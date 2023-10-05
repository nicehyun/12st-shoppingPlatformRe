import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"

import SpeedDialAction from "@mui/material/SpeedDialAction"

import { AiFillSetting } from "react-icons/ai"
import GenderSwicher from "./GenderSwicher"

import ThemeSwitcher from "./ThemeSwitcher"

const LayoutSettingDial = () => {
  const actions = [
    {
      icon: <ThemeSwitcher />,
      name: "LightMode / DarkMode",
    },
    {
      icon: <GenderSwicher />,
      name: "전체 / 남성 / 여성",
    },
  ]

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        right: 16,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={
          <span className=" text-[20px]">
            <AiFillSetting />
          </span>
        }
        sx={{
          "& .MuiFab-primary": {
            width: 50,
            height: 50,
            color: "#ff4e0a",
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#ff4e0a", color: "#fff" },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              "&.MuiSpeedDialAction-fab": {
                color: "#fff",
                backgroundColor: "#070707",
                width: "3rem",
                height: "3rem",
                fontSize: "16px",
              },
            }}
            className="dark:bg-white dark:text-black"
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default LayoutSettingDial
