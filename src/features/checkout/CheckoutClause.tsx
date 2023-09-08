"use client"

import ClauseCheckbox from "@/common/views/ClauseCheckbox"
import { useState } from "react"

const CheckoutClause = () => {
  const [checkoutClause, setCheckoutClause] = useState({
    all: false,
    collectionOfUserInfo: false,
    provisionOfUserInfo: false,
    paymentAgencyClause: false,
  })

  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between font-bold border-border">
        <ClauseCheckbox
          clauseType="all"
          label="주문 내용을 확인했으며, 아래 내용에 모두 동의합니다."
          isClause={false}
          classNames="border-b-[1px] border-lightBlack text-[16px]"
          isChecked={checkoutClause.all}
          peer="peer/checkout-all"
          peerChecked={{
            borderColor: "peer-checked/checkout-all:after:border-lightRed",
          }}
          onClickClause={() => {}}
        />
      </div>

      <ClauseCheckbox
        clauseType="collectionOfUserInfo"
        label="개인정보 수집/이용 동의"
        isClause={true}
        isChecked={checkoutClause.collectionOfUserInfo}
        isRequired={true}
        peer="peer/checkout-collectionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-collectionOfUserInfo:after:border-lightRed",
        }}
        onClickClause={() => {}}
      />

      <ClauseCheckbox
        clauseType="provisionOfUserInfo"
        label="인정보 제3자 제공 동의"
        isClause={true}
        isChecked={checkoutClause.provisionOfUserInfo}
        isRequired={true}
        peer="peer/checkout-provisionOfUserInfo"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-provisionOfUserInfo:after:border-lightRed",
        }}
        onClickClause={() => {}}
      />

      <ClauseCheckbox
        clauseType="paymentAgencyClause"
        label="결제대행 서비스 이용약관"
        isClause={true}
        isChecked={checkoutClause.paymentAgencyClause}
        isRequired={true}
        peer="peer/checkout-paymentAgencyClause"
        peerChecked={{
          borderColor:
            "peer-checked/checkout-paymentAgencyClause:after:border-lightRed",
        }}
        onClickClause={() => {}}
      />
    </div>
  )
}

export default CheckoutClause
