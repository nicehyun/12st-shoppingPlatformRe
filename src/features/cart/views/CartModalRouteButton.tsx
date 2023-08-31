interface ICartModalRouteButton {
  content: string
}

const CartModalRouteButton = ({ content }: ICartModalRouteButton) => {
  return (
    <button className="text-center text-[14px] md:text-[12px] sm:text-[12px] rounded-[5px] border-[1px] border-black dark:border-white my-[20px] p-[8px] transition-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
      {content}
    </button>
  )
}

export default CartModalRouteButton
