"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import CheckoutSection from "../CheckoutSection"
import { useCheckoutClause } from "../../hooks/useCheckoutClause"

const CheckoutClauseSection = () => {
  const {
    isAllClauseCheck,
    isCheckedUserInfoClause,
    isCheckedPaymentAgencyClause,
    isCheckedProvisionOfUserInfoClause,
    toggleAllCheckedClause,
    togglePaymentAgencyClause,
    toggleProvisionOfUserInfoClause,
    toggleUserInfoClause,
  } = useCheckoutClause()

  const dispatch = useAppDispatch()

  const handleColletionOfUserInfoClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-collectionOfUserInfo",
        modalTitle: "개인정보 수집 및 이용 동의",
        modalContent: "CollectionOfUserInfoClause",
      })
    )
  }

  const handleProvisionOfUserInfoClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-ProvisionOfUserInfo",
        modalTitle: "개인정보 제3자 제공",
        modalContent: "ProvisionOfUserInfoClause",
      })
    )
  }

  const handlePaymentAgencyClauseClick = (href: string) => {
    window.open(href)
  }

  return (
    <CheckoutSection>
      <div className="flex justify-between font-bold border-border">
        <ClauseCheckbox
          clauseType="all"
          label="주문 내용을 확인했으며, 아래 내용에 모두 동의합니다."
          isClause={false}
          classNames="border-b-[1px] border-lightBlack text-[16px]"
          isChecked={isAllClauseCheck}
          peer="peer/checkout-all"
          peerChecked={{
            borderColor: "peer-checked/checkout-all:after:border-lightRed",
          }}
          onClickClauseLabel={toggleAllCheckedClause}
        />
      </div>

      <ClauseCheckbox
        clauseType="collectionOfUserInfo"
        label="개인정보 수집/이용 동의"
        isClause={true}
        isChecked={isCheckedUserInfoClause}
        isRequired={true}
        peer="peer/checkout-collectionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-collectionOfUserInfo:after:border-lightRed",
        }}
        onClickClauseLabel={toggleUserInfoClause}
        onClickDetailClause={handleColletionOfUserInfoClauseClick}
      />

      <ClauseCheckbox
        clauseType="provisionOfUserInfo"
        label="개인정보 제3자 제공 동의"
        isClause={true}
        isChecked={isCheckedProvisionOfUserInfoClause}
        isRequired={true}
        peer="peer/checkout-provisionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-provisionOfUserInfo:after:border-lightRed",
        }}
        onClickClauseLabel={toggleProvisionOfUserInfoClause}
        onClickDetailClause={handleProvisionOfUserInfoClauseClick}
      />

      <ClauseCheckbox
        clauseType="paymentAgencyClause"
        label="결제대행 서비스 이용약관"
        isClause={true}
        isChecked={isCheckedPaymentAgencyClause}
        isRequired={true}
        peer="peer/checkout-paymentAgencyClause"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-paymentAgencyClause:after:border-lightRed",
        }}
        onClickClauseLabel={togglePaymentAgencyClause}
        onClickDetailClause={() =>
          handlePaymentAgencyClauseClick("https://www.inicis.com/terms")
        }
      />
    </CheckoutSection>
  )
}

export default CheckoutClauseSection
