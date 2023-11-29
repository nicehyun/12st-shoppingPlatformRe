import { commonAPI } from "@/features/common/models/commonAPI"
import {
  getBestProductList,
  getTopSaleProductList,
  getRandomArrivalProductList,
} from "@/features/common/models/product"
import { NextResponse } from "next/server"

export async function GET() {
  const productList = await commonAPI.getProductList()

  const bestProductList = getBestProductList(productList ?? [])

  const arrivalProductList = getRandomArrivalProductList(productList ?? [])

  const topSaleProductList = getTopSaleProductList(productList ?? [])

  console.log(topSaleProductList)

  const homeIndividualSectionProductList = {
    bestProductList,
    arrivalProductList,
    topSaleProductList,
  }

  return NextResponse.json(homeIndividualSectionProductList)
}
