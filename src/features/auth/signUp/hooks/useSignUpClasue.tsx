import { useEffect, useState } from "react"

export const useSignUpClasue = () => {
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [isAgeClauseCheck, setIsAgeClauseCheck] = useState(false)
  const [isTermClauseCheck, setIsTermClauseCheck] = useState(false)
  const [isPrivacyCheck, setIsPrivacyClauseCheck] = useState(false)
  const [isMarketingClauseCheck, setIsMarketingClauseCheck] = useState(false)

  const checkedClaseState = {
    all: isAllCheck,
    age: isAgeClauseCheck,
    term: isTermClauseCheck,
    privacy: isPrivacyCheck,
    marketing: isMarketingClauseCheck,
  }

  const unAllCheckedClauseCheck = () => {
    setIsAgeClauseCheck(false)
    setIsTermClauseCheck(false)
    setIsPrivacyClauseCheck(false)
    setIsMarketingClauseCheck(false)
  }

  const allCheckedClauseCheck = () => {
    setIsAgeClauseCheck(true)
    setIsTermClauseCheck(true)
    setIsPrivacyClauseCheck(true)
    setIsMarketingClauseCheck(true)
  }

  const toggleAllCheck = () => {
    setIsAllCheck((prev) => !prev)

    !isAllCheck ? allCheckedClauseCheck() : unAllCheckedClauseCheck()
  }

  const toggleAgeClauseCheck = () => {
    setIsAgeClauseCheck((prev) => !prev)
  }

  const toggleTermClauseCheck = () => {
    setIsTermClauseCheck((prev) => !prev)
  }

  const togglePrivacyClauseCheck = () => {
    setIsPrivacyClauseCheck((prev) => !prev)
  }

  const toggleMarketingClauseCheck = () => {
    setIsMarketingClauseCheck((prev) => !prev)
  }

  const resetClauseCheck = () => {
    setIsAllCheck(false)
    setIsAgeClauseCheck(false)
    setIsTermClauseCheck(false)
    setIsPrivacyClauseCheck(false)
    setIsMarketingClauseCheck(false)
  }

  useEffect(() => {
    const clauseStateWithoutAll = {
      age: isAgeClauseCheck,
      term: isTermClauseCheck,
      privacy: isPrivacyCheck,
      marketing: isMarketingClauseCheck,
    }

    const isAllClausesChecked = Object.values(clauseStateWithoutAll).every(
      (value) => value === true
    )
    isAllClausesChecked ? setIsAllCheck(true) : setIsAllCheck(false)
  }, [
    isAgeClauseCheck,
    isTermClauseCheck,
    isPrivacyCheck,
    isMarketingClauseCheck,
  ])

  return {
    checkedClaseState,
    toggleClauseCheck: {
      toggleAllCheck,
      toggleAgeClauseCheck,
      toggleTermClauseCheck,
      togglePrivacyClauseCheck,
      toggleMarketingClauseCheck,
    },
    resetClauseCheck,
  }
}
