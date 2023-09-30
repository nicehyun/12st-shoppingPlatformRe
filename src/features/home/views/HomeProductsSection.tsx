import { Product, Products } from "@/common/types/product"
import Button from "@/common/views/Button"
import ProductCard from "@/common/views/ProductCard"
import { Grid } from "@mui/material"
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
    <section className="mb-[80px]">
      <div className="relative flex items-center mb-[30px] border-b-[1px] pb-[28px]">
        <Image
          src={sectionImage}
          alt={sectionTitle}
          className="w-[50px] h-[50px] mr-[10px] dark:filter dark:invert"
        />
        <h3 className="font-bold text-[22px]">{sectionTitle}</h3>
        <Button
          onClick={onMoreClick}
          content="+ 더보기"
          classNames="absolute right-0 text-[12px] hover:text-lightRed transition-3"
        />
      </div>

      <ul className={`flex flex-wrap`}>
        {products.map((product: Product) => (
          <li className="px-[4px] mb-[20px]" key={`productEl-${product.id}`}>
            <ProductCard productInfo={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeProductsSection
