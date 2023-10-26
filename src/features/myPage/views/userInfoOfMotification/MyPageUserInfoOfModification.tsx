import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageClauseModification from "./MyPageClauseModification"
import MyPageDefaultAddressModification from "./MyPageDefaultAddressModification"
import MyPageEmailModification from "./MyPageEmailModification"
import MyPageMemberTermination from "./MyPageMemberTermination"
import MyPageUserInfoModification from "./MyPageUserInfoModification"
import MyPageUserInfoOfModificationEl from "./MyPageUserInfoOfModificationEl"

const MyPageUserInfoOfModification = () => {
  const myPageUserModificationList = [
    {
      id: "usesrInfo",
      title: "회원정보",
      modificationContent: <MyPageUserInfoModification />,
      className: "border-b-[1px]",
    },
    {
      id: "email",
      title: "이메일",
      modificationContent: <MyPageEmailModification />,
      className: "border-b-[1px] relative",
    },
    {
      id: "defaultAddress",
      title: "주소정보",
      modificationContent: <MyPageDefaultAddressModification />,
      className: "border-b-[4px]",
    },
    {
      id: "clause",
      title: "약관동의",
      modificationContent: <MyPageClauseModification />,
      className: "border-b-[4px]",
    },
    {
      id: "memberTermination",
      title: "",
      modificationContent: <MyPageMemberTermination />,
      className: "text-[14px]",
    },
  ]
  return (
    <section>
      <MyPageSectionTitle title="회원정보 수정" />
      <ul>
        {myPageUserModificationList.map((modificationEl) => (
          <MyPageUserInfoOfModificationEl
            key={`modification__${modificationEl.id}`}
            title={modificationEl.title}
            modificationContent={modificationEl.modificationContent}
            className={modificationEl.className}
          />
        ))}
      </ul>
    </section>
  )
}

export default MyPageUserInfoOfModification
