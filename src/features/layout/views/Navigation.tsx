"use client"

import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"

import { AiOutlineHome, AiFillHome } from "react-icons/ai"
import {
  BiCategory,
  BiSolidCategory,
  BiHeart,
  BiSolidHeart,
  BiUser,
  BiSolidUser,
} from "react-icons/bi"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { removeSlashFromPath } from "@/features/common/models/path"

type NavigationActionContent = {
  icon: {
    selected: JSX.Element
    nonSelected: JSX.Element
  }
  label: string
  value: string
  route: ROUTE
}

type NavigationActionContents = NavigationActionContent[]

const Navigation = () => {
  const { routeTo, pathname } = useNavigations()

  const currentPath = removeSlashFromPath(pathname)

  const navigationActionContents: NavigationActionContents = [
    {
      icon: {
        selected: <AiFillHome className="transform translate-y-[-4px]" />,
        nonSelected: <AiOutlineHome />,
      },
      label: "HOME",
      value: "",
      route: ROUTE.HOME,
    },
    {
      icon: {
        selected: <BiSolidCategory className="transform translate-y-[-4px]" />,
        nonSelected: <BiCategory />,
      },
      label: "CATEGORIES",
      value: "categoryManagement",
      route: ROUTE.CATEGORYMANAGEMENT,
    },
    {
      icon: {
        selected: <BiSolidHeart className="transform translate-y-[-4px]" />,
        nonSelected: <BiHeart />,
      },
      label: "LIKE",
      value: "like",
      route: ROUTE.HEARTPRODUCTLIST,
    },
    {
      icon: {
        selected: <BiSolidUser className="transform translate-y-[-4px]" />,
        nonSelected: <BiUser />,
      },
      label: "MY",
      value: "myPage",
      route: ROUTE.MYPAGE,
    },
  ]

  const renderBottomNavigationActions = () => {
    return navigationActionContents.map(
      (navigationActionContent: NavigationActionContent) => (
        <BottomNavigationAction
          onClick={() => routeTo(navigationActionContent.route)}
          key={`bottomNavigation-${navigationActionContent.value}`}
          label={
            <span
              className={`text-[8px] absolute inset-x-px ${
                currentPath === `${navigationActionContent.value}`
                  ? "bottom-0 opacity-100"
                  : "bottom-0 transform -translate-y-1/2 opacity-0"
              }`}
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              {navigationActionContent.label}
            </span>
          }
          value={navigationActionContent.value}
          icon={
            currentPath === `${navigationActionContent.value}`
              ? navigationActionContent.icon.selected
              : navigationActionContent.icon.nonSelected
          }
          sx={{
            position: "relative",
            "&.Mui-selected": {
              color: "#ff4e0a",
            },
          }}
        />
      )
    )
  }

  return (
    <>
      <BottomNavigation
        className="lg:h-[60px] xl:h-[70px] h-[50px] z-10"
        showLabels
        sx={{
          width: "100%",
          height: 40,
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(240, 240, 240, 0.4)",
          position: "fixed",
          bottom: 0,
        }}
        value={currentPath}
      >
        {renderBottomNavigationActions()}
      </BottomNavigation>
    </>
  )
}

export default Navigation
