import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

import Avatar from "@mui/material/Avatar"

import Typography from "@mui/material/Typography"
import { BiCommentDetail } from "react-icons/bi"
import { MdOutlineSell } from "react-icons/md"
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs"
import { numberToLocaleString, sliceText, truncateText } from "../utils/text"
import { Product } from "../types/product"
import useSessionQuery from "@/app/api/user/[email]/useSessionQuery"

import { checkingTheExistOfProduct } from "../utils/product"
import { useProductListInCartQuery } from "@/features/cart/hooks/useProductListInCartQuery"
import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"

interface IProductCard {
  productInfo: Product
}

const ProductCard = ({ productInfo }: IProductCard) => {
  const {
    brand,
    maker,
    mallName,
    name,
    image,
    price,
    discount,
    discountedPrice,
    reviewCount,
    sellCount,
    id,
  } = productInfo

  const productBrandInfo = brand || maker || mallName

  const { sessionQuery } = useSessionQuery()

  const addMutaion = useAddToCartMutaion(productInfo)

  // const { productListInCart } = useProductListInCartQuery(
  //   sessionQuery?.user.email ?? ""
  // )

  // console.log(productListInCart)

  // const existedProduct = productListInCart.includes(id)
  // console.log(existedProduct)

  // const isExistedProductInCart = checkingTheExistOfProduct(
  //   productListInCart ? productListInCart : [],
  //   productInfo.id
  // )

  // console.log(isExistedProductInCart)

  const onClickAddProductInCart = async () => {
    // if (sessionQuery === null) {
    //   // setIsShowCartFeedbackModal(true)
    //   console.log("세션 없음")
    //   return
    // }
    // if (
    //   (productListInCart && productListInCart.length >= 10) ||
    //   isProductInCart
    // )
    //   return
    addMutaion.mutate()
    // setupAnimationTransform(cartAddIconRef, "Y", -100, 0, "none")
    // setupAnimationTransform(cartRemoveIconRef, "Y", 0, 1, "block")
  }

  return (
    <Card className="w-[194px]">
      <CardHeader
        avatar={
          <Avatar
            sx={{
              color: "#ff4e0a",
              height: "20px",
              backgroundColor: "#fff",
              borderRadius: 0,
              display: "inline-block",
              width: "100%",
            }}
            aria-label={productBrandInfo}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "4px",
              }}
            >
              {productBrandInfo}
            </Typography>
          </Avatar>
        }
        sx={{ padding: "3px", height: "38px" }}
      />
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="h-[194px]"
      />
      <CardContent className="relative h-[90px]">
        <Typography
          variant="h3"
          sx={{ fontSize: 14 }}
          className="absolute left-[8px] right-[8px] top-[5px] text-black"
        >
          {truncateText(name, 30)}
        </Typography>

        <Typography
          variant="body2"
          color="#d2d2d2"
          sx={{ textDecoration: "line-through", fontSize: 14 }}
          className="absolute left-[8px] bottom-[20px]"
        >
          {numberToLocaleString(price)}
        </Typography>
        <Typography
          variant="body2"
          color="#ff4e0a"
          sx={{ fontWeight: 700, fontSize: 16 }}
          className="absolute left-[8px] bottom-0"
        >
          {discount}%
        </Typography>
        <Typography
          variant="body2"
          color="#333"
          sx={{ fontWeight: 700, fontSize: 18 }}
          className="absolute right-[8px] bottom-[-3px]"
        >
          {numberToLocaleString(discountedPrice)}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="relative">
        <button className="text-[18px] mr-[12px] flexCenter">
          <MdOutlineSell />
          <span className="text-[2px]">{sellCount}</span>
        </button>

        <button className="text-[18px] flexCenter">
          <BiCommentDetail />
          <span className="text-[2px]">{reviewCount}</span>
        </button>

        <button
          onClick={onClickAddProductInCart}
          className="text-[18px] absolute right-[8px]"
        >
          <BsFillCartDashFill />
        </button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
