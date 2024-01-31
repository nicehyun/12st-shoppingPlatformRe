import HomeLayout from "@/features/home/views/HomeLayout"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const HomePage = () => {
  return <HomeLayout />
}

export default HomePage
