import { ROUTE } from "@/features/common/hooks/useNavigations"
import MyPageCategoryEl from "./MyPageCategoryEl"

const MyPageCategory = () => {
  const myPageCategoryList = [
    {
      id: "shopping-information",
      categoryTitle: "쇼핑정보",
      categoryList: {
        categoryListContents: ["주문내역", "취소/교환/반품 내역", "상품리뷰"],
        categoryListRoutes: [
          ROUTE.CHECKOUTLIST,
          ROUTE.CHECKOUTCANCELLIST,
          ROUTE.CHECKOUTREVIEWLIST,
        ],
      },
    },
    {
      id: "account-setting",
      categoryTitle: "계정설정",
      categoryList: {
        categoryListContents: ["회원정보수정", "쿠폰", "마일리지"],
        categoryListRoutes: [
          ROUTE.USERINFOOFMODIFICATION,
          ROUTE.COUPONS,
          ROUTE.Mile,
        ],
      },
    },

    {
      id: "customer-services",
      categoryTitle: "고객센터",
      categoryList: {
        categoryListContents: ["1:1 문의내역", "상품 Q&A내역"],
        categoryListRoutes: [ROUTE.INQUIRYCUSTOMERCOUNSELING, ROUTE.PRODUCTQNA],
      },
    },
  ]

  return (
    <section className="mt-[40px]">
      {myPageCategoryList.map((myPageCategoryLi, index) => (
        <MyPageCategoryEl
          id={myPageCategoryLi.id}
          key={myPageCategoryLi.id}
          categoryTitle={myPageCategoryLi.categoryTitle}
          categoryList={myPageCategoryLi.categoryList}
          className={index !== 0 ? "mt-[60px]" : ""}
        />
      ))}
    </section>
  )
}

export default MyPageCategory
