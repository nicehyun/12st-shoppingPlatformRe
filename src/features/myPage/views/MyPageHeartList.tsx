import MyPageSectionTitle from "./MyPageSectionTitle"

const MyPageHeartList = () => {
  return (
    <section className="mt-[120px]">
      <MyPageSectionTitle title="HEART" />

      <div className="mt-[40px] pb-[40px] border-b-border border-b-[1px] dark:border-b-lightBlack">
        <ul>
          <li className="w-[140px]">
            <div className="w-full h-[140px] bg-border mb-[20px]"></div>
            <p className="w-full bg-lightRed text-[14px] h-[39.2px]">
              123상품asdsasdasda
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MyPageHeartList
