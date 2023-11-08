"use client"

import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageUserInfoTebPanel from "./MyPageUserInfoTebPanel"
import { useTabValueHandler } from "@/features/checkout/hooks/useTabValueHandler"
import { Box } from "@mui/material"
import MyPageTabs from "../MyPageTabs"

const MyPageUserInfoOfModification = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabList = [
    { id: "userInfo", label: "회원정보" },
    { id: "defaultAddressModificate", label: "기본배송지 수정" },
    { id: "marketingClauseModificate", label: "약관동의" },
    { id: "memberTerminate", label: "회원탈퇴" },
  ]
  return (
    <section>
      <MyPageSectionTitle title="회원정보 수정" />

      <Box sx={{ width: "100%" }}>
        <MyPageTabs
          onChangeTabValue={handleTabValueChange}
          tabs={tabList}
          tabId="userInfoModificate"
          tabValue={tabValue}
        />

        {tabValue === 0 && <MyPageUserInfoTebPanel userInfoType="userInfo" />}
        {tabValue === 1 && (
          <MyPageUserInfoTebPanel userInfoType="userInfo__defaultAddressModificate" />
        )}
        {tabValue === 2 && (
          <MyPageUserInfoTebPanel userInfoType="userInfo__marketingClauseModificate" />
        )}
        {tabValue === 3 && (
          <MyPageUserInfoTebPanel userInfoType="memberTerminate" />
        )}
      </Box>
    </section>
  )
}

export default MyPageUserInfoOfModification
