interface ISectionTitle {
  title: string
}

const SectionTitle = ({ title }: ISectionTitle) => {
  return (
    <h3 className="font-bold text-[22px] xl:text-[28px] dark:text-white">
      {title}
    </h3>
  )
}

export default SectionTitle
