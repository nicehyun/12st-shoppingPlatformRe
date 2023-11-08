"use client"

import MyPageUserInfo from "./MyPageUserInfo"
import MyPageDefaultDeliverInfoModification from "./MyPageDefaultDeliverInfoModification"
import MyPageClauseModification from "./MyPageClauseModification"
import MyPageMemberTermination from "./MyPageMemberTermination"

interface IMyPageUserInfoTebPanel {
  userInfoType:
    | "userInfo"
    | "userInfo__defaultAddressModificate"
    | "userInfo__marketingClauseModificate"
    | "memberTerminate"
}

const MyPageUserInfoTebPanel = ({ userInfoType }: IMyPageUserInfoTebPanel) => {
  return (
    <div>
      {userInfoType === "userInfo" && <MyPageUserInfo />}
      {userInfoType === "userInfo__defaultAddressModificate" && (
        <MyPageDefaultDeliverInfoModification />
      )}
      {userInfoType === "userInfo__marketingClauseModificate" && (
        <MyPageClauseModification />
      )}

      {userInfoType === "memberTerminate" && <MyPageMemberTermination />}
    </div>
  )
}

export default MyPageUserInfoTebPanel
