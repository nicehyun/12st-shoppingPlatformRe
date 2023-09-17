const ProvisionOfUserInfoClause = () => {
  const theadCss =
    "py-[10px] px-[6px] leading-[18px] align-top border-[1px] border-lightGray bg-lightBorder text-left w-1/4"

  return (
    <div className="text-[14px] sm:text-[12px] md:text-[12px] text-black">
      <p className="mb-[20px]">
        (주)12ST는 서비스 및 상품을 구매하고자 할 경우 거래 당사자간 원활한
        의사소통 및 배송, 상담 등 거래 이행을 위하여 판매자에게 아래와 같이
        개인정보를 제공하고 있습니다. 아래의 내용을 확인 후 동의하여 주시기
        바랍니다.
      </p>

      <table>
        <tbody>
          <tr>
            <th className={theadCss}>유형</th>
            <td className="css-1qp8gts eyurqpi5">필수</td>
          </tr>

          <tr>
            <th className={theadCss}>제공받는 자</th>
            <td className="css-1qp8gts eyurqpi5">
              <p className="css-1v91l7o eyurqpi6">
                <u>슈퍼서브, 로우로우</u>
              </p>
            </td>
          </tr>

          <tr>
            <th className={theadCss}>제공 목적</th>
            <td className="css-1qp8gts eyurqpi5">
              <p className="css-1v91l7o eyurqpi6">
                <span>주문 상품 및 서비스의 제공 및 계약 이행</span>
                <span>고객 상담 및 불만, 민원 사무 처리</span>
              </p>
            </td>
          </tr>

          <tr>
            <th className={theadCss}>제공 항목</th>
            <td className="css-1qp8gts eyurqpi5">
              성명, 휴대폰 번호, 이메일 주소, 주소, (구매자와 수령자가 다를
              경우)수령자 정보(성명, 주소, 휴대폰번호, 전화번호)
            </td>
          </tr>

          <tr>
            <th className={theadCss}>보유 및 이용기간</th>
            <td className="css-1qp8gts eyurqpi5">
              <p className="css-1v91l7o eyurqpi6">
                <u>재화 또는 서비스의 제공 목적이 달성 후 파기</u>
                <br />
                <br />
                단,{" "}
                <u>
                  관계 법령에 따라 일정 기간 보관해야 하는 항목은 해당 기간 보관
                  후 파기합니다.
                </u>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProvisionOfUserInfoClause
