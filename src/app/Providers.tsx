"use client"
import { ThemeProvider } from "next-themes"
import { Provider as ReduxProvider } from "react-redux"
import React, { useEffect, useState } from "react"
import store from "./redux/store"

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  const [mounted, setMounted] = useState(false)

  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <ReactQueryStreamedHydration> */}
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <ThemeProvider attribute="class">{children}</ThemeProvider>
      {/* </Hydrate> */}
      {/* </ReactQueryStreamedHydration> */}
    </QueryClientProvider>
  )
}

export default Providers
