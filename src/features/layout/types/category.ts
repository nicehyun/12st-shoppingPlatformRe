export type CategoryHierarchy = {
  [category1: string]: {
    [category2: string]:
      | {
          [category3: string]: string[] | undefined
        }
      | undefined
  }
}
