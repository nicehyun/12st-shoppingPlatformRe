import { commonAPI } from "@/features/common/models/commonAPI"
import {
  getBestProductList,
  getRandomArrivalProductList,
  getTopSaleProductList,
} from "@/features/common/models/product"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const productList = await commonAPI.getProductList()

    const bestProductList = getBestProductList(productList ?? [])
    const arrivalProductList = getRandomArrivalProductList(productList ?? [])
    const topSaleProductList = getTopSaleProductList(productList ?? [])

    const homeIndividualSectionProductList = {
      bestProductList,
      arrivalProductList,
      topSaleProductList,
    }

    return NextResponse.json(homeIndividualSectionProductList)
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
    }
    console.error(`🚨 JSON SERVER GET API : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
