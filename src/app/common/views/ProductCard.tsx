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

// TODO : 상품 좋아요 했을 경우 꽉찬 하트, 리뷰 위에 숫자 표시
const ProductCard = () => {
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
            aria-label="아디다스"
          >
            <Typography variant="body1" sx={{ fontSize: "4px" }}>
              아디다스
            </Typography>
          </Avatar>
        }
        title={truncateText(
          "아디다스 남녀공용 오리지널 아디컬러 클래식 삼선 나그랑 반팔티 5컬러",
          30
        )}
        titleTypographyProps={{
          fontSize: "11px",
          height: "32px",
        }}
        sx={{ padding: "3px" }}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://shopping-phinf.pstatic.net/main_8633497/86334978739.jpg"
        alt="title"
      />
      <CardContent className="relative h-[50px]">
        <Typography
          variant="body2"
          color="#d2d2d2"
          sx={{ textDecoration: "line-through", fontSize: 14 }}
          className="absolute left-[16px] bottom-[20px] "
        >
          46600
        </Typography>
        <Typography
          variant="body2"
          color="#ff4e0a"
          sx={{ fontWeight: 700, fontSize: 16 }}
          className="absolute left-[16px]s bottom-0"
        >
          18%
        </Typography>
        <Typography
          variant="body2"
          color="#333"
          sx={{ fontWeight: 700, fontSize: 20 }}
          className="absolute right-[16px] bottom-[-3px]"
        >
          38212
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
