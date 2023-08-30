// interface CartModalThemeProps {
//   isShowCartModal: boolean
// }

// const CartModalContainer = styled.div<CartModalThemeProps>`
//   position: absolute;
//   top: 39px;
//   left: 42px;
//   z-index: 2;
//   width: 320px;
//   padding: 15px 10px;
//   background-color: ${colorWhite};
//   border: 1px solid ${colorBasicBlack};
//   border-radius: 5px;
//   cursor: default;
//   box-shadow: ${boxShadow};

//   display: ${(props) => (props.isShowCartModal ? "block" : "none")};

//   .notification {
//     background-color: ${colorBasicBlack};
//     color: ${colorWhite};
//     text-align: center;
//     border: 1px solid ${colorBorder};
//     border-radius: 5px;
//     font-size: 12px;
//     padding: 8px;
//     margin-bottom: 10px;
//   }
// `

// const ProductList = styled.ul`
//   max-height: 500px;
//   overflow-y: scroll;
// `

// const ButtonWrap = styled.div`
//   display: flex;
//   flex-direction: column;

//   .btn-route__cart,
//   .btn-close {
//     text-align: center;
//     font-size: 14px;
//     border-radius: 5px;
//   }

//   .btn-route__cart {
//     background-color: ${colorBasicBlack};
//     border: 1px solid ${colorBasicBlack};
//     color: ${colorWhite};
//     margin: 20px 0;
//     padding: 8px;
//     transition: 0.2s;
//   }

//   .btn-route__cart:hover {
//     background-color: ${colorWhite};
//   }

//   .btn-close {
//     padding: 8px;
//     border: 1px solid ${colorBorder};
//     background-color: rgb(240, 240, 240);
//   }
// `

const CartModalView = () => {
  return (
    <div className="absolute top-[39px] left-[42px] z-10 w-[320px] py-[15px] px-[10px] bg-white border-[1px] border-black rounded-[5px] cursor-default shadow">
      <>
        {/* {productListInCart.length === 10 && ( */}
        <p className="bg-black text-white text-center border-[1px] border-border rounded-[5px] text-[12px] p-[8px] mb-[10px]">
          장바구니가 가득 찼습니다!
        </p>
        {/* )} */}
        {/* {productListInCart.length === 0 && (
          <p className="notification">장바구니가 비어있습니다!</p>
        )} */}
        <ul className="max-h-[500px] overflow-scroll">
          {/* {productListInCart.map((product) => (
            <ProductInCartModal product={product} key={product.productId} />
          ))} */}
        </ul>
      </>

      <div>
        {/* {isAuthenticated ? (
          productListInCart.length !== 0 && (
            <button className="btn-route__cart" onClick={routeToCart}>
              장바구니로 이동
            </button>
          )
        ) : (
          <button className="btn-route__cart" onClick={routeToLogin}>
            로그인
          </button>
        )} */}

        <button className="btn-close">닫기</button>
      </div>
    </div>
  )
}

export default CartModalView
