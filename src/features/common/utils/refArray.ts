import { MutableRefObject } from "react";

export type ManageRefArrayFn<T> = (
  index: number,
  ref: MutableRefObject<T[]>
) => (refEl: T) => void;

export const manageRefArray: ManageRefArrayFn<HTMLElement> = (index, ref) => {
  return (refEl: HTMLElement) => {
    ref.current[index] = refEl;
  };
};
