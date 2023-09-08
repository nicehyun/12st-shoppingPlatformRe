import { AiOutlineRight } from "react-icons/ai"

interface IPaymentBenefitEl {
  benefitTitle: string
  classNames?: string
  onClickBenefit: () => void
}

const PaymentBenefitEl = ({
  benefitTitle,
  classNames,
  onClickBenefit,
}: IPaymentBenefitEl) => {
  return (
    <li className={classNames}>
      <button
        onClick={onClickBenefit}
        type="button"
        className="flex items-center text-[16px] md:text-[14px] sm:text-[14px]"
      >
        <span className="bg-white mr-[10px] text-[12px] p-[3px] rounded-[5px]">
          혜택
        </span>

        <span>{benefitTitle}</span>

        <span className="text-lightBlack ml-[5px]">
          <AiOutlineRight />
        </span>
      </button>
    </li>
  )
}

export default PaymentBenefitEl
