import { FC } from "react"

interface IWithConditionComponent {
  condition: boolean
}

const withConditionComponents = (Component: FC<any>) => {
  return function withConditionComponent({
    condition,
  }: IWithConditionComponent) {
    return condition ? <Component /> : <></>
  }
}

export default withConditionComponents
