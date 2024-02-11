"use client"

import SectionTitle from "../SectionTitle"

import { useModificationOfUserInfoTabs } from "../../hooks/useModificationOfUserInfoTabs"
import CustomTabs from "@/features/common/views/CustomTabs"
import DeliverInfoModification from "./DeliverInfoModification"
import ClauseModification from "./ClauseModification"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import UserInfo from "./UserInfo"
import MemberTermination from "./MemberTermination"

const ModificationOfUserInfoSection = () => {
  const { handleTabValueChange, tabValue, tabs } =
    useModificationOfUserInfoTabs()

  const modificationOfUserInfoComponents = [
    <UserInfo key="mypage-userInfo-modification__userInfo" />,
    <DeliverInfoModification key="mypage-userInfo-modification__deliveryInfo" />,
    <ClauseModification key="mypage-userInfo-modification__clause" />,
    <MemberTermination key="mypage-userInfo-modification__memberTerminate" />,
  ]

  return (
    <section>
      <SectionTitle title="회원정보 수정" />

      <CustomTabs
        id="cancelList"
        onChangeTabs={handleTabValueChange}
        tabs={tabs}
        tabsValue={tabValue}
      />

      {modificationOfUserInfoComponents.map((modificationEl, index) => (
        <>
          <CustomTabPanel value={tabValue} index={index}>
            {modificationEl}
          </CustomTabPanel>
        </>
      ))}
    </section>
  )
}

export default ModificationOfUserInfoSection
