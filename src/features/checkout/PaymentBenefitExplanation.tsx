export const PaymentBenefitLotteCardExplanation = () => {
  return (
    <ul className="list-decimal sm:text-[14px] md:text-[14px] text-[16px]">
      <li className="mb-[10px]">
        행사기간 : 2023년 09월 08일 ~ 09월 30일 (예산 소진 시 조기종료)
      </li>
      <li className="mb-[10px]">
        이벤트 내용 : 14만원 이상 결제 시 7천원 즉시할인
      </li>
      <li className="mb-[10px]">
        할인기준 : 1회 승인금액 기준 14만원 이상 시부터 적용 (단, 예산 소진 시
        자동으로 할인쿠폰 창 호출 불가)
      </li>
      <li className="mb-[50px]">
        사용방법 : 할인조건 자동 충족 시 당사 모듈 내 쿠폰 사용유무 체크 호출
        &gt; 쿠폰 선택 후 승인 요청금액 할인 적용여부 확인 후 결제 진행
      </li>

      <li>
        유의사항
        <ul className="list-disc">
          <li className="mb-[5px]">
            본 이벤트는 롯데카드 회원 대상으로 진행되며, 결제 횟수 제한은
            없습니다.
          </li>
          <li className="mb-[5px]">
            법인/체크/기프트/선불카드 및 간편결제는 제외됩니다.
          </li>
          <li className="mb-[5px]">결제금액은 실 결제금액 기준입니다.</li>
          <li className="mb-[5px] flex flex-col">
            <span>
              간편결제(카카오페이, 네이버페이, 페이코, 토스 등)내의 롯데카드
              결제는 해당되지 않습니다.
            </span>

            <span className="font-bold">
              (단, 신용카드 결제창 내의 간편결제를 통한 롯데카드 결제는
              적용됩니다)
            </span>
          </li>
          <li className="mb-[5px]">
            본 이벤트는 제휴사 사정에 의해 사전 공지 없이 변경 및 중단될 수
            있습니다.
          </li>
          <li className="mb-[5px]">
            계약체결 전 금융상품설명서와 약관을 반드시 확인하시기 바랍니다.
          </li>
          <li className="mb-[5px]">
            신용카드 발급이 부적정한 경우(개인신용평점 낮음 등) 카드발급이
            제한될 수 있습니다.
          </li>
          <li className="mb-[5px]">
            카드 이용 대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에
            상환해야 합니다.
          </li>
          <li className="mb-[5px]">
            금융소비자는 금소법 제19조 제1항에 따라 해당상품 또는 서비스에
            대하여 설명을 받을 권리가 있습니다.
          </li>
          <li className="mb-[5px]">
            상환능력에 비해 신용카드 사용액이 과도할 경우 귀하의 개인신용 평점이
            하락할 수 있습니다.
          </li>
          <li className="mb-[5px]">
            개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.
          </li>
          <li className="mb-[5px]">
            일정기간 원리금을 연체할 경우 모든 원리금을 변제할 의무가 발생할 수
            있습니다.
          </li>
          <li>심의필번호 : 제2023-E19973호 (2023.09.08~2023.09.30)</li>
        </ul>
      </li>
    </ul>
  )
}

