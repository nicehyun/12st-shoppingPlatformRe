import "./globals.css"

import { Roboto } from "next/font/google"
import Providers from "../common/utils/Providers"

import Header from "@/features/layout/views/Header"
import FeedbackModal from "@/common/views/FeedbackModal"

import BasicModal from "@/common/views/BasicModal"
import Footer from "@/features/layout/views/Footer"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={roboto.className}>
      <body className="bg-white text-black dark:text-white dark:bg-black">
        <Providers>
          {children}
          <div id="recaptcha-container"></div>
          <Footer />

          <FeedbackModal />
          {/* <BasicModal /> */}
        </Providers>
      </body>
    </html>
  )
}
