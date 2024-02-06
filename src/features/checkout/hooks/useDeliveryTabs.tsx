import { useEffect } from "react"
import { useGetDeliveryInfoQuery } from "../../common/hooks/useGetDeliveryInfoQuery"
import { useDispatch } from "react-redux"
import {
  deliveryTabValueChange,
  selectDeliveryTabValueState,
} from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"

export const useDeliveryTabs = () => {
  const dispatch = useDispatch()
  const { deliveryInfo } = useGetDeliveryInfoQuery()
  const deliveryTabValueState = useAppSelector(selectDeliveryTabValueState)

  const tabs = ["기존 배송지", "신규 입력"]

  useEffect(() => {
    if (deliveryInfo) {
      dispatch(deliveryTabValueChange(0))
    }
  }, [deliveryInfo])

  const handleDeliveryTabvalueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    dispatch(deliveryTabValueChange(newValue))
  }

  return {
    tabs,
    deliveryTabValue: deliveryTabValueState,
    handleDeliveryTabvalueChange,
  }
}
