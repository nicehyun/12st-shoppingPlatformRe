import { Products } from "@/features/common/types/product"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  console.log(params.categories)
  const [, firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    params.categories

  const firstCategory = getAfterEquals(firstCategoryPath)
  const secondCategory = parseSliceToAnd(getAfterEquals(secondCategoryPath))
  const thirdCategory = parseSliceToAnd(getAfterEquals(thirdCategoryPath))

  try {
    if (secondCategory && !thirdCategory) {
      const response: Products = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&_sort=sellCount&_order=desc&_limit=100`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => res.json())

      return NextResponse.json(response, {
        status: 200,
      })
    }

    if (secondCategory && thirdCategory) {
      const response: Products = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&category3=${thirdCategory}&_sort=sellCount&_order=desc&_limit=100`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => res.json())

      return NextResponse.json(response, {
        status: 200,
      })
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
