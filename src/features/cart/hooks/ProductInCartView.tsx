import { IProductInCartProps } from "../../types/cart";
import { BsFillTrashFill } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";
import styled from "@emotion/styled";
import {
  colorBasicBlack,
  colorBorder,
  colorLightRed,
  colorRed,
  colorWhite,
} from "@/common/styles/commonColor";
import { flexCenter } from "@/common/styles/flex";

const ProductInCartContainer = styled.li`
  display: flex;
  margin-bottom: 30px;

  .checkbox {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const ProductInfoWrap = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  position: relative;
  display: flex;
  flex-grow: 1;
  border: 1px solid ${colorBorder};
  border-radius: 5px;

  .product-imageWrap {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 5px 0 0 5px;
    border-right: 1px solid ${colorBorder};
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .btn__remove {
    position: absolute;
    color: ${colorBorder};
    right: 10px;
    top: 10px;
    font-size: 22px;
    transition: 0.3s;
  }

  .btn__remove:hover {
    color: ${colorRed};
  }

  .info {
    position: relative;
    padding: 10px 10px 10px 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .info__delivery {
    position: absolute;
    left: 0;
    top: 40px;
    padding: 5px;
    font-size: 12px;
    background-color: ${colorBasicBlack};
    color: ${colorWhite};
    border-radius: 8px;
  }

  .info__mall {
    color: #ccc;
    font-size: 14px;
    margin-bottom: 12px;
    position: absolute;
    top: 10px;
    left: 0;
  }

  .info__name {
    position: absolute;
    top: 70px;
    left: 0;
    display: flex;
    width: 500px;
    height: 50.4px;
    padding-right: 20px;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 18px;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .info__rawPrice,
  .info__discountPrice {
    position: absolute;
    right: 20px;
  }

  .info__rawPrice {
    font-size: 13px;
    color: ${colorBorder};
    text-decoration: line-through;
    bottom: 40px;
  }

  .info__discountPrice {
    font-size: 16px;
    font-weight: 700;
    bottom: 20px;
  }

  .percent {
    color: ${colorLightRed};
    margin-right: 5px;
  }

  .amount {
    position: absolute;
    bottom: 20px;
    height: 28px;
    padding: 1px 0;
    display: flex;
    align-items: center;
    background-color: rgb(240, 240, 240);
    border-radius: 5px;
    overflow: hidden;
  }

  .btn-amount {
    font-size: 16px;
    ${flexCenter}
  }

  .amount input {
    width: 50px;
    height: 100%;
    border: none;
    color: ${colorBasicBlack};
    text-align: end;
    cursor: default;
    padding: 0 10px;
  }

  .btn-amount__minus {
    color: ${colorBorder};
  }
`;

const ProductInCartView = ({
  productInfo,
  productDiscountedPrice,
  onClickMinusButton,
  onClickPlusButton,
  onClickRemoveButton,
  isCheckedProduct,
  onClickCheck,
}: IProductInCartProps) => {
  return (
    <ProductInCartContainer>
      <input
        type="checkbox"
        className="checkbox"
        checked={isCheckedProduct}
        onChange={onClickCheck}
      />

      <ProductInfoWrap>
        <div className="product-imageWrap">
          <img src={productInfo.image} alt={productInfo.title} />
        </div>

        <div className="info">
          <button className="btn__remove" onClick={onClickRemoveButton}>
            <BsFillTrashFill />
          </button>
          {/* TODO : 유틸리티 함수로 날짜 수정하기 */}
          <span className="info__delivery">12/27 예약배송</span>
          <p className="info__mall">[ {productInfo.mallname} ]</p>
          <p className="info__name">{productInfo.title}</p>
          <p className="info__rawPrice">{productInfo.price}</p>
          <p className="info__discountPrice">
            <span className="percent">[{productInfo.pDiscount}%]</span>
            {productDiscountedPrice}
          </p>

          <div className="amount">
            <button
              className="btn-amount btn-amount__minus"
              onClick={onClickMinusButton}
            >
              <HiMinus />
            </button>
            <input type="text" readOnly value={productInfo.amount} />
            <button className="btn-amount" onClick={onClickPlusButton}>
              <HiPlus />
            </button>
          </div>
        </div>
      </ProductInfoWrap>
    </ProductInCartContainer>
  );
};

export default ProductInCartView;
