interface ISectionSubTitle {
  subTitle: string
}

const SectionSubTitle = ({ subTitle }: ISectionSubTitle) => {
  return (
    <p className="text-[12px] xl:text-[14px] dark:text-white">{subTitle}</p>
  )
}

export default SectionSubTitle
