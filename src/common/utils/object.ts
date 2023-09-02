export const convertingObjectIntoArray = (objectData: {
  [key: number]: any
}) => {
  const convertedArray = []

  for (const key in objectData) {
    convertedArray.push(objectData[key])
  }

  return convertedArray
}
