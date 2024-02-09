"use client"

import SectionTitle from "../SectionTitle"
import { useCancelListTabs } from "../../hooks/useCancelListTabs"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import CancelList from "./CancelList"
import ReturnList from "./ReturnList"
import AllCancelList from "./AllCancelList"
import ChangeList from "./ChangeList"
import CustomTabs from "@/features/common/views/CustomTabs"

const CancelListSection = () => {
  const { handleTabValueChange, tabValue, tabs } = useCancelListTabs()

  const cancelListComponents = [
    <AllCancelList key="mypae_cancelList_all" />,
    <CancelList key="mypae_cancelList_cancel" />,
    <ReturnList key="mypae_cancelList_return" />,
    <ChangeList key="mypae_cancelList_change" />,
  ]

  return (
    <section>
      <SectionTitle title="취소/반품/교환 내역" />

      <CustomTabs
        id="cancelList"
        onChangeTabs={handleTabValueChange}
        tabs={tabs}
        tabsValue={tabValue}
      />

      {cancelListComponents.map((cancelEl, index) => (
        <>
          <CustomTabPanel value={tabValue} index={index}>
            {cancelEl}
          </CustomTabPanel>
        </>
      ))}
    </section>
  )
}

export default CancelListSection
