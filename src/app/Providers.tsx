"use client"
import { ThemeProvider } from "next-themes"
import { Provider as ReduxProvider } from "react-redux"
import React, { useEffect, useState } from "react"
import store from "./redux/store"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ReduxProvider>
  )
}

export default Providers
