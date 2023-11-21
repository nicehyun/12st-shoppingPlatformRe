const SignupCollectionOfUserInfoClause = () => {
  const theadCss =
    "py-[10px] px-[6px] leading-[18px] align-top border-[1px] border-lightGray bg-lightBorder text-left "

  const tdCss = "align-top leading-[18px]"

  return (
    <div className="text-[14px] sm:text-[12px] md:text-[12px] text-black">
      <p className="mb-[20px]">
        12ST는 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를
        안전하게 처리하는데 최선을 다하고 있습니다. 아래의 내용을 확인 후
        동의하여 주시기 바랍니다.
      </p>

      <table>
        <caption className="font-bold text-[14px] text-left">필수 항목</caption>

        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>

        <thead>
          <tr>
            <th scope="col" className={theadCss}>
              구분
            </th>
            <th scope="col" className={theadCss}>
              수집 및 이용 목적
            </th>
            <th scope="col" className={theadCss}>
              수집 및 이용 항목
            </th>
            <th scope="col" className={theadCss}>
              보유 및 이용기간
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={tdCss}>회원가입</td>
            <td rowSpan={5} className={tdCss}>
              <ul className="list-disc pl-[18px]">
                <li className="mb-[5px]">
                  회원 가입 의사 확인 및 회원관리 (회원제 서비스 제공)
                </li>
                <li className="mb-[5px]">이용자 식별 및 본인 인증</li>
                <li className="mb-[5px]">
                  서비스 및 상품 제공에 관한 계약 이행 및 요금정산
                </li>
                <li className="mb-[5px]">고객 상담 및 불만, 민원 사무 처리</li>
                <li className="mb-[5px]">
                  서비스 및 약관 변경 고지, 안내사항 전달
                </li>
                <li className="mb-[5px]">
                  상품∙서비스 이용 실적 정보 통계∙분석
                </li>
                <li className="mb-[5px]">상품∙서비스 개선 및 추천</li>
                <li className="mb-[5px]">불법∙부정 이용 방지</li>
              </ul>
            </td>
            <td className={tdCss}>아이디(이메일), 비밀번호</td>
            <td rowSpan={9} className={tdCss}>
              <p className="font-bold">
                <u>
                  탈퇴 요청 시 지체 없이 파기합니다.(아이디(이메일), 이메일,
                  비밀번호는 부정 이용ㆍ탈퇴 방지를 위해 탈퇴 요청 시 7일 간
                  별도 보관 후 파기)
                  <br />
                  <br />
                  단, 관계 법령에 따라 일정 기간 보존해야 하는 항목은 해당 기간
                  보관 후 파기합니다.
                </u>
              </p>
            </td>
          </tr>

          <tr>
            <td className={tdCss}>(SNS 계정)회원 가입 및 간편 로그인 연동</td>
            <td className={tdCss}>
              네이버 : 이메일, 로그인 정보 식별값
              <br />
              <br />
              카카오 : 이메일, 카카오톡 채널 추가 상태 및 내역, 로그인 정보
              식별값
              <br />
              <br />
              애플 : 이메일, 로그인 정보 식별값
              <br />
              <br />
              페이스북 : 이름, 프로필 사진, 이메일, 로그인 정보 식별값
            </td>
          </tr>

          <tr>
            <td className={tdCss}>본인인증</td>
            <td className={tdCss}>
              이름, 성별, 생년월일, 휴대폰번호, 연계정보(CI),
              중복가입확인정보(DI)
            </td>
          </tr>

          <tr>
            <td className={tdCss}>서비스 이용</td>
            <td className={tdCss}>
              서비스 이용 내역, 서비스 내 구매 및 결제 내역, 상담 내용
            </td>
          </tr>

          <tr>
            <td className={tdCss}>고객상담</td>
            <td className={tdCss}>
              이름, 휴대폰번호, 이메일, 상담내용, 주문정보(상품, 주소)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SignupCollectionOfUserInfoClause