export const PaymentBenefitWooriCardExplanation = () => {
  return (
    <div className="list-decimal sm:text-[14px] md:text-[14px] text-[16px]">
      <ul>
        <li>
          <strong>[PROMOTION 1]</strong>
          <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
            <li>행사내용 : 우리페이로 12만원 이상 결제 시 6천원 즉시할인</li>
            <li>
              행사기간 : 09월 08일(금) - 09월 30일(토) (예산 소진 시 행사
              조기종료)
            </li>
            <li>
              행사대상 : 우리카드 개인 신용, 체크카드 고객 (법인, 선불/기프트
              카드 제외)
            </li>
            <li>
              사용방법 : 신용/체크카드 선택 &gt; 우리카드 및 우리페이 선택 &gt;
              즉시할인 쿠폰 선택 &gt; 결제
            </li>
          </ul>
        </li>
        <li>
          <strong>[PROMOTION 2]</strong>
          <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
            <li>
              행사내용 : 2023년 우리페이 미이용 고객 대상 1만원 이상 결제 시
              2천원 청구할인
            </li>
            <li>
              행사기간 : 09월 01일(금) - 09월 30일(토) (예산 소진 시 행사
              조기종료)
            </li>
            <li>
              행사대상 : 우리카드 개인 신용, 체크카드 고객 (법인, 선불/기프트
              카드 제외)
            </li>
            <li>
              사용방법 : 신용/체크카드 선택 &gt; 우리카드 및 우리페이 선택 &gt;
              결제
              <br />※ 우리WON뱅킹 결제 및 기타 결제를 통한 결제는 청구할인
              미적용
            </li>
            <li>
              혜택 제공일 : 결제일에 따라 10월 또는 11월 청구대금에서 차감
            </li>
          </ul>
        </li>
      </ul>

      <div>
        <strong>유의사항</strong>
        <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
          <li className="mb-[10px]">
            [PROMOTION 1 : 우리페이 즉시할인]
            <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
              <li>
                우리페이로 최종 결제한 금액이 12만원 이상인 경우에 한해
                즉시할인이 적용됩니다. (네이버페이, 카카오페이, 페이코 등
                간편결제 등 우리페이를 제외한 다른 결제수단으로 결제 시 행사
                제외)
              </li>
            </ul>
          </li>
          <li className="mb-[10px]">
            [PROMOTION 2 : 2023년 우리페이 미이용 고객 대상 청구할인]
            <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
              <li>
                우리페이로 최종 결제한 금액이 1만원 이상인 경우에 한해
                청구할인이 적용됩니다.
              </li>
              <li>
                2023년 내에 우리페이로 결제한 이력이 없는 고객의 결제 건에
                한합니다.
              </li>
              <li>
                우리WON카드 결제 시에만 혜택이 적용되며 우리WON뱅킹 결제 및
                기타결제 이용 시 청구할인이 적용되지 않습니다.
              </li>
              <li>
                혜택 제공시점에 대상 카드를 해지, 교체, 정지, 연체 등 정상
                보유하지 않을 경우 할인 혜택이 취소됩니다.
              </li>
              <li>
                할인 혜택을 적용받고 취소 또는 환불하여 최종 결제금액 충족이
                되지 않을 경우 할인 혜택도 취소됩니다.
              </li>
            </ul>
          </li>
          <li>
            [공통 유의사항]
            <ul className="mt-[10px] list-disc ml-[14px] mb-[20px]">
              <li>
                우리카드 개인 신용, 체크카드 고객만 할인 적용됩니다 (법인,
                선불/기프트 카드 제외)
              </li>
              <li>예산 소진 시 사전 고지 없이 조기 종료될 수 있습니다.</li>
              <li>
                상세혜택 및 이용조건은 카드를 발급받기 전에
                홈페이지(www.wooricard.com), 상품설명서 및 약관 등을 통해
                확인하시기 바랍니다.
              </li>
              <li>
                신용카드 발급이 부적정한 경우(개인신용평점 낮음 등) 카드 발급이
                제한될 수 있습니다.
              </li>
              <li>
                카드 이용대금과 이에 수반되는 모든 수수료를 지정된 대금결제일에
                상환합니다.
              </li>
              <li>
                금융소비자는 금융소비자보호법 제19조제1항에 따라 해당상품 또는
                서비스에 대하여 설명을 받을 권리가 있으며, 그 설명을 듣고 내용을
                충분히 이해한 후 거래하시기 바랍니다.
              </li>
              <li>
                상환능력에 비해 신용카드 사용액이 과도할 경우 귀하의
                개인신용평점이 하락할 수 있습니다.
              </li>
              <li>
                개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </li>
              <li>
                일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                발생할 수 있습니다.
              </li>
              <li>준법 심의필 2023-A01933 (2023.09.06/유효기간:2023.12.31)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const PaymentBenefitKBCardExplanation = () => {
  return (
    <ul className="list-decimal sm:text-[14px] md:text-[14px] text-[16px]">
      <li className="mb-[10px]">
        행사기간: 2023년 09월 06일 ~ 09월 30일 (예산 소진 시 조기종료)
      </li>
      <li className="mb-[10px]">
        대상카드: KB국민 개인 신용/체크카드 회원 (단, KB국민 기업/비씨/선불카드
        제외)
      </li>
      <li className="mb-[50px]">
        결제방법: 신용/체크카드 선택 &gt; KB국민카드 선택 &gt; KB Pay 선택 및
        최종 결제금액 확인 후 결제
      </li>

      <li>
        <strong>유의사항</strong>
        <ul className="list-disc">
          <li className="mb-[5px]">
            최종 결제금액이 12만원 이상인 경우에 한해 즉시할인이 적용됩니다.
          </li>
          <li className="mb-[5px]">
            할인 혜택을 적용받고 취소 또는 환불하여 최종 결제금액 충족이 되지
            않을 경우 할인혜택도 취소됩니다.
          </li>
          <li className="mb-[5px]">
            즉시할인 이벤트 페이지 노출여부와 상관 없이 예산 소진 시 행사
            조기종료 됩니다.
          </li>
          <li className="mb-[5px]">
            계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
          </li>
          <li className="mb-[5px]">
            상환능력에 비해 신용카드 사용액이 과도한 경우, 귀하의 개인신용평점이
            하락할 수 있습니다.
          </li>
          <li className="mb-[5px]">
            개인신용평점 하락시 금융거래와 관련된 불이익이 발생할 수 있습니다.
          </li>
          <li className="mb-[5px]">
            일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수
            있습니다.
          </li>
          <li className="mb-[5px]">
            신용카드 발급이 부적정한 경우 (개인신용평점 낮음, 연체금 보유 등)
            카드발급이 제한될 수 있습니다.
          </li>
          <li>
            카드이용대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에
            상환합니다.
          </li>
          <li className="mb-[5px]">
            금융소비자는 금소법 제19조제1항에 따라 해당상품 또는 서비스에 대하여
            설명을 받을 권리가 있으며, 그 설명을 듣고 내용을 충분히 이해한 후
            거래하시기 바랍니다.
          </li>
          <li className="mb-[5px]">
            법인/체크/기프트/하이브리드 카드로 이용 시 프로모션 적용이 되지
            않습니다.
          </li>
          <li className="mb-[5px]">
            예산 소진 시 이벤트가 조기종료 될 수 있습니다.
          </li>
          <li className="mb-[5px]">
            카카오페이, 페이코, 네이버페이 등 각종 간편결제 서비스 이용 시
            프로모션 적용이 되지 않습니다.
          </li>

          <li className="mb-[5px]">
            <strong>준법감시인 심의필 :</strong> 230904-03405-HPM (2023.09.04 ~
            2024.09.03)
          </li>
        </ul>
      </li>
    </ul>
  )
}

export const PaymentBenefitTosspayExplanation = () => {
  return (
    <ul className="list-decimal sm:text-[14px] md:text-[14px] text-[16px]">
      <li className="mb-[10px]">
        행사기간: 2023년 09월 01일 ~ 09월 30일 (※ 예산 소진 시 행사 조기종료)
      </li>
      <li className="mb-[10px]">
        행사내용: 생애 첫결제 1만원 이상 3천 토스페이 포인트 적립
      </li>
      <li className="mb-[10px]">행사대상: 토스페이 생애 첫 결제 고객</li>
      <li className="mb-[50px]">대상상품: 29CM 온라인 전상품</li>

      <li>
        <strong>유의사항</strong>
        <ul className="list-disc">
          <li className="mb-[5px]">
            첫 결제 즉시 적립은 토스 전체 가맹점에서 결제 이력이 없는 경우
            적용됩니다 (토스 ID 당 1회 한정)
          </li>
          <li className="mb-[5px]">
            생애 첫 결제 프로모션은 기타 할인 및 적립 프로모션과 중복으로 적용이
            가능합니다.
          </li>
          <li className="mb-[5px]">
            토스 간편결제 선택 시에만 할인/적립이 적용되며 토스페이 이외의
            간편결제 수단(네이버페이, 카카오페이 등) 이용 혹은 신용카드 선택
            시에는 적용이 불가능합니다.
          </li>
          <li className="mb-[5px]">
            적립된 포인트는 토스페이 결제 시 사용 가능합니다. 단, 일부 가맹점의
            경우 결제 시 포인트 사용이 어려울 수 있습니다.
          </li>
          <li className="mb-[5px]">
            적립된 포인트는 등록된 내 계좌로 100원 이상 출금 시 포인트 금액의
            10% 수수료 제외 후 출금이 가능합니다.
          </li>
          <li className="mb-[5px]">
            예산이 소진되면 이벤트가 예정보다 빨리 마감될 수 있으니 결제 전
            할인/적립이 적용됐는지 꼭 확인 바랍니다.
          </li>
          <li className="mb-[5px]">
            최종 결제금액이 최소 결제금액보다 커야 혜택을 받을 수 있습니다. 단,
            최종 결제금액은 토스포인트를 쓰기 전 금액입니다.
          </li>
          <li className="mb-[5px]">
            하나카드를 선택하고 토스뱅크 카드로 결제한 경우 혜택 적용대상이
            아닙니다.
          </li>
          <li className="mb-[5px]">
            법인, 선불, 충전, 기프트 카드는 혜택 적용이 불가합니다.
          </li>
          <li className="mb-[5px]">
            상품권, 순금 등 일부 상품을 결제 혜택을 받을 수 없습니다.
          </li>
          <li className="mb-[5px]">
            09월 01일부터 09월 30일까지 한정된 고객에게 선착순으로 적용되는
            행사로, 조기 종료될 수 있습니다.
          </li>
          <li className="mb-[5px]">
            행사 내용은 토스페이 및 29CM의 사정으로 중단 또는 변동될 수
            있습니다.
          </li>
          <li className="mb-[5px]">
            관련 문의는 토스 고객센터(1599-4905)로 문의 부탁드립니다.
          </li>
        </ul>
      </li>
    </ul>
  )
}
