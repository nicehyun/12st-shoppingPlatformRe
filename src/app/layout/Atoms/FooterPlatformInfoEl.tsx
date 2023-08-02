interface IFooterPlatformInfoEl {
  classNames?: string
  content: string
}

const FooterPlatformInfoEl = ({
  classNames,
  content,
}: IFooterPlatformInfoEl) => {
  return (
    <span className={`${classNames} cursor-pointer text-white/80 mr-[10px]`}>
      {content}
    </span>
  )
}

export default FooterPlatformInfoEl
