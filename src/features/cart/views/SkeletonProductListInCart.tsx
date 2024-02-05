import SkeletonProductInCart from "./SkeletonProductInCart"

const SkeletonProductListInCart = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <SkeletonProductInCart key={`skeleton-cart-product-${index}`} />
      ))}
    </>
  )
}

export default SkeletonProductListInCart
