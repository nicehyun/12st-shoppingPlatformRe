"use client"

import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"
import MyPageCustomerCounselingWriteContentList from "./MyPageCustomerCounselingWriteContentList"
import Button from "@/features/common/views/Button"
import MyPageProductSearch from "./MyPageProductSearch"
import MyPageCheckoutSearch from "./MyPageCheckoutSearch"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { resetCsType, selectSelectedCsType } from "@/redux/features/myPageSlice"
import MyPageCutsomerCounselingWriteUserInfoList from "./MyPageCustomerCounselingWriteUserInfoList"
import { useEffect, useRef } from "react"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { formatCheckoutPayment } from "../../utils/payment"
import { useCustomerCounselingWriteSubmitMutation } from "../../hooks/useCustomerCounselingWriteSubmitMutation"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Loading from "@/features/common/views/Loading"
import { parseLocaleStringToNumber } from "@/features/common/utils/price"
import { parseDateTimeToISOString } from "../../utils/date"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const { routeTo } = useNavigations()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const {
    customerCounselingWriteSubmitMutateAsync,
    isCustomerCounselingWriteLoading,
  } = useCustomerCounselingWriteSubmitMutation()
  const radioListRef = useRef<HTMLLIElement | null>(null)
  const searchProductInfoRef = useRef<HTMLLIElement | null>(null)
  const searchCheckoutInfoRef = useRef<HTMLLIElement | null>(null)
  const writeRef = useRef<HTMLLIElement | null>(null)

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

  const handleCustomerCounselingWriteSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isCustomerCounselingWriteLoading) return

    const formData = new FormData(event.currentTarget)

    const checkoutNumber = formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutNumber"
    ) as string
    const checkoutProductName = formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutProductName"
    ) as string
    const checkoutDate = formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutDate"
    ) as string
    const checkoutPayment = formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutPayment"
    ) as string
    const productName = formData.get(
      "coustomweCounselingWrite-productInfo__productName"
    ) as string
    const productPrice = formData.get(
      "coustomweCounselingWrite-productInfo__price"
    ) as string
    const counselingTitle = formData.get(
      "coustomweCounselingWrite-content__title"
    ) as string
    const counselingContent = formData.get(
      "coustomweCounselingWrite-content__content"
    ) as string

    const checkoutRelationCsValidList = [
      !!checkoutNumber,
      !!checkoutProductName,
      !!checkoutDate,
      !!checkoutPayment,
    ]

    const productRelationCsValidList = [!!productName, !!productPrice]
    const commonValidList = [!!counselingTitle, !!counselingContent]

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

    const writeDetail = {
      csType: selectedCsType,
      counselingContent,
      counselingTitle,
      checkoutProductName,
      checkoutDate: checkoutPayment
        ? parseDateTimeToISOString(checkoutDate) ?? ""
        : "",
      productName,
      productPrice: parseLocaleStringToNumber(productPrice),
      checkoutNumber,
      checkoutPayment: checkoutPayment
        ? formatCheckoutPayment(checkoutPayment)
        : {
            selectedPayment: "",
            creditName: "",
            period: "",
          },
    }

    const response = await customerCounselingWriteSubmitMutateAsync({
      writeDetail,
    })

    if (response?.status === 200) {
      routeTo(ROUTE.INQUIRYCUSTOMERCOUNSELING)
      showFeedbackModalWithContent("문의 등록이 완료되었습니다")
    }
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
          isDisabled={isCustomerCounselingWriteLoading}
          content={
            isCustomerCounselingWriteLoading ? (
              <Loading
                spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
                isFrame={false}
              />
            ) : (
              "등록하기"
            )
          }
          classNames="tracking-[5px] h-[50px] w-[140px] mt-[50px] sm:text-[14px] md:text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px] tr"
        />
      </div>
    </form>
  )
}

export default MyPageInquiryCustomerCounselingWriteForm
