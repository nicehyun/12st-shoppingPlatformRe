import { Clause } from "../features/signUpSlice"

export const checkToAllAgreeClause = (clauseState: Clause) => {
  const { age, marketing, privacy, term } = clauseState

  if (age && marketing && privacy && term) {
    return true
  }

  return false
}
