import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const ThemeSwich = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    }

    if (theme === "dark") {
      setTheme("light")
    }

    return
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <span className="absolute inline-block bottom-[10px] right-[26px] w-[60px] h-[30px] bg-border rounded-full">
      <button
        onClick={toggleTheme}
        className={`flexCenter w-[22px] h-[22px] text-[10px] border-[1px] bg-white border-lightBlack text-lightBlack p-[2px] rounded-full transform -translate-y-1/2 absolute top-1/2 transition-3 ${
          theme === "light" ? "translate-x-[5px]" : "translate-x-[34px]"
        } `}
      >
        {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </span>
  )
}

export default ThemeSwich
