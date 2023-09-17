import { CheckoutClauseCheck } from "../features/checkoutSlice"
import { Clause } from "../features/signUpSlice"

export const checkToAllAgreeClause = (clauseState: Clause) => {
  const { age, marketing, privacy, term } = clauseState

  if (age && marketing && privacy && term) {
    return true
  }

  return false
}

export const checkToAllAgreeClauseByCheckout = (
  clauseState: CheckoutClauseCheck
) => {
  const { collectionOfUserInfo, paymentAgency, provisionOfUserInfo } =
    clauseState

  if (collectionOfUserInfo && paymentAgency && provisionOfUserInfo) {
    return true
  }

  return false
}
