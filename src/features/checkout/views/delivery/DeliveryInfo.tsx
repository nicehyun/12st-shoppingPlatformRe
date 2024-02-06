"use client"

import { useDeliveryTabs } from "../../hooks/useDeliveryTabs"
import CustomTabs from "@/features/common/views/CustomTabs"
import DeliverySectionHeader from "./DeliverySectionHeader"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import DefalutDeliveryInfo from "./DefalutDeliveryInfo"
import NewDeliveryInfo from "./NewDeliveryInfo"

const DeliveryInfo = () => {
  const { deliveryTabValue, handleDeliveryTabvalueChange, tabs } =
    useDeliveryTabs()

  return (
    <section className="border-t-[2px] border-black dark:border-white">
      <DeliverySectionHeader />

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
    </section>
  )
}

export default DeliveryInfo
