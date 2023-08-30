"use client"

import { SessionProvider } from "next-auth/react"

interface ISessionProvider {
  children: React.ReactNode
}

const Sessionprovider = ({ children }: ISessionProvider) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Sessionprovider
