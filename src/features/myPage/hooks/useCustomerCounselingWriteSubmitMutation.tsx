import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CustomerCounselingDetail } from "../types/myPage"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { selectSelectedCsType } from "@/redux/features/myPageSlice"
import { useAppSelector } from "@/redux/hooks"
import { parseDateTimeToISOString } from "../utils/date"
import { parseLocaleStringToNumber } from "@/features/common/utils/price"
import { formatCheckoutPayment } from "../utils/payment"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useCustomerCounselingWriteSubmitMutation = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const selectedCsType = useAppSelector(selectSelectedCsType)
  const { routeTo } = useNavigations()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    ({ writeDetail }: { writeDetail: CustomerCounselingDetail }) =>
      myPageAPI.writeCoustomerCounseling(
        session?.user.accessToken,
        writeDetail
      ),
    {
      onSuccess(data) {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("1:1 문의 등록이 완료되었습니다")
          queryClient.invalidateQueries(["customerCounselingList"])
          routeTo(ROUTE.INQUIRYCUSTOMERCOUNSELING)
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "문의 등록을 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const checkoutRelationRadioValueList = [
    "delivery",
    "checkout",
    "cancel",
    "return",
    "change",
    "refund",
    "deposit",
  ]

  const customerCounselingWriteSubmitMutateAsync = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isLoading) return

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
      showFeedbackModalWithContent("문의 유형을 선택해주세요")

      return
    }

    if (checkoutRelationRadioValueList.includes(selectedCsType as string)) {
      if (
        !checkoutRelationCsValidList.every(
          (checkoutRelationCsValidEl) => checkoutRelationCsValidEl
        )
      ) {
        showFeedbackModalWithContent("주문번호를 조회해주세요")

        return
      }
    }

    if (selectedCsType === "product") {
      if (
        !productRelationCsValidList.every(
          (productRelationCsValidEl) => productRelationCsValidEl
        )
      ) {
        showFeedbackModalWithContent("상품번호를 조회해주세요")

        return
      }
    }

    if (!commonValidList.every((commonValidEl) => commonValidEl)) {
      showFeedbackModalWithContent("문의 제목과 내용을 작성해주세요")

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

    mutateAsync({ writeDetail })
  }

  return {
    isLoading,
    customerCounselingWriteSubmitMutateAsync,
    checkoutRelationRadioValueList,
  }
}
