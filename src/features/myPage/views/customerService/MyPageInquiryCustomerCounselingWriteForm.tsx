"use client"

import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"
import MyPageCustomerCounselingWriteContentList from "./MyPageCustomerCounselingWriteContentList"
import Button from "@/common/views/Button"
import MyPageProductSearch from "./MyPageProductSearch"
import MyPageCheckoutSearch from "./MyPageCheckoutSearch"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { resetCsType, selectSelectedCsType } from "@/redux/features/myPageSlice"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import MyPageCutsomerCounselingWriteUserInfoList from "./MyPageCustomerCounselingWriteUserInfoList"
import { useEffect, useRef } from "react"
import { showFeedbackModal } from "@/redux/features/modalSlice"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const radioListRef = useRef<HTMLLIElement | null>(null)
  const searchProductInfoRef = useRef<HTMLLIElement | null>(null)
  const searchCheckoutInfoRef = useRef<HTMLLIElement | null>(null)
  const writeRef = useRef<HTMLLIElement | null>(null)

  const { sessionQuery } = useSessionQuery()
  const selectedCsType = useAppSelector(selectSelectedCsType)
  const dispatch = useAppDispatch()

  const checkoutRelationRadioValueList = [
    "delivery",
    "checkout",
    "cancel",
    "return",
    "change",
    "refund",
    "deposit",
  ]

  //TODO : 서버에 저장

  const handleCustomerCounselingWriteSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const checkoutRelationCsValidList = [
      !!formData.get("coustomweCounselingWrite-checkoutInfo__checkoutNumber"),
      !!formData.get(
        "coustomweCounselingWrite-checkoutInfo__checkoutProductName"
      ),
      !!formData.get("coustomweCounselingWrite-checkoutInfo__checkoutDate"),
      !!formData.get("coustomweCounselingWrite-checkoutInfo__checkoutPayment"),
    ]

    const productRelationCsValidList = [
      !!formData.get(
        "coustomweCounselingWrite-productInfo__checkoutProductName"
      ),
      !!formData.get("coustomweCounselingWrite-productInfo__checkoutDate"),
    ]

    const commonValidList = [
      !!formData.get("coustomweCounselingWrite-content__title"),
      !!formData.get("coustomweCounselingWrite-content__content"),
    ]

    if (!selectedCsType) {
      dispatch(showFeedbackModal({ modalContent: "문의 유형을 선택해주세요" }))
      if (radioListRef.current) {
        radioListRef.current.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    if (checkoutRelationRadioValueList.includes(selectedCsType as string)) {
      if (
        !checkoutRelationCsValidList.every(
          (checkoutRelationCsValidEl) => checkoutRelationCsValidEl
        )
      ) {
        dispatch(showFeedbackModal({ modalContent: "주문번호를 조회해주세요" }))
        if (searchCheckoutInfoRef.current) {
          searchCheckoutInfoRef.current.scrollIntoView({ behavior: "smooth" })
        }
        return
      }
    }

    if (selectedCsType === "product") {
      if (
        !productRelationCsValidList.every(
          (productRelationCsValidEl) => productRelationCsValidEl
        )
      ) {
        dispatch(showFeedbackModal({ modalContent: "상품번호를 조회해주세요" }))

        if (searchProductInfoRef.current) {
          searchProductInfoRef.current.scrollIntoView({ behavior: "smooth" })
        }
        return
      }
    }

    if (!commonValidList.every((commonValidEl) => commonValidEl)) {
      dispatch(
        showFeedbackModal({ modalContent: "문의 제목과 내용을 작성해주세요" })
      )

      if (writeRef.current) {
        writeRef.current.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    console.log("sucessfully")
  }

  useEffect(() => {
    return () => {
      dispatch(resetCsType())
    }
  }, [])

  return (
    <form
      onSubmit={handleCustomerCounselingWriteSubmit}
      className="mt-[50px] border-t-[1px] w-full"
    >
      <ul>
        <li ref={radioListRef}>
          <MyPageCheckoutRelationRadioList />
        </li>

        <MyPageGeneralRelationRadioList className="border-border border-t-[1px]" />
        <MyPageETCRelationRadioList className="border-border border-t-[1px]" />

        {checkoutRelationRadioValueList.includes(selectedCsType as string) && (
          <li ref={searchCheckoutInfoRef}>
            <MyPageCheckoutSearch />
          </li>
        )}
        {selectedCsType === "product" && (
          <li ref={searchProductInfoRef}>
            <MyPageProductSearch />
          </li>
        )}

        <MyPageCutsomerCounselingWriteUserInfoList />

        <li ref={writeRef}>
          <MyPageCustomerCounselingWriteContentList />
        </li>
      </ul>

      <div className="text-center">
        <Button
          type="submit"
          content="등록하기"
          classNames="tracking-[5px] py-[10px] px-[40px] mt-[50px] sm:text-[14px] md:text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px] tr"
        />
      </div>
    </form>
  )
}

export default MyPageInquiryCustomerCounselingWriteForm
