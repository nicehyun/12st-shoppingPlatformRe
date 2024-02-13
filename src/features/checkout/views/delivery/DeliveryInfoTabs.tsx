"use client"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import { useDeliveryTabs } from "../../hooks/useDeliveryTabs"
import CustomTabs from "@/features/common/views/CustomTabs"
import DefalutDeliveryInfo from "./DefalutDeliveryInfo"
import NewDeliveryInfo from "./NewDeliveryInfo"

const DeliveryInfoTabs = () => {
  const { deliveryTabValue, handleDeliveryTabvalueChange, tabs } =
    useDeliveryTabs()
  return (
    <>
      <CustomTabs
        id="delivery"
        onChangeTabs={handleDeliveryTabvalueChange}
        tabs={tabs}
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
