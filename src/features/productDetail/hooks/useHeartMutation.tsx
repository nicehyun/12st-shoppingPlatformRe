import { Product, Products } from "@/features/common/types/product"
import { useAddHeartListMutation } from "./useAddHeartListMutation"
import { useRemoveHeartListMutation } from "./useRemoveHeartListMutation"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export const useHeartMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const [isExsited, setIsExsited] = useState(false)
  const { addHeartListMutateAsync, isAddHeartListLoading } =
    useAddHeartListMutation(productInfo)

  const { removeHeartListMutateAsync, isRemoveHeartListLoading } =
    useRemoveHeartListMutation(productInfo)

  const prevHeartProductList: Products =
    queryClient.getQueryData(["heartList"]) ?? []

  const handleheartMutateAsync = isExsited
    ? removeHeartListMutateAsync
    : addHeartListMutateAsync

  const isLoading = isAddHeartListLoading || isRemoveHeartListLoading

  useEffect(() => {
    if (prevHeartProductList.length > 0) {
      const isExsitedHeartProduct = prevHeartProductList.find(
        (prevProduct) => prevProduct.id === productInfo.id
      )

      if (isExsitedHeartProduct) {
        setIsExsited(true)
      } else {
        setIsExsited(false)
      }
    } else {
      setIsExsited(false)
    }
  }, [prevHeartProductList])

  return {
    isExsitedHeartProduct: isExsited,
    heartMutateAsync: handleheartMutateAsync,
    isLoading,
  }
}
