import { ChangeEvent, Reducer, useEffect, useReducer } from "react"

type InitialInputState = {
  value: string
  isTouched: boolean
}

type InputStateReducerAction =
  | { type: "INPUT"; value: string }
  | { type: "BLUR" }
  | { type: "RESET" }

const initialInputState = {
  value: "",
  isTouched: false,
}

export type ReturnUseUserInput = {
  value: string
  isValid: boolean
  hasError: boolean
  handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleInputBlur: () => void
  reset: () => void
}

const inputStateReducer = (
  state: InitialInputState,
  action: InputStateReducerAction
) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value }
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" }
  }
  return state
}

export const useUserInput = (
  validateValue: (value: string) => boolean,
  defaultValue?: string
) => {
  const [inputState, dispatch] = useReducer<
    Reducer<InitialInputState, InputStateReducerAction>
  >(inputStateReducer, initialInputState)

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value })
  }

  const handleInputBlur = () => {
    dispatch({ type: "BLUR" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }

  useEffect(() => {
    if (defaultValue) {
      dispatch({ type: "INPUT", value: defaultValue })
    }
  }, [defaultValue])

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  }
}

export const useUserInputWithRePassword = (passwordValue: string) => {
  const [inputState, dispatch] = useReducer<
    Reducer<InitialInputState, InputStateReducerAction>
  >(inputStateReducer, initialInputState)

  const valueIsValid = passwordValue === inputState.value
  const hasError = !valueIsValid && inputState.isTouched

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value })
  }

  const handleInputBlur = () => {
    dispatch({ type: "BLUR" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  }
}
