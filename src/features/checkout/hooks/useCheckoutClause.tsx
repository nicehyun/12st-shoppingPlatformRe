import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useCheckoutClause = () => {
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [isCheckedUserInfoClause, setIsCheckedUserInfoClause] = useState(false)
  const [isCheckedPaymentAgencyClause, setIsCheckedPaymentAgencyClause] =
    useState(false)
  const [
    isCheckedProvisionOfUserInfoClause,
    setIsCheckedProvisionOfUserInfoClause,
  ] = useState(false)

  const toggleCheckedClause = (setterfn: Dispatch<SetStateAction<boolean>>) => {
    setterfn((prev) => !prev)
  }

  const toggleAllCheckedClause = () => {
    if (isAllChecked) {
      setIsCheckedUserInfoClause(false)
      setIsCheckedPaymentAgencyClause(false)
      setIsCheckedProvisionOfUserInfoClause(false)
    } else {
      setIsCheckedUserInfoClause(true)
      setIsCheckedPaymentAgencyClause(true)
      setIsCheckedProvisionOfUserInfoClause(true)
    }
  }

  useEffect(() => {
    if (
      isCheckedUserInfoClause &&
      isCheckedPaymentAgencyClause &&
      isCheckedProvisionOfUserInfoClause
    ) {
      setIsAllChecked(true)
    } else {
      setIsAllChecked(false)
    }
  }, [
    isCheckedUserInfoClause,
    isCheckedPaymentAgencyClause,
    isCheckedProvisionOfUserInfoClause,
  ])

  return {
    isAllClauseCheck: isAllChecked,
    toggleAllCheckedClause,
    isCheckedUserInfoClause,
    toggleUserInfoClause: () => toggleCheckedClause(setIsCheckedUserInfoClause),
    isCheckedPaymentAgencyClause,
    togglePaymentAgencyClause: () =>
      toggleCheckedClause(setIsCheckedPaymentAgencyClause),
    isCheckedProvisionOfUserInfoClause,
    toggleProvisionOfUserInfoClause: () =>
      toggleCheckedClause(setIsCheckedProvisionOfUserInfoClause),
  }
}
