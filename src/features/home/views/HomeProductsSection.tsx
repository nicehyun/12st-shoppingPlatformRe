import { Product, Products } from "@/common/types/product"
import Button from "@/common/views/Button"
import ProductCard from "@/common/views/ProductCard"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface IHomeProductsSection {
  children?: ReactNode
  products: Products
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

      <ul className={`flex flex-wrap justify-center`}>
        {products.map((product: Product) => (
          <li className="px-[4px] mb-[10px]" key={product.id}>
            <ProductCard productInfo={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeProductsSection
