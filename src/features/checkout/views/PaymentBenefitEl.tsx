import Button from "@/features/common/views/Button"
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
    <li className={`${classNames} text-black`}>
      <Button
        onClick={onClickBenefit}
        classNames="flex items-center md:text-[14px] sm:text-[14px] w-full"
        content={
          <>
            <span className="bg-white mr-[10px] text-[12px] p-[3px] rounded-[5px]">
              혜택
            </span>

            <span className="relative truncate pr-[18px]">
              {benefitTitle}
              <span className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <AiOutlineRight />
              </span>
            </span>
          </>
        }
      />
    </li>
  )
}

export default PaymentBenefitEl
