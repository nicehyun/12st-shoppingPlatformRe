import "./globals.css"

import { Noto_Sans_KR, Roboto } from "next/font/google"
import Providers from "./Providers"
import ThemeSwitcher from "./ThemeSwitcher"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

// export const notoSansKr = Noto_Sans_KR({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={roboto.className}>
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  )
}
