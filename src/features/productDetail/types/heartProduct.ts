import { Products } from "@/features/common/types/product"

export type GetHeartListResponse = {
  id: number
  email: string
  heartList: Products
}
