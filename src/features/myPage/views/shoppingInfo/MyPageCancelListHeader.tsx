import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"

const MyPageCancelListHeader = () => {
  const cancelHeaderList = [
    { title: "CS구분", id: "CSType", width: "w-1/12" },
    { title: "주문번호", id: "checkoutNumber", width: "w-1/3" },
    { title: "제목", id: "content", width: "w-1/3" },
    { title: "접수", id: "submisstionDate", width: "w-1/12" },
    { title: "진행", id: "phase", width: "w-1/12" },
    { title: "완료", id: "completeDate", width: "w-1/12" },
  ]
  return (
    <MyPageListHeaderLayout isTopBorder={false}>
      {cancelHeaderList.map((headerEl, index) => (
        <MyPageTableHeaderEl
          key={`table-header__${headerEl.id}`}
          headerContent={headerEl.title}
          isStart={index === 0}
          isEnd={index === 5 || index === 4 || index === 3}
          className={headerEl.width}
        />
      ))}
    </MyPageListHeaderLayout>
  )
}

export default MyPageCancelListHeader
