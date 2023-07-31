import gsap from "gsap"
import { MutableRefObject, RefObject } from "react"

type SetupAnimationTransformFn = (
  ref:
    | RefObject<HTMLElement>
    | MutableRefObject<HTMLElement | HTMLElement[] | null>,
  location: "X" | "Y",
  transform: number,
  opacity: 0 | 1,
  display: "none" | "block",
  visibility?: "visible" | "hidden"
) => void

export const setupAnimationTransform: SetupAnimationTransformFn = (
  ref,
  location,
  transform,
  opacity,
  display
) =>
  gsap.to(ref.current, 0.5, {
    transform: `translate${location}(${transform}px)`,
    opacity,
    display,
  })
