"use client"

import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import ProductInCart from "./ProductInCart"

//   .checkbox {
//     margin-right: 10px;
//     width: 18px;
//     height: 18px;
//     cursor: pointer;
//   }
// `

// const div  = styled.div`
//   position: relative;
//   margin-bottom: 30px;
//   padding-bottom: 20px;
//   border-bottom: 1px solid ${colorLightBlack};
//   display: flex;
//   align-items: center;

//   span {
//     font-size: 16px;
//   }

//   button {
//     position: absolute;
//     right: 0;
//     color: ${colorBorder};
//     transition: 0.3s;
//   }
//   button:hover {
//     color: ${colorRed};
//   }
// `

const ProductListInCart = () => {
  const { productListInCart } = useProductListInCartQuery()
  return (
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] xl:w-4/5 lg:w-4/5 xl:mr-2percent lg:mr-2percent shadow rounded-[5px]">
      <div className="relative mb-[30px] pb-[30px] border-b-[1px] border-lightBlack flex items-center">
        <input
          type="checkbox"
          // checked={isAllChecked}
          // onChange={onClickAllCheck}
          className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
        />
        <span className="text-[16px] md:text-[14px] sm:text-[12px] text-black">
          {/* 선택 {checkedProductList.length}개 */}
          선택 10개
        </span>
        <button
          // onClick={onClickCheckedProductRemove}
          className="absolute right-0 text-border transition-3 hover:text-lightRed"
        >
          선택 삭제
        </button>
      </div>

      <ul>
        {productListInCart.map((product) => (
          <ProductInCart key={product.name} productInfo={product} />
        ))}
      </ul>
    </section>
  )
}

export default ProductListInCart
