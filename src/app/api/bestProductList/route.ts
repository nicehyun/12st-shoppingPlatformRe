import { commonAPI } from "@/features/common/models/commonAPI"
import { getBestProductList } from "@/features/common/models/product"
import { NextResponse } from "next/server"

export async function GET() {
  // const productList = await commonAPI.getProductList()
  // const bestProductList = getBestProductList(productList ?? [])
  console.log("test")

  return NextResponse.json([])
}
