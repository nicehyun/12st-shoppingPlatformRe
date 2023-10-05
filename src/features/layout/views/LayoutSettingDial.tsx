"use client"

import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"

import SpeedDialAction from "@mui/material/SpeedDialAction"

import { AiFillSetting } from "react-icons/ai"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import ThemeSwitcher from "./ThemeSwitcher"

const LayoutSettingDial = () => {
  const [mounted, setMounted] = useState(false)
  // const { theme, setTheme } = useTheme()
  const [gender, setGender] = useState("all")
  // console.log(theme)

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark")
  //   }

  //   if (theme === "dark") {
  //     setTheme("light")
  //   }

  //   return
  // }

  const chageGender = () => {
    if (gender === "all") {
      setGender("male")
    }

    if (gender === "male") {
      setGender("female")
    }

    if (gender === "female") {
      setGender("all")
    }

    return
  }

  const actions = [
    {
      icon: <ThemeSwitcher />,
      name: "LightMode / DarkMode",
    },

    {
      icon:
        gender === "all" ? (
          <span className="text-[12px]">전체</span>
        ) : gender === "male" ? (
          <span className="text-[12px]">남성</span>
        ) : (
          <span className="text-[12px]">여성</span>
        ),
      name: "전체 / 남성 / 여성",
      // action: chageGender,
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
