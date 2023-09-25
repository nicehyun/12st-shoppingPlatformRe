const CollectionOfUserInfoClause = () => {
  const theadCss =
    "py-[10px] px-[6px] leading-[18px] align-top border-[1px] border-lightGray bg-lightBorder text-left "

  const tdCss = "align-top leading-[18px]"
  return (
    <div className="text-[14px] sm:text-[12px] md:text-[12px] text-black">
      <p className="mb-[20px]">
        (주)12ST는 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의
        개인정보를 안전하게 처리하는데 최선을 다하고 있습니다. 아래의 내용을
        확인 후 동의하여 주시기 바랍니다.
      </p>

      <table>
        <colgroup>
          <col className="w-1/6" />
          <col className="w-1/6" />
          <col className="" />
          <col className="w-1/6" />
          <col className="w-1/6" />
        </colgroup>

        <thead>
          <th className={`${theadCss} `}>유형</th>
          <th className={`${theadCss}`}>구분</th>
          <th className={`${theadCss}`}>목적</th>
          <th className={`${theadCss}`}>수집 항목</th>
          <th className={`${theadCss}`}>보유 및 이용기간</th>
        </thead>

        <tbody>
          <tr>
            <td rowSpan={5} className={tdCss}>
              필수
            </td>
            <td className={tdCss}>상품 구매</td>
            <td className={tdCss} rowSpan={5}>
              <ul className="list-disc pl-[18px]">
                <li>
                  서비스 및 상품 제공에 관한 계약 이행 및 서비스 제공에 따른
                  요금정산
                </li>
                <br />
                <li>회원 정보 자동 업데이트 및 관리</li>
                <br />
                <li>고객 상담 및 불만, 민원 사무 처리</li>
                <br />
                <li>
                  성인 인증이 필요한 상품 구매 시 성인 인증, 거래 안전을 위해
                  본인 인증 후 구매하거나 이용할 수 있는 서비스 제공
                </li>
                <br />
                <li>판매자와 구매자의 거래의 원활한 진행, 본인 의사의 확인</li>
              </ul>
            </td>
            <td className={tdCss}>
              <p>주문자 정보(본인인증을 통해 확인한 성명, 휴대폰 번호)</p>
              <br />
              <p>휴대폰 정보(통신사, 휴대폰 번호)</p>
              <br />
              <p>수령인의 성명, 주소, 휴대폰 번호, 전화번호</p>
              <br />
              <p>구매 내역, 결제 내역</p>
              <br />
            </td>

            <td className={tdCss} rowSpan={5}>
              <p>
                <u>
                  탈퇴 요청 시 지체 없이 파기합니다.(아이디(이메일), 이메일,
                  비밀번호는 부정 이용ㆍ탈퇴 방지를 위해 탈퇴 요청 시 7일 간
                  별도 보관 후 파기)
                </u>
                <br /> <br />
                단,{" "}
                <u>
                  관계 법령에 따라 일정 기간 보관해야 하는 경우 해당 기간 보관
                  후 파기합니다.
                </u>
              </p>
            </td>
          </tr>

          <tr>
            <td className={tdCss}>
              전통주 및 성인 인증 상품 구매 및 선물하기 서비스
            </td>
            <td className={tdCss}>
              성명, 휴대폰 번호, 생년월일, 성별, 연계정보(CI),
              중복가입확인정보(DI)
            </td>
          </tr>

          <tr>
            <td className={tdCss}>공연/전시/ 티켓/여행 상품 구매</td>
            <td className={tdCss}>주문자 정보(성명, 휴대폰 번호)</td>
          </tr>

          <tr>
            <td className={tdCss}>선물하기 서비스</td>
            <td className={tdCss}>
              발신인 성명, 수신인 성명, 수신인의 휴대폰 번호, 수신인의 주소
            </td>
          </tr>

          <tr>
            <td className={tdCss}>현금 환불 요청</td>
            <td className={tdCss}>환불 계좌 정보(은행명, 계좌번호, 예금주)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CollectionOfUserInfoClause
