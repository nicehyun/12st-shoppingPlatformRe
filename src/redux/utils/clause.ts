type CheckoutState = {
  age: boolean
  marketing: boolean
  privacy: boolean
  term: boolean
}

type CheckoutClauseCheck = {
  all: boolean
  collectionOfUserInfo: boolean
  provisionOfUserInfo: boolean
  paymentAgency: boolean
}

export const checkToAllAgreeClause = (clauseState: CheckoutState) => {
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
