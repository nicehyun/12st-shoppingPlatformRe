import React from "react"
import FooterPlatformInfoEl from "./FooterPlatformInfoEl"

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white/50 text-[12px] sm:text-[10px] py-[80px] px-[40px] leading-relaxed dark:border-t-[1px]">
      <p className="font-bold text-white">고객센터</p>
      <p className="text-[20px] text-white font-bold my-[10px]">1600 - 1600</p>

      <p className="font-bold mb-[10px] text-white">
        09:00 ~ 18:00 (주말, 공휴일은 전화상담 불가능)
      </p>

      <div className="mb-[10px] flex flex-wrap">
        <FooterPlatformInfoEl content="브랜드 스토리" />
        <FooterPlatformInfoEl content="회사소개" />
        <FooterPlatformInfoEl content="채용정보" />
        <FooterPlatformInfoEl content="이용약관" />
        <FooterPlatformInfoEl
          content="개인정보처리방침"
          classNames="font-bold"
        />
        <FooterPlatformInfoEl content="공지사항" />
        <FooterPlatformInfoEl content="고객센터" />
        <FooterPlatformInfoEl content="고객의 소리" />
        <FooterPlatformInfoEl content="전문가등록" />
        <FooterPlatformInfoEl content="사업자 구매회원" />
        <FooterPlatformInfoEl content="제휴/광고 문의" />
        <FooterPlatformInfoEl content="입점신청 문의" />
        <FooterPlatformInfoEl content="안전거래센터" />
        <FooterPlatformInfoEl content="상품광고 소개" />
      </div>
      <p className="font-bold mb-[10px]">
        상호명: (주)12st 이메일:(고객문의)email@email.com (제휴문의)email@email
        사업자등록번호:123-12-12345 통신판매업신고번호 제2022-부산-0123호
        <span className="ml-[10px] cursor-pointer text-white/80">
          사업자정보확인
        </span>
      </p>

      <p className="font-bold">
        12st는 개별 판매자가 상품을 판매하는 오픈마켓이며 (주)12st는
        통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및
        거래 등에 대해 일체 책임을 지지않습니다.
      </p>

      <p className="font-bold">
        단, (주)12st가 판매자로 등록 판매한 상품의 경우는 판매자로서 책임을
        부담합니다.
      </p>

      <p className="font-bold mt-[50px]">&copy; 2023. All rights reserved</p>
    </footer>
  )
}

export default Footer
