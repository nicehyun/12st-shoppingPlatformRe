import { Product } from "@/common/types/product"

export type ProductInCart = Product & { amount: number }

export type ProductsInCart = ProductInCart[]
