export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
  .split('/')
  .map((value: string): number => {
    // return parsInt(value)
    return +value
  })

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
}