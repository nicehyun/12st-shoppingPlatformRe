"use client"

import SectionTitle from "../SectionTitle"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import CancelList from "./CancelList"
import ReturnList from "./ReturnList"
import AllCancelList from "./AllCancelList"
import ChangeList from "./ChangeList"
import CustomTabs from "@/features/common/views/CustomTabs"
import { Fragment } from "react"
import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

const CancelListSection = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()
  const tabs = ["All", "취소", "반품", "교환"]

  const cancelListComponents = [
    <AllCancelList key="mypage-cancelList__all" />,
    <CancelList key="mypage-cancelList__cancel" />,
    <ReturnList key="mypage-cancelList__return" />,
    <ChangeList key="mypage-cancelList__change" />,
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
        <Fragment key={cancelEl.key}>
          <CustomTabPanel value={tabValue} index={index}>
            {cancelEl}
          </CustomTabPanel>
        </Fragment>
      ))}
    </section>
  )
}

export default CancelListSection
