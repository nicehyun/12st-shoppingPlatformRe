"use client"

import SectionTitle from "../SectionTitle"
import CustomTabs from "@/features/common/views/CustomTabs"
import DeliverInfoModification from "./DeliverInfoModification"
import ClauseModification from "./ClauseModification"
import CustomTabPanel from "@/features/common/views/CustomTabPanel"
import UserInfo from "./UserInfo"
import MemberTermination from "./MemberTermination"
import { Fragment } from "react"
import { useTabValueHandler } from "@/features/common/hooks/useTabValueHandler"

const ModificationOfUserInfoSection = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["회원정보", "기본배송지 수정", "약관동의", "회원탈퇴"]

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
        <Fragment key={modificationEl.key}>
          <CustomTabPanel value={tabValue} index={index}>
            {modificationEl}
          </CustomTabPanel>
        </Fragment>
      ))}
    </section>
  )
}

export default ModificationOfUserInfoSection
