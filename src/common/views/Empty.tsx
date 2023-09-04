"use client"

import { ROUTE, useNavigations } from "../hooks/useNavigations"

interface IEmpty {
  content: string
  routeArray?: { routeContent: string; route: ROUTE }[]
}

const Empty = ({ content, routeArray }: IEmpty) => {
  const { routeTo } = useNavigations()

  return (
    <div className="h-[200px] border-[1px] border-border rounded-[5px] flexCenter flex-col">
      <p className="font-bold text-black xl:text-[20px]">{content}</p>

      <div>
        {routeArray?.length &&
          routeArray?.map((routeEl) => (
            <button
              key={routeEl.routeContent}
              onClick={() => routeTo(routeEl.route)}
              className="bg-black text-white w-[200px] py-[10px] mt-[20px]"
            >
              {routeEl.routeContent}
            </button>
          ))}
      </div>
    </div>
  )
}

export default Empty
