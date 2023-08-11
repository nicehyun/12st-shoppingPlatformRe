import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { BiCommentDetail, BiHeart, BiSolidHeart } from "react-icons/bi"
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs"
import { truncateText } from "../utils/text"
import { Product } from "../types/product"

interface IProductCard {
  productInfo: Product
}

// TODO : 아이콘 옆에  reviewCount,  sellCount 표시
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
  } = productInfo

  const productBrandInfo = brand || maker || mallName

  return (
    <Card className="max-w-[194px]">
      <CardHeader
        avatar={
          <Avatar
            sx={{
              color: "#ff4e0a",
              height: "20px",
              backgroundColor: "#fff",
              marginRight: "0px",
            }}
            aria-label={productBrandInfo}
          >
            <Typography variant="body1" sx={{ fontSize: "4px" }}>
              {productBrandInfo}
            </Typography>
          </Avatar>
        }
        title={truncateText(name, 30)}
        titleTypographyProps={{
          fontSize: "11px",
          height: "32px",
        }}
        sx={{ padding: "3px" }}
      />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent className="relative h-[50px]">
        <Typography
          variant="body2"
          color="#d2d2d2"
          sx={{ textDecoration: "line-through", fontSize: 14 }}
          className="absolute left-[16px] bottom-[20px] "
        >
          {price}
        </Typography>
        <Typography
          variant="body2"
          color="#ff4e0a"
          sx={{ fontWeight: 700, fontSize: 16 }}
          className="absolute left-[16px]s bottom-0"
        >
          {discount}%
        </Typography>
        <Typography
          variant="body2"
          color="#333"
          sx={{ fontWeight: 700, fontSize: 20 }}
          className="absolute right-[16px] bottom-[-3px]"
        >
          {discountedPrice}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="relative ">
        <button className="text-[18px] mr-[12px]">
          <BiHeart />
        </button>

        <button className="text-[18px]">
          <BiCommentDetail />
        </button>

        <button className="text-[18px] absolute right-[16px]">
          <BsFillCartDashFill />
        </button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
