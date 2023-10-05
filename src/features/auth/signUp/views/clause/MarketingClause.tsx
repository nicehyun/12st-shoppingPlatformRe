const MarketingClause = () => {
  return (
    <div className="text-[14px] sm:text-[12px] md:text-[12px] text-black leading-[20px]">
      <p className="mb-[20px]">
        (주)12ST는 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의
        개인정보를 안전하게 처리하는데 최선을 다하고 있습니다. 아래의 내용을
        확인 후 동의하여 주시기 바랍니다.
      </p>

      <h2 className="font-bold text-[15px] mb-[10px]">1. 수집 및 이용 목적</h2>
      <ul className="mb-[20px] list-disc pl-[18px]">
        <li>개인 맞춤형 상품·서비스 혜택 정보 제공</li>
        <li>이벤트 및 광고성 정보 제공 및 참여 기회 제공</li>
        <li>
          상품·서비스 이용 실적 정보 통계·분석을 통한 신규 서비스(제품) 개발
        </li>
      </ul>

      <h2 className="font-bold text-[15px] mb-[10px]">2. 수집 및 이용 항목</h2>
      <ul className="mb-[20px] list-disc pl-[18px]">
        <li>
          회원 정보(이름, 휴대폰 번호, 이메일, 성별, 생년월일, 회원등급,
          가입일시)
        </li>
        <li>쇼핑 및 서비스 이용 정보(장바구니의 상품, 구매일시, 배송지역)</li>
      </ul>

      <h2 className="font-bold text-[15px] mb-[10px]">3. 보유 및 이용기간</h2>
      <ul className="mb-[20px] list-disc pl-[18px]  font-bold">
        <li>
          {" "}
          <u>회원 탈퇴 요청 시 또는 동의 철회 시 지체 없이 파기합니다.</u>
        </li>
        <li>
          <u>
            단, 관계 법령에 따라 일정 기간 보존해야 하는 경우 해당 기간 보관 후
            파기합니다.
          </u>
        </li>
      </ul>
      <br />
      <br />

      <p>
        선택적인 개인정보 수집 및 이용에 동의하지 않을 권리가 있습니다. 동의하지
        않아도 서비스 이용이 가능합니다. 다만, 동의하지 않을 경우 관련 할인
        정보, 이벤트 등의 혜택 정보 제공이 제한됩니다.
      </p>
    </div>
  )
}

export default MarketingClause
