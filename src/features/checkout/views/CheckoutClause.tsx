"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import {
  resetClause,
  selectCheckoutClauseState,
  toggleAgreeToAllClause,
  toggleCollectionOfUserInfoClause,
  togglePaymentAgencyClause,
  toggleprovisionOfUserInfoClause,
} from "@/redux/features/checkoutSlice"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

const CheckoutClause = () => {
  const { all, collectionOfUserInfo, paymentAgency, provisionOfUserInfo } =
    useAppSelector(selectCheckoutClauseState)
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

  useEffect(() => {
    dispatch(resetClause())
  }, [])

  return (
    <section className="border-t-[2px] border-black">
      <div className="flex justify-between font-bold border-border">
        <ClauseCheckbox
          clauseType="all"
          label="주문 내용을 확인했으며, 아래 내용에 모두 동의합니다."
          isClause={false}
          classNames="border-b-[1px] border-lightBlack text-[16px]"
          isChecked={all}
          peer="peer/checkout-all"
          peerChecked={{
            borderColor: "peer-checked/checkout-all:after:border-lightRed",
          }}
          onClickClauseLabel={() => dispatch(toggleAgreeToAllClause())}
        />
      </div>

      <ClauseCheckbox
        clauseType="collectionOfUserInfo"
        label="개인정보 수집/이용 동의"
        isClause={true}
        isChecked={collectionOfUserInfo}
        isRequired={true}
        peer="peer/checkout-collectionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-collectionOfUserInfo:after:border-lightRed",
        }}
        onClickClauseLabel={() => dispatch(toggleCollectionOfUserInfoClause())}
        onClickDetailClause={handleColletionOfUserInfoClauseClick}
      />

      <ClauseCheckbox
        clauseType="provisionOfUserInfo"
        label="개인정보 제3자 제공 동의"
        isClause={true}
        isChecked={provisionOfUserInfo}
        isRequired={true}
        peer="peer/checkout-provisionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-provisionOfUserInfo:after:border-lightRed",
        }}
        onClickClauseLabel={() => dispatch(toggleprovisionOfUserInfoClause())}
        onClickDetailClause={handleProvisionOfUserInfoClauseClick}
      />

      <ClauseCheckbox
        clauseType="paymentAgencyClause"
        label="결제대행 서비스 이용약관"
        isClause={true}
        isChecked={paymentAgency}
        isRequired={true}
        peer="peer/checkout-paymentAgencyClause"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-paymentAgencyClause:after:border-lightRed",
        }}
        onClickClauseLabel={() => dispatch(togglePaymentAgencyClause())}
        onClickDetailClause={() =>
          handlePaymentAgencyClauseClick("https://www.inicis.com/terms")
        }
      />
    </section>
  )
}

export default CheckoutClause
