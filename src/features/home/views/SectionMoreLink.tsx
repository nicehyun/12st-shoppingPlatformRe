import { ROUTE } from "@/features/common/hooks/useNavigations"
import Link from "next/link"

interface ISectionMoreLink {
  route: ROUTE
}

const SectionMoreLink = ({ route }: ISectionMoreLink) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}${route}`}
      className="absolute right-0 text-[14px] text-lightRed transition-3 font-bold"
    >
      + 더보기
    </Link>
  )
}

export default SectionMoreLink
