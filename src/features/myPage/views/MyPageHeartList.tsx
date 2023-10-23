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
              123상품asdsasdasdasdasjfkldsadjfk;ljsd;kljd123123123123ㅑ12ㅑ30981290381902839018290123
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MyPageHeartList
