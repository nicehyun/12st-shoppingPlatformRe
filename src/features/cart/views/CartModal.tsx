// interface CartModalThemeProps {
//   isShowCartModal: boolean
// }

import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import CartModalRouteButton from "./CartModalRouteButton"
import ProductInCartModalCard from "./ProductInCartModalCard"

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

const CartModal = () => {
  const { productListInCart } = useProductListInCartQuery()
  const { sessionQuery } = useSessionQuery()
  console.log(productListInCart)
  return (
    <div className="absolute top-[90px] right-[80px] z-10 w-[320px] py-[15px] px-[10px] bg-white dark:bg-black border-[1px] border-black dark:border-white rounded-[5px] cursor-default shadow dark:shadow-whiteShadow">
      <>
        {productListInCart.length === 10 && (
          <p className="bg-black text-white text-center border-[1px] border-border rounded-[5px] text-[12px] p-[8px] mb-[10px]">
            장바구니가 가득 찼습니다.
          </p>
        )}
        {productListInCart.length === 0 && (
          <p className="notification">장바구니가 비어있습니다.</p>
        )}
        <ul className="max-h-[500px] overflow-y-scroll">
          {productListInCart.map((product) => (
            <ProductInCartModalCard
              imageUrl={product.image}
              productName={product.name}
              key={product.id}
            />
          ))}
        </ul>
      </>

      <div className="flex flex-col">
        {sessionQuery ? (
          productListInCart.length !== 0 && (
            <CartModalRouteButton content="장바구니로 이동" />
          )
        ) : (
          <CartModalRouteButton content="로그인" />
        )}

        <button className="p-[8px] border-1px border-border bg-lightGray btn-text-center text-[14px] md:text-[12px] sm:text-[12px] rounded-[5px]">
          닫기
        </button>
      </div>
    </div>
  )
}

export default CartModal
