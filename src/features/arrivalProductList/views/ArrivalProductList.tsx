import ProductCard from "@/features/common/views/ProductCard"
import { homeAPI } from "@/features/home/models/homeAPI"
import { Fragment, use } from "react"

const ArrivalProductList = () => {
  const { arrivalProductList } = use(homeAPI.getIndividualSectionProductList())
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
      {arrivalProductList.map((product) => (
        <Fragment key={`new-product-${product.id}`}>
          <div className="relative">
            <ProductCard productInfo={product} />
            <span className="absolute top-0 left-0 bg-black w-[50px] h-[50px] flexCenter text-white text-[16px] font-bold">
              NEW
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default ArrivalProductList
