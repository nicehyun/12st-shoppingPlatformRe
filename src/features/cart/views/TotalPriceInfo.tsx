// const TotalPriceInfoViewContainer = styled.section`
//   box-shadow: ${boxShadow};
//   background-color: ${colorWhite};
//   border: 1px solid ${colorBorder};
//   border-radius: 5px;
//   padding: 30px 20px;

//   .title {
//     font-size: 18px;
//     margin-bottom: 20px;
//     padding-bottom: 20px;
//     border-bottom: 2px solid ${colorBasicBlack};
//   }

//   .totalAmount {
//     margin: 0 2px 0 5px;
//   }

//   .finalPriceInfo {
//     padding-top: 20px;
//     border-top: 1px solid ${colorBorder};
//   }
// `;

// const priceElement = css`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;

//   .individualTitle {
//     font-size: 14px;
//   }

//   .price {
//     display: flex;
//     align-items: center;
//     letter-spacing: 1.5px;
//   }

//   .price__icon {
//     font-size: 14px;
//     margin-right: 5px;
//   }

//   .price__unit {
//     font-size: 12px;
//     margin-left: 3px;
//   }

//   .finalPrice {
//     font-size: 22px;
//     font-weight: 700;
//     color: ${colorLightRed};
//     letter-spacing: 1.5px;
//   }
// `;

const TotalPriceInfo = () => {
  return (
    <div>totalprice</div>
    // <TotalPriceInfoViewContainer>
    //   <h3 className="title">
    //     결제 예정금액 / 총
    //     <span className="totalAmount">{totalCheckedProductAmount}</span>개
    //   </h3>

    //   <div css={priceElement}>
    //     <span className="individualTitle">총 상품금액</span>
    //     <span className="price">
    //       {totalPriceOfCheckedProduct}
    //       <span className="price__unit">원</span>
    //     </span>
    //   </div>

    //   <div css={priceElement}>
    //     <span className="individualTitle">쿠폰 사용</span>
    //     <span className="price">
    //       <BiMinus className="price__icon" />
    //       {priceToUseCoupon}
    //       <span className="price__unit">원</span>
    //     </span>
    //   </div>

    //   <div css={priceElement}>
    //     <span className="individualTitle">마일리지 사용</span>
    //     <span className="price">
    //       <BiMinus className="price__icon" />0
    //       <span className="price__unit">원</span>
    //     </span>
    //   </div>

    //   <div css={priceElement}>
    //     <span className="individualTitle">배송비</span>
    //     <span className="price">
    //       <BiPlus className="price__icon" />0
    //       <span className="price__unit">원</span>
    //     </span>
    //   </div>

    //   <div css={priceElement} className="finalPriceInfo">
    //     <span className="individualTitle">총 결제금액</span>
    //     <span className="finalPrice ">
    //       {finalPrice}
    //       <span className="price__unit">원</span>
    //     </span>
    //   </div>
    // </TotalPriceInfoViewContainer>
  )
}

export default TotalPriceInfo
