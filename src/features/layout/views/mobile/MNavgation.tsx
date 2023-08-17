"use client"
import { useState } from "react"

import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"

import { AiOutlineHome, AiFillHome } from "react-icons/ai"
import {
  BiCategory,
  BiSolidCategory,
  BiSearch,
  BiSolidSearch,
  BiHeart,
  BiSolidHeart,
  BiUser,
  BiSolidUser,
} from "react-icons/bi"
import CategoryDrawer from "../CategoryDrawer"

const MNavgation = () => {
  const [selectedMenu, setselectedMenu] = useState("home")

  const handleChange = (event: React.SyntheticEvent, selectedValue: string) => {
    setselectedMenu(selectedValue)
  }

  return (
    <>
      <BottomNavigation
        className="xl:hidden"
        showLabels
        sx={{
          width: "100%",
          height: 40,
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(240, 240, 240, 0.4)",
          position: "fixed",
          bottom: 0,
        }}
        value={selectedMenu}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label={
            <span
              className={`text-[4px] absolute inset-x-px ${
                selectedMenu === "home"
                  ? "bottom-0 opacity-100"
                  : "bottom-0 transform -translate-y-1/2 opacity-0"
              }`}
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              HOME
            </span>
          }
          value="home"
          icon={
            selectedMenu === "home" ? (
              <AiFillHome className="transform translate-y-[-4px]" />
            ) : (
              <AiOutlineHome />
            )
          }
          sx={{
            position: "relative",
            "&.Mui-selected": {
              color: "#ff4e0a",
            },
          }}
        />
        <BottomNavigationAction
          label={
            <span
              className={`text-[8px] absolute inset-x-px ${
                selectedMenu === "categories"
                  ? "bottom-0 opacity-100"
                  : "bottom-0 transform -translate-y-1/2 opacity-0"
              }`}
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              CATEGORIES
            </span>
          }
          value="categories"
          icon={
            selectedMenu === "categories" ? (
              <BiSolidCategory className="transform translate-y-[-4px]" />
            ) : (
              <BiCategory />
            )
          }
          sx={{
            position: "relative",
            "&.Mui-selected": {
              color: "#ff4e0a",
            },
          }}
        />

        <BottomNavigationAction
          label={
            <span
              className={`text-[8px] absolute inset-x-px ${
                selectedMenu === "like"
                  ? "bottom-0 opacity-100"
                  : "bottom-0 transform -translate-y-1/2 opacity-0"
              }`}
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              LIKE
            </span>
          }
          value="like"
          icon={
            selectedMenu === "like" ? (
              <BiSolidHeart className="transform translate-y-[-4px]" />
            ) : (
              <BiHeart />
            )
          }
          sx={{
            position: "relative",
            "&.Mui-selected": {
              color: "#ff4e0a",
            },
          }}
        />
        <BottomNavigationAction
          label={
            <span
              className={`text-[8px] absolute inset-x-px ${
                selectedMenu === "my"
                  ? "bottom-0 opacity-100"
                  : "bottom-0 transform -translate-y-1/2 opacity-0"
              }`}
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              MY
            </span>
          }
          value="my"
          icon={
            selectedMenu === "my" ? (
              <BiSolidUser className="transform translate-y-[-4px]" />
            ) : (
              <BiUser />
            )
          }
          sx={{
            position: "relative",
            "&.Mui-selected": {
              color: "#ff4e0a",
            },
          }}
        />
      </BottomNavigation>

      <CategoryDrawer />
    </>
  )
}

export default MNavgation
