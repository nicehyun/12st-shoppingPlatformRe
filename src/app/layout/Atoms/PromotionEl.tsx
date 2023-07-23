interface IPromotionEl {
  content: string
}

const PromotionEl = ({ content }: IPromotionEl) => {
  return <li>{content}</li>
}

export default PromotionEl
