import HomeLayout from "@/features/home/views/HomeLayout"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "쇼핑 플랫폼 12ST",
}

export default function Home() {
  return <HomeLayout />
}
