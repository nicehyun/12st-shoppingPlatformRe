"use client"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import CustomTabs from "@/features/common/views/CustomTabs"
import NewDeliveryInfo from "./NewDeliveryInfo"
import DefalutDeliveryInfo from "./DefalutDeliveryInfo"
import { useEffect } from "react"
import { useGetDeliveryInfoQuery } from "@/features/common/hooks/useGetDeliveryInfoQuery"
import { useAppSelector } from "@/redux/hooks"
import {
  deliveryTabValueChange,
  selectDeliveryTabValueState,
} from "@/redux/features/checkoutSlice"
import { useDispatch } from "react-redux"

const DeliveryInfoTabs = () => {
  const dispatch = useDispatch()
  const { deliveryInfo } = useGetDeliveryInfoQuery()
  const deliveryTabValue = useAppSelector(selectDeliveryTabValueState)

  const handleDeliveryTabvalueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    dispatch(deliveryTabValueChange(newValue))
  }

  useEffect(() => {
    if (deliveryInfo) {
      dispatch(deliveryTabValueChange(0))
    }
  }, [deliveryInfo])

  return (
    <>
      <CustomTabs
        id="delivery"
        onChangeTabs={handleDeliveryTabvalueChange}
        tabs={["기존 배송지", "신규 입력"]}
        tabsValue={deliveryTabValue}
      />

      <CustomTabPanel value={deliveryTabValue} index={0}>
        <DefalutDeliveryInfo />
      </CustomTabPanel>
      <CustomTabPanel value={deliveryTabValue} index={1}>
        <NewDeliveryInfo />
      </CustomTabPanel>
    </>
  )
}

export default DeliveryInfoTabs
