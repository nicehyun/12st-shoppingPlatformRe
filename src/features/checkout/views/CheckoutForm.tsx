"use client"

import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import { ReactNode } from "react"
import CheckoutButton from "./CheckoutButton"

interface ICheckoutForm {
  children: ReactNode
}

const CheckoutForm = ({ children }: ICheckoutForm) => {
  const { checkoutMutateAsync, isCheckoutLoading } = useCheckoutMutaion()

  return (
    <form onSubmit={checkoutMutateAsync} className="max-w-[800px] mx-auto">
      {children}

      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
