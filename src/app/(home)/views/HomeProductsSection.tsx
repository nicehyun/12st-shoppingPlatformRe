import { Products } from "@/app/common/types/product"
import Button from "@/app/common/views/Button"
import ProductCard from "@/app/common/views/ProductCard"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface IHomeProductsSection {
  children?: ReactNode
  products?: Products
  sectionTitle: string
  sectionImage: StaticImageData
  onMoreClick: () => void
}

const HomeProductsSection = ({
  products,
  sectionImage,
  sectionTitle,
  onMoreClick,
}: IHomeProductsSection) => {
  return (
    <section>
      <div className="relative flex items-center mb-[30px] border-b-[1px] border-blackk pb-20">
        <Image
          src={sectionImage}
          alt={sectionTitle}
          className="w-[50px] h-[50px] mr-[10px]"
        />
        <h3 className="font-bold text-[22px]">{sectionTitle}</h3>
        {/* <Button onClick={() => onMoreClick} content="+ 더보기" /> */}
        {/* <button onClick={onMoreClick}>+ 더보기</button> */}
      </div>

      {/* {products?.map((product, key) => (
          //TODO : PRODUCT 컴포넌트 생성후 넣기
          // <Product key={key} productInfo={product} />
          <div key={key}>ad</div>
        ))} */}

      <ul className={`flex flex-wrap justify-center`}>
        <li className="px-[4px] mb-[10px]">
          <ProductCard />
        </li>
        <li className="px-[4px] ">
          <ProductCard />
        </li>
        <li className="px-[4px] ">
          <ProductCard />
        </li>
        <li className="px-[4px] ">
          <ProductCard />
        </li>
        <li className="px-[4px] ">
          <ProductCard />
        </li>
        <li className="px-[4px] ">
          <ProductCard />
        </li>
      </ul>
    </section>
  )
}

export default HomeProductsSection
